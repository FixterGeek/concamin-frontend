import React, {Component} from 'react';
import {login} from '../../services/userService';
import toastr from 'toastr';


class LoginPage extends Component{

    doLoggin = (e) => {
      e.preventDefault();
      const auth = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      login(auth)
      .then(user=>{
        toastr.info('Bienvenid@ ' + user.username)
        this.props.history.push('/profile')
      })
      .catch(e=>{
        toastr.error(e)
        console.log(e)
      })
    };

    render(){
        return(
<div>
  <form onSubmit={this.doLoggin} action="">
    <input placeholder="email" name="email" type="text"/>
    <input placeholder="password" name="password" type="text"/>
    <input type="submit"/>
  </form>
</div>
        );
    }
}

export default LoginPage;