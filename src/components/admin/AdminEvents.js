import React, {Component} from 'react';
import './Admin.css';
import AdminEventCard from './AdminEventCard';

class AdminEvents extends Component {


    //testing chats
    componentDidMount () {
        window.scroll(0, 0)
    }

    render() {

        return (
            <div className="">
                <h2>Eventos</h2>
                <div className="fl_admin">
                    <AdminEventCard />
                </div>
            </div>
        );
    }
}


export default AdminEvents;