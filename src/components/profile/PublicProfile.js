import React, {Component} from 'react';
import {ProfileDisplay} from './ProfileDisplay';
import {getPublicUser} from '../../services/userService';
import {getPosts, addPost} from '../../services/postService';
import {HistoryDisplay} from './HistoryDisplay';
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'
import toastr from 'toastr';

class PublicProfile extends Component{

    state = {
        user:{},
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

    componentWillMount(){
        console.log(this.props.match.params.id);
        getPublicUser(this.props.match.params.id)
        .then(user=>{
            this.setState({user});
        })
        .catch(e=>{
            console.log(e)
            toastr.error(e);
            this.props.history.push('/login');
        });
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
      /* posts functions */ 

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

    render(){
        
        const {user, editing, photoPreview, newPost, addLink, posts, loading} = this.state;    
        return(
            <div>
                <ProfileDisplay isPublic={true} {...user} />
                <div style={{display:'flex',flexDirection:'rows'}}>
                    <div >
                        <HistoryDisplay />
                    </div>
                    <div style={{padding:'20px 0 0 50px',width:'100%'}}>
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

export default PublicProfile;