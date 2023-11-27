let baseURL = 'https://jsonplaceholder.typicode.com/'


let users = '/users';
let posts = '/posts';


let urls = {
    users,
    posts :{
        byId:(id)=> `${posts}/${id}`
    }
}


export {
    urls,
    baseURL
}