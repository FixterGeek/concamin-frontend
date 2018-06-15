import React, { Component } from 'react'
import {getPosts, addPost} from '../../services/postService';
import {Paper,GridList,GridListTile} from '@material-ui/core/';
import { MainLoader } from '../loader/MainLoader';
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'
import ChatGroup from "./ChatGroup";
import "./groups.css"


class DetailGroup extends Component {
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
        const cover = "https://las.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/devdiary_gdprinciples_articleheader.jpg?itok=8zfwqH2t";
        let coverImage;
        return (
            <div>

                <GridList cellHeight={'auto'} cols={3}>
                    <GridListTile cols={2}>
                        <Paper style={{minHeight: "379px", marginBottom:"20px"}}>
                            <div ref={div=>coverImage=div} className='event-img' style={{position:"relative", backgroundImage:`url('${cover}')`}}/>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <div className="data-user">
                                    <h4 className="title">Unete a Clash</h4>
                                </div>
                            </div>
                        </Paper>                                           
                        <NewsFeedComponent
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
                    </GridListTile>
                    <GridListTile cols={1} style={{paddingLeft:'50px', position:'fixed', right:5, width:"27%"}}>
                        <ChatGroup user={user}/>
                    </GridListTile>
                </GridList>


            </div>




        )
    }
}

const styles = {
    gridTile:{
        padding:'2%'
    },
    gridTile2:{
        padding:'2%',

    }
}

export default DetailGroup