import React, {Component} from 'react';
import {NewsFeedComponent} from './NewsFeedComponent';
import PropTypes from 'prop-types'
import {getOwnPosts, getPosts, addPost, deletePost} from '../../services/postService';
import toastr from 'toastr';
import {PostCard} from './PostCard';
//import { Divider } from '../../../node_modules/@material-ui/core';
import swal from 'sweetalert';


class NFContainer extends Component{

    state = {
        posts:[],
        loading:true,
        newPost:{
            links:[],
            body:"",
            image:"",
            file:""
        },
        user: {},
        skip : 0,
        ask:()=>{},
        photoPreview:'',
        addLink:false,
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({user});
        if(this.props.own){
            this.getOwn();
            this.setState({ask:this.getOwn})
            return;
        }
        else if(this.props.tipo === "PERSONAL"){
            this.getAll();
            this.setState({ask:this.getAll})
            return;
        }
        else if(this.props.tipo === "GROUP"){
            this.getGroupPosts();
            this.setState({ask:this.getGroupPosts});
            return;

        }
    }
//read
    getGroupPosts = (skip=0) => {
        const groupId = this.props.groupId;
        getPosts(skip, "GROUP", groupId)
        .then(posts=>{
            if(posts.length < 1) {
                this.refs.mas.innerHTML="¡Ya no hay mas posts!";
                this.refs.mas.disabled=true;
            }
            const newArray = [...this.state.posts, ...posts];
            this.setState({posts:newArray, skip})
        })
        .catch(err=>{
            console.log(err);
            toastr.error('No se pudieron cargar tus posts');
        })
    }

    getAll = (skip=0) => {
        getPosts(skip)
        .then(posts=>{
            if(posts.length < 1) {
                this.refs.mas.innerHTML="¡Ya no hay mas posts!";
                this.refs.mas.disabled=true;
            }
            const newArray = [...this.state.posts, ...posts];
            this.setState({posts:newArray, skip})
        })
        .catch(err=>{
            console.log(err);
            toastr.error('No se pudieron cargar tus posts');
        })
    };

    getOwn = (skip=0)=>{
        getOwnPosts(skip)
        .then(posts=>{
            if(posts.length < 1) {
                this.refs.mas.innerHTML="¡Ya no hay mas posts!";
                this.refs.mas.disabled=true;
            }
            const newArray = [...this.state.posts, ...posts];
            this.setState({posts:newArray, skip})
        })
        .catch(err=>{
            console.log(err);
            toastr.error('No se pudieron cargar tus posts');
        })
    }



    askForMore = () => {
        let {skip} = this.state;
        skip += 10;
        this.state.ask(skip)
    }
//write

handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({loading:true})  
    const {newPost} = this.state; 
    if(this.props.tipo === "GROUP" ){
        newPost.tipo = "GROUP";
        newPost.group = this.props.groupId;
    }
    addPost(newPost)
         .then(post=>{
            let {posts} = this.state;
            posts.unshift(post)
            newPost.body=""
            newPost.links=[]
            this.clearFile()
            this.setState({posts, newPost, loading:false, addLink:false})
            toastr.success('Se ha publicado tu post')
         }).catch(e=>{
            toastr.error('No se pudo publicar, posiblemente tu archivo es muy pesado' + e)
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

removePost = (id) => {
    swal({
        title: `Se eliminará el post: ${id}`,
        buttons:true,
        icon:"error",
        dangerMode:true
    })
    .then(willDelete=>{
        if(willDelete){
            return deletePost(id);
        }
        return Promise.reject('cancel');
    })
    .then(post=>{
        swal({
            icon: "success",
            title: "Se borró",
            button: true
        });
        let {posts} = this.state;
        posts = posts.filter(p=>p._id!==id);
        this.setState({posts});
    })
    .catch(e=>{
        if(e==="cancel")return;
        swal({
            icon: "warning",
            text: e,
            title: "No se pudo borrar"
        });
        setTimeout(()=>swal.close(),2000);
        return;
    })
};


    render(){
        const { posts, user, newPost, photoPreview,addLink } = this.state;
        return(
            <div>
            <PostCard 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                photoPreview={photoPreview} 
                clearFile={this.clearFile}
                user={user}
                {...newPost} 
                clearLink={this.clearLink}
                addLinks={this.addLinks}
                handleLink={this.handleLink}
                addLink={addLink}
            />
            <NewsFeedComponent
                removePost={this.removePost}
                user={user}
                posts={posts}
            />
            <button ref="mas" style={{marginBottom:100}} onClick={this.askForMore} >Cargar más</button>  
            </div>
            
        );
    }
}

NFContainer.propTypes = {
    own: PropTypes.bool.isRequired,
    tipo: PropTypes.string.isRequired, 
    groupId: PropTypes.string,
    eventId: PropTypes.string,
}

NFContainer.defaultProps = {
    own: false,
    tipo: "PERSONAL"
}

export default NFContainer;