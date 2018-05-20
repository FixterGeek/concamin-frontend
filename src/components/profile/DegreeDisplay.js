import React from 'react';
import './Profile.css';
import School from '@material-ui/icons/School';

export const DegreeDisplay = () => {
    return (
        <div className='degree'>
            <School style={{fontSize:"30px", marginRight:"20px"}}/>
            <div>
                <p className="name">Lic. en Economia</p>
                <p className="date">Enero 2000 </p>
            </div>
        </div>
    )
}