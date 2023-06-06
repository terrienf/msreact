import Axios from './caller.service'

//Récupération de la liste des Users
let getAllUsers = () => {
    return Axios.get('/users')
}

//Récupération d'un User via son ID
let getUser = (uid) => {
    return Axios.get ('/users/'+uid)
}

let updateUser =(user) => {
    return Axios.put('/users/'+user.id, user)
}

let addUser = (user) => {
    return Axios.post('/users', user)
}

let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}
export const userService = {
    getAllUsers, getUser, updateUser, deleteUser, addUser
}