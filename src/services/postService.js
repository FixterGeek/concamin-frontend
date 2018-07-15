import {retrieveToken} from './userService';
const baseUrl = 'https://concamin.herokuapp.com/posts/';
//const baseUrl = 'http://localhost:3000/posts/';

export function getOwnPosts(skip=0){
    return fetch(baseUrl + `own/?skip=${skip}`,{
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res)
        return res.json();
    })
    .then(posts=>{
        return posts;
    })
    .catch(e=>console.log(e));
}

export function addPost(post){
    const form = new FormData();
    for(let key in post){
        form.append(key, post[key]);
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
    .then(post=>{
        return post;
    })
}

export function getPosts(skip=0, tipo="PERSONAL", group, event){
    const token = retrieveToken()
    return fetch(baseUrl + `?skip=${skip}&tipo=${tipo}&group=${group}&event=${event}`, {
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
    .then(posts=>{
        // if(posts.message){
        //     localStorage.removeItem('user');
        // }
        console.log(posts)
        return posts;
    })
}

export function getSinglePost(id){
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
    .then(post=>{
        return post;
    });
}

export function updatePost(post){
    const form = new FormData();
    for(let key in post){
        form.append(key, post[key]);
    }
    return fetch(baseUrl + post._id, {
        method:'patch',
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
    .then(post=>{
        return post;
    });
}

export function deletePost(id){
    return fetch(baseUrl + id, {
        method:'delete',
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
    .then(posts=>{
        return posts;
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