const baseUrl = 'http://localhost:3000/auth/';

export function updateUser(user){
    const form = new FormData();
    for(let key in user){
        form.append(key, user[key]);
    }
    return fetch(baseUrl + 'profile/' + user._id, {
        method:'post',
        body:form
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
    return fetch(baseUrl + 'logged')
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        return user;
    });
}