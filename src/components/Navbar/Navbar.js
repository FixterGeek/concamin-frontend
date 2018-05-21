import React,{Component} from 'react'
import {AppBar,Toolbar,Typography,IconButton,Menu,MenuItem} from '@material-ui/core/';
import {AccountCircle,NotificationsNone,KeyboardArrowDown} from '@material-ui/icons/';
import {Link} from 'react-router-dom';
import SearchInput from './SearchInput';

 class  Navbar extends Component {
    state={
        open:false,

    }

    openMenu=()=>{
        let {open}=this.state;
        open= !open;
        this.setState({open})
    }


    render(){


        return(
            <div style={{marginLeft:'240px'}}>
                <AppBar position="static" color="default"  >
                    <Toolbar >
                        <div style={{ flex:1}}>
                            <SearchInput/>

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
                            <Menu
                                open={this.state.open}

                                anchorOrigin={{
                                    vertical:'top',
                                    horizontal:'right'
                                }}
                                transformOrigin={{
                                    vertical:'top',
                                    horizontal:'right'
                                }}
                            >
                                <MenuItem onClick={this.openMenu}>
                                    <Link style={{color:'black',textDecoration:'none'}} to={"/profile"}>Perfil </Link>
                                </MenuItem>
                                <MenuItem onClick={this.openMenu}>
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
