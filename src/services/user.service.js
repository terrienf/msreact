import Axios from './caller.service'

//Récupération de la liste des Users
let getAllUsers = () => {
    return Axios.get('/users')
}

//Récupération d'un User via son ID
let getUser = (uid) => {
    return Axios.get ('/users/'+uid)
}

export const userService = {
    getAllUsers, getUser
}