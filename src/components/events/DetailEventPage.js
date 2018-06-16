import React, { Component } from 'react'
import {getPosts, addPost} from '../../services/postService';
import { MainLoader } from '../loader/MainLoader';
import {DetailEvent} from "./DetailEvent";



class DetailEventPage extends Component {
    state={
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
        user:{}
    }

    componentWillMount(){
        this.setState({loading:true})
        getPosts()
            .then(r=>{
                this.setState({posts:r})
                console.log(r)
                this.setState({loading:false})
            }).catch(e=>{
            console.log("este es tu error",e)
        })
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("aqui esta",user)
        this.setState({user:user})
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
                this.setState({posts, newPost, loading:false})

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
        let {photoPreview, newPost, addLink, posts, loading,user} = this.state;
        // if(loading) return(<MainLoader/>)
        return (

            <div>

                    <DetailEvent
                        user={user}
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




        )
    }
}

const styles = {
    gridTile:{
        padding:'2%'
    }
}

export default DetailEventPage