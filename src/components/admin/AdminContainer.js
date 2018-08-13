import React, { Component } from 'react'
import RoutesAdmin from './RoutesAdmin';
import AdminMenuDisplay from './AdminMenuDisplay';
import './Admin.css';
import Navbar from '../Navbar/Navbar';

class AdminContainer extends Component {

    componentWillMount(){
        if(!localStorage.getItem('user')) this.props.history.push('/login');
    }

    logOut=()=>{
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <Navbar logOut={this.logOut}/>
                <AdminMenuDisplay />
                <div style={{padding:'85px 30px 0 280px'}}>
                    <RoutesAdmin />
                </div>

            </div>
        )
    }
}
export default AdminContainer;
