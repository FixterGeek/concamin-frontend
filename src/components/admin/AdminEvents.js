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
            <div className="eventos">
                <div className="" style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", padding:"0 10px" }}>
                    <h2>Eventos</h2>
                    <div style={{marginRight:"90px"}}>
                        <label htmlFor="">Filtrar por:</label>
                        <select placeholder="Status">
                            <option value="" disable>Todos</option>
                            <option value="">Activos</option>
                            <option value="">Pendientes</option>
                        </select>
                    </div>
                </div>
                <div className="fl_admin">
                    <AdminEventCard />
                    <AdminEventCard />
                    <AdminEventCard />
                    <AdminEventCard />

                </div>
            </div>
        );
    }
}


export default AdminEvents;