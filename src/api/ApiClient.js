import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getClients() {
    const {data} = await axios.get(`${API_URL}`)
    console.log(data)
    return data;
}
