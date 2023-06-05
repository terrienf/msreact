import Axios from './caller.service';

let login = (credentials) => {
    return Axios.post('/login_check', credentials)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
    /* Si rien dans le token, token = null donc la methode va returner un booleen false*/
    /* Si rien dans le token, token = peu importe le type donc la methode va returner un booleen true*/

}

export const accountService = {
    login, saveToken, logout, isLogged
}