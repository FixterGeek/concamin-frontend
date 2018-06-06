import React, { Component } from 'react';
import './Profile.css';
import {ProfileDisplay} from './ProfileDisplay'; 
import {updateUser, getLoggedUser} from '../../services/userService';
import {getPosts, addPost} from '../../services/postService';
import toastr from 'toastr';
import {HistoryDisplay} from './HistoryDisplay';
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'


class ProfileContainer extends Component {

  state = {
    user:{},
    editing:false,
    loading:true,
    newPost:{
        links:[],
        body:"",
        image:"",
        file:""
    },
    photoPreview:'',
    addLink:false,
    posts:[],
  }

  onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const {user} = this.state;
    user[field] = value;
    this.setState({user});
  };

  componentWillMount(){
    getLoggedUser()
    .then(user=>{
      this.setState({user});
      //toastr.success('Tu perfil se ha actualizado');
    })
    .catch(e=>{
      this.props.history.push('/login')
      console.log(e)
    })
  }

  saveProfile = (cover, profilePic) => {
    //const {user} = this.state;
    const user = {};
    user['username'] = this.state.user.username;
    user['cover'] = cover.files[0];
    user['profilePic'] = profilePic.files[0];
    updateUser(user)
    .then(user=>{
      this.setState({user, editing:false});
      toastr.success('Tu perfil se ha actualizado');
    })
    .catch(e=>{
      toastr.error(e.statusText);
      if(e.statusText === "Forbidden"){
        this.props.history.push('/login')
      }
      console.log(e)
    })
  };

  changeEditing = () => {
    this.setState(state=>{
      return {editing:!state.editing}
    })
  }

  cancel = () =>{
    window.location.reload();
  }

  /* posts functions */ 
componentWillMount(){
    this.setState({loading:true})
    getPosts()
        .then(r=>{
           this.setState({posts:r})
           console.log(r)
           this.setState({loading:false})
        }).catch(e=>{
            console.log(e)
        })
}

handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({loading:true})    
    addPost(this.state.newPost)
        .then(r=>{
            let {posts, newPost} = this.state;
            posts.unshift(r)
            newPost.body=""
            newPost.links=[]
            this.clearFile()
            this.setState({posts, newPost, loading:false, addLink:false})
            
        }).catch(e=>{
            console.log(e)
        })

    
}
handleChange=(e)=>{
    let {newPost} = this.state;
    let field = e.target.name;
    if(e.target.type==="file"){
        newPost[field] = e.target.files[0]
       if(e.target.name==="image"){
        this.handlePreview()
        console.log('preview de foto')
       }
    }
    else{
        newPost[field] = e.target.value
    }
    this.setState({newPost})
    console.log(newPost)
}
handlePreview=()=>{
    let reader = new FileReader();
    reader.readAsDataURL(this.state.newPost.image)
    reader.onload = () => {
        this.setState({photoPreview:reader.result})
    }
}

clearFile=()=>{
    let {newPost} = this.state;
    newPost.image = ''
    newPost.file = ''
    this.setState({photoPreview:'', newPost})
    document.getElementById('image').value = '';
    document.getElementById('file').value = '';
}
ejemplo=()=>{
    console.log("Si funciono")
}

handleLink=()=>{
   this.setState({addLink:!this.state.addLink})
   console.log('lool')
}
addLinks=()=>{
    let {newPost} = this.state;
    newPost['links'].push(newPost.link)
    newPost.link=""       
    this.setState({newPost})
}
clearLink=(key)=>{
    let {newPost} = this.state;
    newPost.links.splice(key, 1)
    this.setState({newPost})
}

  render() {
    const {user, editing, photoPreview, newPost, addLink, posts, loading} = this.state;    
    return (
      <div>
        <ProfileDisplay cancel={this.cancel} onChange={this.onChange} changeEditing={this.changeEditing} editing={editing} {...user} saveProfile={this.saveProfile} />
        
        <div style={{display:'flex',flexDirection:'rows'}}>
            <div >
              <HistoryDisplay />
            </div>
            <div style={{padding:'20px 0 0 20px',width:'100%'}}>
            <NewsFeedComponent
                    posts={posts}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    photoPreview={photoPreview}
                    newPost={newPost}
                    handleLink={this.handleLink}
                    addLink={addLink}
                    addLinks={this.addLinks}
                    clearLink={this.clearLink}
                    clearFile={this.clearFile}/>
            </div>
        </div>

      </div>
    );
  }
}

export default ProfileContainer;
;