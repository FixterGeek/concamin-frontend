import {retrieveToken} from "./userService";

//const baseUrl = 'http://localhost:3000/advertisements/';
const baseUrl = 'https://murmuring-beach-52120.herokuapp.com/advertisements/'


export function addAdvertisement(item){
    console.log(item)
    let form = new FormData()
    for(let key in item){
        form.append(key, item[key])
    }
    return fetch(baseUrl, {
        method:'post',
        body:form,
        headers: {
            'Authorization': retrieveToken(),
        }

    }).then(res=>{
        if(!res.ok) return Promise.reject(res)
        return res.json()
    }).then(item=>{
        return item
    })
}

export function getAdvertisements(mode){

    return fetch(baseUrl + `?mode=${mode}`, {
        method:'GET',
        headers: {
            'Authorization': retrieveToken(),
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        console.log('siii')
        if(!res.ok) return Promise.reject(res)
        return res.json()
    }).then(items=>{
        return items
    })
}

export function removeAdvertisement(id){
    return fetch(baseUrl+`${id}`, {
        method:'DELETE',
        headers:{
            'Authorization': retrieveToken(),
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        if(!res.ok)return Promise.reject(res)
        return res.json()
    }).then(item=>{
        return item
    })
}

export function editAdvertisement(id, item) {

    return fetch(baseUrl+`${id}`, {
        method:'PATCH',
        headers:{
            'Authorization':retrieveToken(),
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(item)
    }).then(res=>{
        if(!res.ok) return Promise.reject(res)
        return res.json()
    }).then(item=>{
        return item
    })
}