import Axios from './caller.service'

let getAllInfos = () => {
    return Axios.get('/infos')
}

let getInfo = (iid) => {
    return Axios.get ('/infos/'+iid)
}

let addInfo = (info) => {
    return Axios.post('/infos', info)
}

let updateInfo = (infoId, info) => {
    return Axios.put('/infos/' + infoId, info);
}

let deleteInfo = (iid) => {
    return Axios.delete('/infos/'+iid)
}

export const infoService = {
    getAllInfos, getInfo, addInfo, updateInfo, deleteInfo
}