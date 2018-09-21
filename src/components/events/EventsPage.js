import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardEvent} from "./CardEvent";
import {CreateCardEvent} from "./CreateEventCard";
import {CreateEvent} from "./CreateEvent";
import {addItem, getItems, deleteItem, doAssist} from '../../services/eventService'
//import {getPosts} from "../../services/postService";
import toastr from 'toastr';


class EventsPage extends Component {
    state={
        loading:true,
        photoPreview:'',
        newEvent:{
            image:"",
        },
        openCreate:false,
        user:{},
        events:[]
    }
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("aqui esta",user)
        this.setState({user:user})
        //traer eventos
        this.getEvents()
    }

    getEvents = () => {
        getItems()
        .then(events=>{
            console.log(events)
            this.setState({events})
        })
        .catch(e=>{
            toastr.error("No se pudieron cargar los eventos")
            toastr.error(e)
        })
    }

    openNewEvent=()=>{
        let {openCreate}=this.state;
        openCreate =! openCreate;
        this.setState({openCreate})
    }
    handleChange=(e)=>{
        let {newEvent} = this.state;
        let name = e.target.name;
            if(e.target.name==="cover"){
                newEvent['cover'] = e.target.files[0]
               this.handlePreview(e.target.files[0])
                console.log('preview de foto')
            }else{
                console.log(e.target.value)
                newEvent[name]=e.target.value
            }
        this.setState({newEvent})
        // console.log(newEvent)
        // console.log("me dieron")
    }
    handlePreview=(file)=>{
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({photoPreview:reader.result})
        }
    }
    clearFile=()=>{
        let {newEvent} = this.state;
        newEvent.cover = ''
        this.setState({photoPreview:'', newEvent})
        document.getElementById('image').value = '';
        console.log("Borrare")
    }
    close=()=>{
        this.clearFile()
        this.setState({openCreate:false})
    }

    createEvent = () => {
        const {newEvent} = this.state
        //console.log(newEvent)
        addItem(newEvent)
        .then(item=>{
            const {events} = this.state
            events.unshift(item)
            this.setState({events, openCreate:false})
            toastr.success("Tu evento se creo correctamente")
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudo crear el evento", e)
        })
    }

    removeEvent = (id)=>{
        if(!window.confirm("Esta acción no se puede revertir, ¿estás segur@?")) return
        deleteItem(id)
        .then(()=>{
            let {events} = this.state
            events = events.filter(e=>e._id !== id )
            this.setState({events})
            toastr.info("Se ha eliminado tu evento")
        })
        .catch(e=>{
            console.log(e)
            toastr.error("No se pudo Eliminar el evento", e)
        })

    }

    assist = (eventId) => {
        doAssist(eventId)
        .then(event=>{
            console.log(event)
            let {events} = this.state
            events = [...events.map(e=>{
                if(e._id === event._id) return event
                return e
            })]
            this.setState({events})
            toastr.info("tu asistencia se ha actualizado")

        })
        .catch(e=>{
            console.log(e)
            toastr.error("No pudimos agregarte al evento", e)
        })
    }

    render() {
        let {photoPreview,user, events} = this.state;
        return (

            <GridList cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CreateEvent
                    createEvent={this.createEvent}
                        open={this.state.openCreate}
                        close={this.close}
                        handleChange={this.handleChange}
                        photoPreview={photoPreview}
                        todayDate={this.state.todayDate}
                        clearFile={this.clearFile}
                    />

                    {
                        events.map((e,i)=>{
                            return <CardEvent assist={this.assist} removeEvent={this.removeEvent} key={i} {...e} user={user} />
                        })
                    }
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
