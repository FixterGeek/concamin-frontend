import React, { Component } from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export const ProfileDisplay = () => {
    return (
        <div className='padding-gral'>
            <Paper  elevation={4}>
                <div className='profile-image'>

                </div>
                <Avatar
                    alt="User"
                    src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/32893588_10216503871007215_7637282803905724416_n.jpg?_nc_cat=0&oh=7867ee410eda379ae94e4018ed4a42ba&oe=5B8F3876"
                    style={{width:'60px', height:'60px'}}
                />
            </Paper>
        </div>
    )
}