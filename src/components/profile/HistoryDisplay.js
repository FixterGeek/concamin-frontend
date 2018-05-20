import React from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {DegreeDisplay} from './DegreeDisplay';
import {JobDisplay} from './JobDisplay';

export const HistoryDisplay = ({}) => {
    return (
        <div className='history'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>
                <h5>Contacto</h5>
                <p> brenda@fixter.org      </p>
                <Divider />
                <h5>Sobre mí</h5>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores deserunt dignissimos mollitia neque placeat,
                    quam quis reprehenderit? A accusamus, assumenda dignissimos,
                    doloremque earum eum, hic libero nesciunt odit quo unde.      </p>
                <Divider />
                <h5>Formación</h5>
                <DegreeDisplay />
                <DegreeDisplay />
                <DegreeDisplay />
                <Divider />
                <h5>Experiencia</h5>
                <JobDisplay />
                <JobDisplay />
                <JobDisplay />

            </Paper>
        </div>
    )
}