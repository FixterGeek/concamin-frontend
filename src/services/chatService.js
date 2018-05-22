const baseUrl = 'https://concamin.herokuapp.com/chats/';
//const baseUrl = 'http://localhost:3000/chats/';

export function addMessage(message, id){
    const m = JSON.stringify(message);
    console.log("antes: ", message)
    return fetch(baseUrl + id, {
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body: m,
        credentials:'include'
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(chat=>{
        return chat;
    });
}

export function getOrCreateChat(userId){
    
    return fetch(baseUrl + `?userId=${userId}`, {
        credentials:'include'
    })
    .then(res=>{
        if(!res.ok){
            console.log(res);
            return Promise.reject(res)
        }
        return res.json();
    })
    .then(chat=>{
        return chat;
    });

}