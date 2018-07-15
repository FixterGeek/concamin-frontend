import React, {Component} from 'react';
import {login, signup, getLoggedUser} from '../../services/userService';
import toastr from 'toastr';
import {LoginDisplay} from './LoginDisplay';
import {SignupDisplay} from './SignupDisplay';



class LoginPage extends Component{

  state = {
    signup:false,
    error:null,
    isLogged:false,
  }

  /*componentWillMount(){
    getLoggedUser()
    .then(r=>{
      this.props.history.push('/main/profile')
    })
    .catch(e=>{
      
    })
  }*/
    componentWillMount() {
                  
        let user = localStorage.getItem("user");
        if (user) {
            //this.setState({isLogged:true, user})
            this.props.history.push('/main/profile')
        }else{
            this.setState({isLogged:false})
            if(this.props.location.search!=""){
              this.setState({signup:true})
            }
        }
    }

    doLoggin = (e) => {
      e.preventDefault();
      //console.log(e.target.email);
      const auth = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      login(auth)
      .then(user=>{
        console.log(user)
        toastr.info('Bienvenid@ ' + user.username)
        this.props.history.push('/main/profile')
      })
      .catch(e=>{
        toastr.error("Hay un problema con tu usuario o contraseña " + e.statusText)
        console.log(e)
      })
    };

    registerUser = (e) => {
      e.preventDefault();
      if(e.target.password.value !== e.target.password2.value){
        return this.setState({error:"Tu password no coincide"})
      }else this.setState({error:null})
      const newUser = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      signup(newUser)
      .then(user=>{
        console.log(user);
        if(this.props.location.search!=""){
          const token = this.props.location.search.split('=')[1].split('/')[4]
          this.props.history.push(`/main/groups/accept/${token}`)  
        }        
        this.props.history.push('/main/profile')
      })
      .catch(e=>{
        console.log(e);
        toastr.error(e)
      })
    };

    changeToSignup = () =>{
      this.setState({signup:!this.state.signup})
    };

    render(){
      const {error} = this.state;
      if(this.state.signup) return <SignupDisplay error={error} changeToSignup={this.changeToSignup} onSubmit={this.registerUser} />
        return(
<div>
  {/* <form onSubmit={this.doLoggin} action="">
    <input placeholder="email" name="email" type="text"/>
    <input placeholder="password" name="password" type="text"/>
    <input type="submit"/>
  </form> */}

  <LoginDisplay changeToSignup={this.changeToSignup} onSubmit={this.doLoggin} />
</div>
        );
    }
}

export default LoginPage;