import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardEvent} from "./CardEvent";
import {CreateCardEvent} from "./CreateEventCard";
import {CreateEvent} from "./CreateEvent";
import {getPosts} from "../../services/postService";

class EventsPage extends Component {
    state={
        loading:true,
        photoPreview:'',
        newEvent:{
            image:"",
        },
        openCreate:false,
        user:{}
    }
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("aqui esta",user)
        this.setState({user:user})
    }
    openNewEvent=()=>{
        let {openCreate}=this.state;
        openCreate =! openCreate;
        this.setState({openCreate})
    }
    handleChange=(e)=>{
        let {newEvent} = this.state;
        let name = e.target.name;
            if(e.target.name==="image"){
                newEvent['image'] = e.target.files[0]
               this.handlePreview()
                console.log('preview de foto')
            }else{
                newEvent[name]=e.target.value
            }
        this.setState({newEvent})
        console.log(newEvent)
        console.log("me dieron")
    }
    handlePreview=()=>{
        let reader = new FileReader();
        reader.readAsDataURL(this.state.newEvent.image)
        reader.onload = () => {
            this.setState({photoPreview:reader.result})
        }
    }
    clearFile=()=>{
        let {newEvent} = this.state;
        newEvent.image = ''
        this.setState({photoPreview:'', newEvent})
        document.getElementById('image').value = '';
        console.log("Borrare")
    }
    close=()=>{
        this.clearFile()
        this.setState({openCreate:false})
    }
    render() {
        let {photoPreview,user} = this.state;
        return (

            <GridList cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CreateEvent
                        open={this.state.openCreate}
                        close={this.close}
                        handleChange={this.handleChange}
                        photoPreview={photoPreview}
                        todayDate={this.state.todayDate}
                        clearFile={this.clearFile}
                    />

                    <CardEvent user={user} />
                </GridListTile>

                <GridListTile cols={1} style={styles.gridTile}>
                    <CreateCardEvent onOpen={this.openNewEvent}/>
                    <AdCard/>
                </GridListTile>
            </GridList>




        )
    }
}

const styles = {

    gridTile:{
        paddingLeft:'50px'
    }
}

export default EventsPage;
