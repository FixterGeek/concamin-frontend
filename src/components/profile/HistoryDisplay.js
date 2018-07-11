import React from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {DegreeDisplay} from './DegreeDisplay';
import {JobDisplay} from './JobDisplay';
import Edit from '@material-ui/icons/Edit';
import ModalDegree from './ModalDegree';
import ModalExperience from './ModalExperience';

export const HistoryDisplay = ({}) => {
    return (
        <div className='history'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>
                <div>
                    <div className="bx"><h5>Contacto</h5> <Edit/></div>
                    <p> brenda@fixter.org      </p>
                </div>
                <Divider />
                <div className="bx"><h5>Sobre mí</h5> <Edit/></div>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores deserunt dignissimos mollitia neque placeat,
                    quam quis reprehenderit? A accusamus, assumenda dignissimos,
                    doloremque earum eum, hic libero nesciunt odit quo unde.      </p>
                <Divider />
                <div className="bx"><h5>Formación</h5> <ModalDegree/></div>
                <DegreeDisplay />
                <DegreeDisplay />
                <DegreeDisplay />
                <Divider />
                <div className="bx"><h5>Experiencia</h5> <ModalExperience /> </div>
                <JobDisplay />
                <JobDisplay />
                <JobDisplay />

            </Paper>
        </div>
    )
}