import React, {Component} from 'react';
import {NewsFeedComponent} from './NewsFeedComponent';
import PropTypes from 'prop-types'
import {getOwnPosts, getPosts} from '../../services/postService';
import toastr from 'toastr';
import { Divider } from '../../../node_modules/@material-ui/core';


class NFContainer extends Component{

    state = {
        posts:[],
        newPost:{},
        user: {},
        skip : 0,
        ask:()=>{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({user});
        if(this.props.own){
            this.getOwn();
            this.setState({ask:this.getOwn})
            return;
        }
        if(this.props.tipo === "PERSONAL"){
            this.getAll();
            this.setState({ask:this.getAll})
            return;
        }
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

    render(){
        const { posts, user } = this.state;
        return(
            <div>
            
            <NewsFeedComponent
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