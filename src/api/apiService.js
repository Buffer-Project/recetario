import axios from "axios";

const baseURL = 'https://recetario-backend.herokuapp.com/api/'
export default function getApiInstance(){
    return axios.create({
        baseURL:baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    })
}