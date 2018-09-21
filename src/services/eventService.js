import {retrieveToken} from './userService';
const baseUrl = 'https://murmuring-beach-52120.herokuapp.com/events/';
//const baseUrl = 'http://localhost:3000/groups/';


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

//add Event
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
            return res.text().then(text=>{ 
                const ob = JSON.parse(text)
                throw ob.message
            })
            
        }
        return res.json();
    })
    .then(item=>item)
}

//traer eventos (todos)
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
            return res.text().then(text=>{ 
                const ob = JSON.parse(text)
                throw ob.message
            })
            
        }
        return res.json();
    })
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
            return res.text().then(text=>{ 
                const ob = JSON.parse(text)
                throw ob.message
            })
            
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


//borrar evento
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
            return res.text().then(text=>{ 
                const ob = JSON.parse(text)
                throw ob.message
            })
            
        }
        return res.json();
    })
    .then(item=>item);
}

//asistir al evento
export const doAssist = (eventId) => {
    return fetch(baseUrl + eventId + '/assist', {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization": retrieveToken()
        },
        //credentials:'include'

    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return res.text().then(text=>{ 
                const ob = JSON.parse(text)
                throw ob.message
            })
            
        }
        return res.json();
    })
    .then(item=>item);
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