import React from 'react';
import './Profile.css';
import School from '@material-ui/icons/School';
import moment from 'moment'
import Delete from '@material-ui/icons/Delete';



export const DegreeDisplay = ({title, university, _id, from, to, removeSkill}) => {
    return (
        <div className='degree'>
            <School style={{fontSize:"30px", marginRight:"20px"}}/>
            <div>
                <p className="name">{title}</p>
                <p className="name">{university}</p>
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