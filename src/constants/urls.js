let baseURL = 'https://jsonplaceholder.typicode.com'

let posts = '/posts'

let todos = '/todos'
let albums = '/albums'
let comments = '/comments'

let urls = {
    todos,
    albums,
    comments: {
        comments,
        byId: (id) => `${posts}/${id}/comments`
    }

}

export {
    baseURL,
    urls
}