//const baseUrl = 'http://localhost:3000/auth/';
const baseUrl = 'https://concamin.herokuapp.com/auth/';

export function getPublicUser(id){
    return fetch(baseUrl + 'users/' + id, {
        credentials:'include'
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        return user;
    });
}

export function updateUser(user){
    const form = new FormData();
    for(let key in user){
        form.append(key, user[key]);
    }
    return fetch(baseUrl + 'profile', {
        method:'post',
        body:form,
        credentials:'include'

    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        return user;
    });
}

export function getLoggedUser(){
    return fetch(baseUrl + 'logged',{credentials:'include'})
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        console.log(user);
        return user;
    });
}

export function login(auth){
    return fetch(baseUrl + 'login',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(auth),
        credentials:'include'
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
        return user;
    });
}

export function signup(user){
    return fetch(baseUrl + 'signup',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
        credentials:'include'
    })
    .then(res=>{
        console.log(res)
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        console.log(user);
        return user;
    });
}




