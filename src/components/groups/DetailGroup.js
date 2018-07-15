import React, { Component } from 'react'
//import {getPosts, addPost} from '../../services/postService';
import {getSingleItem} from '../../services/groupsService';
import {Paper,GridList,GridListTile} from '@material-ui/core/';
import { MainLoader } from '../loader/MainLoader';
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'
import ChatGroup from "./ChatGroup";
import toastr from 'toastr';
import NFContainer from '../newsfeed/NFContainer';
import "./groups.css"



class DetailGroup extends Component {
    state={
        loading:true,
        user:{},
        group:{}

    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem("user"));
        this.setState({user, loading:true});
        this.getGroup();
    }

    getGroup = () => {
        const id = this.props.match.params.id;
        getSingleItem(id)
        .then(group=>{
            console.log(group)
            this.setState({group})
        })
        .catch(e=>{
            toastr.error('No eres miembro de este grupo');
            this.props.history.push('/main/groups');
        })
    };


    render() {
        const groupId = this.props.match.params.id;
        const {loading,user, group} = this.state;
        // if(loading) return(<MainLoader/>)
        const cover = "https://las.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/devdiary_gdprinciples_articleheader.jpg?itok=8zfwqH2t";
        let coverImage;
        return (
            <div>

                <GridList cellHeight={'auto'} cols={3}>
                    <GridListTile cols={2}>
                        <Paper style={{minHeight: "379px", marginBottom:"20px"}}>
                            <div ref={div=>coverImage=div} className='event-img' style={{position:"relative", backgroundImage: group.cover ? `url('${group.cover}')` : `url('${cover}')`}}/>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <div className="data-user">
                                    <h4 className="title">{group.name}</h4>
                                </div>
                            </div>
                        </Paper>                                           
{/* //newsfeed */}
<NFContainer
    tipo="GROUP"
    groupId={groupId}
/>
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