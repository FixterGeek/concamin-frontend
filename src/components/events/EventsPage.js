import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import {AdCard} from "../Advertising/AdCard";
import {CardEvent} from "./CardEvent";
import {CreateCardEvent} from "./CreateEventCard";



class EventsPage extends Component {

    render() {

        return (

            <GridList cellHeight={'auto'} cols={3}>

                <GridListTile cols={2} >
                    <CardEvent/>
                </GridListTile>

                <GridListTile cols={1} style={styles.gridTile}>
                    <CreateCardEvent/>
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
