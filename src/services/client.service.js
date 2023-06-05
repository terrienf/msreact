import Axios from './caller.service'

let getAllClients = () => {
return Axios.get('/clients')
}

let getClient = (cid) => {
    return Axios.get ('/clients/'+cid)
}

export const clientService = {
    getAllClients, getClient
}