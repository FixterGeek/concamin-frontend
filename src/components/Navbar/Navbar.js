import React,{Component} from 'react'
import {AppBar,Toolbar,Typography,IconButton,Menu,MenuItem,TextField, InputAdornment,List,ListItem,ListItemText} from '@material-ui/core/'
import {AccountCircle,NotificationsNone,KeyboardArrowDown, Search} from '@material-ui/icons/'


 class  Navbar extends Component {
    state={
        open:false,
        input:"",
        openSearch:null,
        hidden:true
    }

    openMenu=()=>{
        let {open}=this.state;
        open= !open;
        this.setState({open})
    }
    onChange=(e)=>{
        let {openSearch} = this.state;
        openSearch=true;
        this.setState({input:e.target.value, openSearch, hidden:false})
    }
    Coloca=(a)=>{
        this.setState({input:a.label,hidden:true})

    }

    render(){
        const listita = [
            { label: 'Afghanistan' },
            { label: 'Aland Islands' },
            { label: 'Albania' },
            { label: 'Algeria' },

        ];
        let textInput=this.state.input;
        let list = listita
            .filter(a => textInput.toLowerCase()===''|| a.label.toLowerCase().includes(textInput.toLowerCase()))
            .map((a, index)=> <ListItem key={index}>
                <ListItemText primary={a.label} onClick={()=>this.Coloca(a)}/>
            </ListItem>)
        console.log("Lista",listita)
        return(
            <div>
            <AppBar position="static" color="white" >
                <Toolbar >
                    <div style={{ flex:1}}>
                        <TextField
                            InputProps={{
                                disableUnderline: true,
                                startAdornment:(
                                    <InputAdornment position={"start"}>
                                        <Search style={{color:'#ccc'}}/>
                                    </InputAdornment>
                                )

                            }}
                            onChange={this.onChange}
                            placeholder="Escribe tu humilde opinion!"
                            fullWidth={true}
                            margin="normal"
                            name="seatchPerson"
                            style={{marginRight:"10px"}}
                            value ={this.state.input}
                        />

                    </div>



                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                        <Typography variant="title" color="inherit">
                            BrendiJS
                        </Typography>

                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                        <IconButton >
                            <AccountCircle/>
                        </IconButton>
                        <IconButton onClick={this.openMenu}>
                            <KeyboardArrowDown/>
                        </IconButton>

                    </div>


                </Toolbar>

            </AppBar>
                <List hidden={this.state.hidden || this.state.input ===''} style={{position:'absolute',zIndex:999,backgroundColor:"white",width:"80%"}} >
                    {list && list.length > 0?
                    list:
                    "No encontrado"
                    }
                </List>
            </div>
        );
    }
}

const styles={
    nav:{
        display:"flex",
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
}

export default Navbar;
