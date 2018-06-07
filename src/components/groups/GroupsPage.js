import React,{Component} from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardGroup} from "./CardGroup";
import {CardCreateGroup} from "./CardCreateGroup";
import {CreateGroup} from "./CreateGroup";

export default class GroupsPage extends Component {
    state={
        openCreate:false,
    }

    openNewGroup=()=>{
        let {openCreate}=this.state;
        openCreate = !openCreate
        this.setState({openCreate})
    }
    render(){
        return(
            <GridList  cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CreateGroup open={this.state.openCreate} close={this.openNewGroup}/>
                    <CardGroup />
                </GridListTile>
                <GridListTile cols={1} style={{paddingLeft:'50px'}}>
                    <CardCreateGroup onOpen={this.openNewGroup}/>
                    <AdCard/>

                </GridListTile>
            </GridList>
        );
    }
}

const styles = {

   
}