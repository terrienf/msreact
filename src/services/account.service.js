import Axios from './caller.service';

//Connexion vers l'API
let login = (credentials) => {
    return Axios.post('/login_check', credentials)
}
//Sauvegarde du token dans le localstorage
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

//Suppression du token du localstorage
let logout = () => {
    localStorage.removeItem('token')
}

//Etat de la présence d'un token dans localstorage
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
    /* Si rien dans le token, token = null donc la methode va returner un booleen false*/
    /* Si rien dans le token, token = peu importe le type donc la methode va returner un booleen true*/
}

//Récupération brut du token en localStorage
let getToken = () => {
    return localStorage.getItem('token')
}

//Déclaration des services pour import
export const accountService = {
    login, saveToken, logout, isLogged, getToken
}