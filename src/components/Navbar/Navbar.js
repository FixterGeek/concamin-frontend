import React,{Component} from 'react'
import {AppBar,Toolbar,IconButton,Menu,MenuItem, Avatar, Button,Typography} from '@material-ui/core/';
import {NotificationsNone,KeyboardArrowDown} from '@material-ui/icons/';
import {NavLink,Link} from 'react-router-dom';
import SearchInput from './SearchInput';
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import toastr from 'toastr';

 class  Navbar extends Component {
    state={
        open:false,
        anchorEl: null,
        isLogged:false,
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

        logOut=()=>{
            toastr.info('Bye Bye ')
            localStorage.removeItem("user");
            this.props.userActions.logOut();
            this.handleClose()
            window.location.reload();
        }

     componentWillMount() {
         let user = localStorage.getItem("user");

         if (user) {
             this.setState({isLogged:true, user})
         }else{
             this.setState({isLogged:false})
         }
     }



     render(){

        const { anchorEl,isLogged} = this.state;
        const {user}=this.props;
        const open = Boolean(anchorEl);

        console.log("usuario", user)

        return(
            <div>
                <AppBar position="fixed" color="default" style={{paddingLeft:"330px",width:"100%"}}  >

                    { isLogged  ?
                        <Toolbar >

                            <div style={{ flex:1}}>
                                <SearchInput/>

                            </div>

                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:10}}>
                                <IconButton>
                                    <NotificationsNone/>
                                </IconButton>

                                <Avatar  src={user.profilePic} style={{margin:10,backgroundColor:'red'}}/>

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

                                        <MenuItem >
                                            <NavLink style={{color:'black',textDecoration:'none'}} to={"/profile"} onClick={this.handleClose} >Perfil</NavLink>
                                        </MenuItem>

                                    <MenuItem onClick={this.logOut} >
                                        Cerrar sesion
                                    </MenuItem>
                                </Menu>

                            </div>

                        </Toolbar>

                        :
                        <Toolbar style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                            <Link to={'/login'}>
                                <Button style={{color:'black',textDecoration:'none'}} color="inherit">Iniciar sesión</Button>
                            </Link>
                        </Toolbar>


                    }

                </AppBar>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    let user =state.user.object;
    return {
        user,
    }

}

function mapDispatchToProps(dispatch){
    return{

        userActions:bindActionCreators(userActions,dispatch),
    }
}

Navbar = connect (mapStateToProps,mapDispatchToProps)(Navbar);
export default Navbar;
