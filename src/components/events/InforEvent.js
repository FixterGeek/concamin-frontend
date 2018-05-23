import React from 'react';
import './events.css';
import {Paper,Divider} from '@material-ui/core/';
import {AccessTime,LocationOn} from '@material-ui/icons/';

export const InfoEvent = ({}) => {
    return (
        <div className='history'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>
                <h5>Clash of Leafue</h5>
                 <AccessTime/>
                <LocationOn/>
                <Divider />
                <h5>Acerca de</h5>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores deserunt dignissimos mollitia neque placeat,
                    quam quis reprehenderit? A accusamus, assumenda dignissimos,
                    doloremque earum eum, hic libero nesciunt odit quo unde.      </p>
                <Divider />
                <h5>Miembros</h5>


            </Paper>
        </div>
    )
}