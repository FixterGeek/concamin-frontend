import React from 'react';
import './Profile.css';
import Build from '@material-ui/icons/Domain';

export const JobDisplay = () => {
    return (
        <div className='degree'>
            <Build style={{fontSize:"30px", marginRight:"20px"}}/>
            <div className="box_job">
                <p className="name">CEO Fixter</p>
                <p className="date">Enero 2000 </p>
                <p className="date">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam architecto beatae delectus doloremque eaque esse. </p>
            </div>
        </div>
    )
}