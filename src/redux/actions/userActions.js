import {getLoggedUser} from '../../services/userService';



export const LOG_OUT_SUCCESS ='LOG_OUT_SUCCESS';

export function logOutSuccess(){
    return{
        type:LOG_OUT_SUCCESS
    }
}

export const logOut=()=>(dispatch)=>{
    dispatch(logOutSuccess());
    localStorage.removeItem("user");

};


export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export function getUserSuccess(user){
    return{
        type:GET_USER_SUCCESS, user
    }
}

export const getUser=()=>(dispatch, getState)=>{
    const user = JSON.parse(localStorage.getItem('user'));
            dispatch(getUserSuccess(user))

};

//if there ar user
export const checkIfUser=()=>(dispatch, getState)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if(user){
        //dispatch the functions
        dispatch(getUser())

    }
};
