import React from 'react'
import './Publi.css'
import { Button, Switch } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

export const PubliCard = ({ announces, onChange }) => (

    <div className="card-container">
        {announces.map((item, key) => (
            <div className="card" key={key}>
                <div className="card-img">
                    <img className="img" src={item.img} alt="" />
                </div>
                <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
                <div className="button-container">
                    <Switch color="primary" onChange/>
                    <Button ariant="fab" color="primary" aria-label="Editar">
                        <Edit />
                    </Button>
                    <Button ariant="fab" color="primary" aria-label="Editar">
                        <Delete />
                    </Button>
                </div>
            </div>
            )
            )
        }
    </div>
);


