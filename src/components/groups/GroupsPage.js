import React,{Component} from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardGroup} from "./CardGroup";
import {CardCreateGroup} from "./CardCreateGroup";
import {CreateGroup} from "./CreateGroup";
import {addItem, getOwnItems} from '../../services/groupsService'
import toastr from 'toastr';

export default class GroupsPage extends Component {
    state={
        openCreate:false,
        newItem:{subject:'Crecimiento profesional'},
        photoPreview:'',
        groups:[],
        user:{},
        invites:[]
    }

    componentWillMount(){
        this.getOwnGroups();
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({user})
    }

    openNewGroup=()=>{
        let {openCreate}=this.state;
        openCreate = !openCreate
        this.setState({openCreate})
    }

    handleChange=(e)=>{
        let {newItem} = this.state;
        let field = e.target.name;
        if(e.target.type==="file"){
            newItem[field] = e.target.files[0]
           if(e.target.name==="cover"){
            this.handlePreview()
            console.log('preview de foto')
           }
        }
        else{
            newItem[field] = e.target.value
        }
        this.setState({newItem})
        console.log(newItem)
    
    }
    handlePreview=()=>{
        let reader = new FileReader();
        reader.readAsDataURL(this.state.newItem.cover)
        reader.onload = () => {
            this.setState({photoPreview:reader.result})
        }
    }
    
    clearFile=()=>{
        let {newItem} = this.state;
        newItem.cover = ''
        //newItem.file = ''
        this.setState({photoPreview:'', newItem})
        document.getElementById('cover').value = '';
        // document.getElementById('file').value = '';
    }

    onChange =(e) =>{
        //e.preventDefault();
        const {newItem} = this.state;
        const field = e.target.name;
        const value = e.target.value;
        newItem[field] = value;
        this.setState({newItem});
    }

    addItem = () => {
        const {newItem} = this.state;
        addItem(newItem)
        .then(group=>{
            toastr.success('Se creo tu grupo');
            const {groups} = this.state;
            groups.unshift(group);
            this.setState({groups});
        })
        .catch(e=>{
            toastr.error("no se pudo guardar")
        })
    };

    getOwnGroups = () => {
        console.log('perro')
        getOwnItems()
        .then(groups=>{
            toastr.success('listo')
            console.log(groups)
            this.setState({groups})
        })
        .catch(e=>{
            toastr.error('No se pudieron cargar tus grupos')
        })
    };

    onChangeInvites = (e) => {
        const invites = e.target.value;
        this.setState({invites});
    };

    sendInvite = () => {

    };

    render(){
        let {user, groups, photoPreview, newItem}=this.state
        if(groups.length > 0 ) console.log(user._id == groups[0].owner._id)
        return(
            <GridList  cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CreateGroup 
                        addItem={this.addItem}
                        subject={newItem.subject}
                        onChange={this.onChange}
                        clearFile={this.clearFile} 
                        handleChange={this.handleChange} 
                        photoPreview={photoPreview} 
                        open={this.state.openCreate} 
                        close={this.openNewGroup}
                    />
                    {groups.map(g=>{
                        return (
                            <CardGroup
                                user={user}
                                {...g}
                              />)
                    })}

                </GridListTile>
                <GridListTile cols={1} style={{paddingLeft:'50px'}}>
                    <CardCreateGroup onOpen={this.openNewGroup}/>
                    <AdCard />

                </GridListTile>
            </GridList>
        );
    }
}

const styles = {

   
}