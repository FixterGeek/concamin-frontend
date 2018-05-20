import React, {Component} from 'react';
import {ProfileDisplay} from './ProfileDisplay';
import {getPublicUser} from '../../services/userService';
import toastr from 'toastr';

class PublicProfile extends Component{

    state = {
        user:{}
    }

    componentWillMount(){
        console.log(this.props.match.params.id);
        getPublicUser(this.props.match.params.id)
        .then(user=>{
            this.setState({user});
        })
        .catch(e=>{
            console.log(e)
            toastr.error(e);
            this.props.history.push('/login');
        });
    }

    render(){
        const {user} = this.state;
        return(
            <div>
                <ProfileDisplay isPublic={true} {...user} />
            </div>
        );
    }
}

export default PublicProfile;