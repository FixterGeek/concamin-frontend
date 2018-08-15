import React, {Component} from 'react'
import {MainLoader} from '../loader/MainLoader'
import {acceptInvite} from '../../services/groupsService'


class AcceptGroupInvite extends Component{

    componentWillMount(){
        let token = this.props.match.params.token
        const user = JSON.parse(localStorage.getItem('user'))
        acceptInvite(token,user._id )
            .then(group=>{
                this.props.history.push(`/main/groups/${group._id}`)
            }).catch(e=>{
                console.log(e)
            })
    }
    render(){
        return(
            <MainLoader/>
        )
    }  
}
export default AcceptGroupInvite