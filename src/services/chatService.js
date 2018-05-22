const baseUrl = 'https://concamin.herokuapp.com/chats/';

export function addMessage(message, id){

    return fetch(baseUrl + id, {
        method:'post',
        body:JSON.stringify(message),
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