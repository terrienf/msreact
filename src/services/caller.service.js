import axios from "axios";
import {accountService} from "./account.service";

//Paramètre de base d'axios
const Axios = axios.create({
    baseURL: 'http://localhost:8000/api'

})

//Intercepteur pour le token
Axios.interceptors.request.use(request => {
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }
    return request
})
export default Axios