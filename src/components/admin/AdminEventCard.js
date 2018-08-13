import React, {Component} from 'react';
import './Admin.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
        primary: pink,
    },
});
const photito = 'https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/38164196_1737112813050766_4449246214944194560_n.jpg?_nc_cat=0&oh=b6239b7bb45e1f6d579d27d80ef51a14&oe=5C0CFD10';

class AdminEventCard extends Component {


    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {

        return (
            <div className="card_admin">
                <div className="card_info">
                    <h3>Nombre del evento</h3>
                    <p>Autor</p>
                    <p>Fecha</p>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
                            />
                        }

                    />

                </div>
                <div className="card_image" style={{backgroundImage:`url('${photito}')`}}>

                </div>
            </div>
        );
    }
}


export default AdminEventCard;
