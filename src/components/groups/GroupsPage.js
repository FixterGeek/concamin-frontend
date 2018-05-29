import React,{Component} from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardGroup} from "./CardGroup";
import {CardCreateGroup} from "./CardCreateGroup";
import {CreateGroup} from "./CreateGroup";

export default class GroupsPage extends Component {
    render(){
        return(
            <GridList style={{marginTop:50}}  cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} style={styles.gridTile}>
                    <CreateGroup/>
                    <CardGroup/>
                </GridListTile>
                <GridListTile cols={1} style={styles.gridTile}>
                    <CardCreateGroup/>
                    <AdCard/>

                </GridListTile>
            </GridList>
        );
    }
}

const styles = {

    gridTile:{
        padding:'2%'
    }
}