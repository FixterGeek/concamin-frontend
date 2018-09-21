import React from 'react'
import './Publi.css'
import { Button, Switch } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'


export const PubliCard = ({ announces, deleteItem, editItem }) => (

    <div className="card-container">
        {announces.map((item, key) => (
            <div className="card" key={key}>
                <div className="card-img">
                    <img className="img" src={item.image} alt="" />
                </div>
                <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
                <div className="button-container">
                    <Switch color="primary"  onChange={(e, bool)=>editItem(e, bool, item)} defaultChecked={item.toPublish}/>
                    <Button ariant="fab" color="primary" aria-label="Editar">
                        <Edit />
                    </Button>
                    <Button ariant="fab" color="primary" aria-label="Editar" onClick={()=>deleteItem(item._id)}>
                        <Delete />
                    </Button>
                </div>
            </div>
            )
            )
        }
    </div>
);


