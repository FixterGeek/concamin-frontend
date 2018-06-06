import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardEvent} from "./CardEvent";



class EventsPage extends Component {

    render() {

        return (

            <GridList cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CardEvent/>
                </GridListTile>
                <GridListTile cols={1} style={{paddingLeft:'20px'}}>
                    <AdCard/>
                </GridListTile>
            </GridList>




        )
    }
}

const styles = {

    gridTile:{
        padding:'2%'
    }
}

export default EventsPage;
