import React from 'react';
import './Profile.css';
import Build from '@material-ui/icons/Domain';
import moment from 'moment'
import Delete from '@material-ui/icons/Delete';


export const JobDisplay = ({company, position, _id, from, to, removeSkill}) => {
    return (
        <div className='degree'>
            <Build style={{fontSize:"30px", marginRight:"20px"}}/>
            <div className="box_job">
                <p className="name">{position}</p>
                <p className="name">{company}</p>
                Desde <p className="date">{moment(from).format('MMMM / YYYY')}</p>
                Hasta <p className="date">{moment(to).format('MMMM / YYYY')}</p>
            </div>
            <div><Delete
                onClick={removeSkill}
                className="delete-skill"
                style={{cursor:"pointer"}}
            /></div>
        </div>
    )
}