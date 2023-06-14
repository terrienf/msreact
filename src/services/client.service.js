import Axios from './caller.service'

let getAllClients = () => {
return Axios.get('/clients')
}

let getClient = (cid) => {
    return Axios.get ('/clients/'+cid)
}

let addClient = (client) => {
    return Axios.post('/clients', client)
}

let updateClient = (clientId, client) => {
    return Axios.put('/clients/' + clientId, client);
}

let deleteClient = (cid) => {
    return Axios.delete('/clients/'+cid)
}

export const clientService = {
    getAllClients, getClient, addClient, updateClient, deleteClient
}