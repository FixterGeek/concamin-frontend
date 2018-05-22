import React,{Component} from 'react'
import {AppBar,Toolbar,Typography,IconButton,Menu,MenuItem, Avatar} from '@material-ui/core/';
import {NotificationsNone,KeyboardArrowDown} from '@material-ui/icons/';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';

 class  Navbar extends Component {
    state={
        open:false,
        anchorEl: null,
    }

    openMenu=()=>{
        let {open}=this.state;
        open= !open;
        this.setState({open})
    }
     handleMenu = event => {
         this.setState({ anchorEl: event.currentTarget });
     };

     handleClose = () => {
         this.setState({ anchorEl: null });
     };


    render(){

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div style={{marginLeft:'240px'}}>
                <AppBar position="static" color="default"  >
                    <Toolbar >
                        <div style={{ flex:1}}>
                            <SearchInput/>

                        </div>
                        
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                            <IconButton>
                                <NotificationsNone/>
                            </IconButton>

                            <Avatar alt={"imagen"} src={"https://cdn3.iconfinder.com/data/icons/essentials-vol-1-1/512/User-2-512.png"} style={{margin:10, width:30, height:30}}/>

                            <IconButton onClick={this.handleMenu}>
                                <KeyboardArrowDown/>
                            </IconButton>
                            <Menu
                                open={open}
                                onClose={this.handleClose}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical:'top',
                                    horizontal:'right'
                                }}
                                transformOrigin={{
                                    vertical:'top',
                                    horizontal:'right'
                                }}
                            >
                                <Link style={{color:'black',textDecoration:'none'}} to={"/profile"}>
                                <MenuItem >
                                   Perfil
                                </MenuItem>
                                </Link>
                                <MenuItem >
                                    <Link style={{color:'black',textDecoration:'none'}} to={"#"}>Cerrar sesion </Link>
                                </MenuItem>
                            </Menu>

                        </div>


                    </Toolbar>

                </AppBar>
            </div>


        );
    }
}


export default Navbar;
