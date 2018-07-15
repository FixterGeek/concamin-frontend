import {retrieveToken} from './userService';
const baseUrl = 'https://concamin.herokuapp.com/groups/';
//const baseUrl = 'http://localhost:3000/groups/';
/*
invite = {
	"emails":["bliss@ironhack.com", "os@fixter.org", "pollo@lol.com", "mijo@iron.pariente"],
	"groupId": "5b4aa148d0666a0014fdc20b"
}
*/ 

export function acceptInvite(token, userId){
    return fetch(baseUrl+ `invite/accept/${token}`,{
        method:'post',
        body:JSON.stringify({userId}),
        headers:{
            "Authorization": retrieveToken(),
            "Content-Type":"application/json"
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res.json())
        return res.json();
    })
    .then(data=>{
        return data.group;
    })
}

export function sendInvites(invite){
    return fetch(baseUrl + `invite/`,{
        method:'post',
        body: JSON.stringify(invite),
        headers:{
            "Authorization": retrieveToken(),
            "Content-Type":"application/json"
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res.json())
        return res.json();
    })
    .then(items=>{
        return items;
    })
}

export function getOwnItems(skip=0){
    return fetch(baseUrl + `own/?skip=${skip}`,{
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res)
        return res.json();
    })
    .then(items=>{
        return items;
    })
    .catch(e=>console.log(e));
}

export function addItem(item){
    const form = new FormData();
    for(let key in item){
        form.append(key, item[key]);
    }
    return fetch(baseUrl, {
        method:'post',
        body:form,
        //credentials:'include',
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res.json())
        }
        return res.json();
    })
    .then(item=>{
        return item;
    })
}

export function getItems(skip=0){
    const token = retrieveToken()
    return fetch(baseUrl + `?skip=${skip}`, {
        headers:{
            "Authorization": token
        }
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(items=>{
        if(items.message){
            localStorage.removeItem('user');
        }
        //console.log(items)
        return items;
    })
    .catch(err=>{
        console.log("ERRORRRR ", err)
    });
}

export function getSingleItem(id){
    return fetch(baseUrl + id,{
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(item=>{
        return item;
    });
}

export function updateItem(item){
    const form = new FormData();
    for(let key in item){
        form.append(key, item[key]);
    }
    return fetch(baseUrl + item._id, {
        method:'PATCH',
        body:form,
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(item=>{
        return item;
    });
}

export function deleteItem(id){
    return fetch(baseUrl + id, {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json",
            "Authorization": retrieveToken()
        },
        //credentials:'include'

    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(item=>{
        return item;
    });
}



/* Formato del post
    tipo:{
        type:String,
        enum:["GROUP", "EVENT", "PERSONAL", "INSTITUTION"],
        default:"PERSONAL"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    },
    file:String,
    links:[String],
    image:String,
    tags:[{
        type:String
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }]
*/