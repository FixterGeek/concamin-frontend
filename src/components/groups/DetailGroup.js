import React, { Component } from 'react'
//import {getPosts, addPost} from '../../services/postService';
import {getSingleItem, deleteItem} from '../../services/groupsService';
import {Paper,GridList,GridListTile, Button} from '@material-ui/core/';
import { MainLoader } from '../loader/MainLoader';
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'
import ChatGroup from "./ChatGroup";
import toastr from 'toastr';
import NFContainer from '../newsfeed/NFContainer';
import swal from 'sweetalert';
import "./groups.css"




class DetailGroup extends Component {
    state={
        loading:true,
        user:{},
        group:{owner:''}

    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem("user"));
        this.setState({user, loading:true});
        this.getGroup();
        // swal('chet');
        // setTimeout(()=>swal.close(),2000)
    }

    getGroup = () => {
        const id = this.props.match.params.id;
        getSingleItem(id)
        .then(group=>{
            const {user} = this.state;
            user.owner = user._id == group.owner._id;
            this.setState({group, user})

            //checamos si el grupo está en revision
            this.checkStatus();
        })
        .catch(e=>{
            toastr.error('No eres miembro de este grupo o el grupo no existe');
            this.props.history.push('/main/groups');
        })
    };

    checkStatus = () => {
        if(this.state.group.revision){
            swal({
                title: "Tu grupo aún está en revisión",
                text: "Te haremos saber si es autorizado \n \n Mientras tanto puedes trabajar en él",
                icon: "warning",
                button: true,
                dangerMode: true
              })
        }
    }

    eliminar = () =>{
        swal({
            title: "¿Estas segur@ que deseas eliminar el grupo?",
            text: "Una vez borrado no será posible recuperarlo y todos los miembros del grupo serán notificados!",
            icon: "warning",
            buttons: ["CANCELAR", "SI, Borrar"],
            dangerMode: true,
            //closeModal:false
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteItem(this.state.group._id)
                .then(()=>{
                    swal("¡Listo, Tu grupo ha sido borrado!", {
                        icon: "success",
                    });
                    this.getGroup();
                })
                .catch(e=>{
                    swal({
                        text: "Algo pasó, no se pudo borrar",
                        dangerMode: true
                    });
                })

            } else {
              swal("Tu grupo está a salvo ;)");
              setTimeout(()=>swal.close(),1000)
            }
          });
    }


    render() {
        const groupId = this.props.match.params.id;
        const {loading,user, group} = this.state;
        const {owner} = group;
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
                                    {user._id == owner._id && 
                                    <div>
                                    <Button variant="contained" color="secondary" onClick={this.eliminar}  >Eliminar</Button>
                                    <Button variant="outlined" color="primary" onClick={()=>{}}  >Invitar</Button>
                                    <Button variant="outlined" disabled >Solicitar Cambio</Button>
                            
                                    </div>
                                    }
                                    <br />  
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