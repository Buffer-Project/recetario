import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()
const baseURL = "recetas/"

const getAll = () => {
    return INSTANCE.get(baseURL)
}

const getById = (id) => {
    return INSTANCE.get(baseURL + id)
}

const create = (nuevaReceta) => {
    return INSTANCE.post(baseURL, nuevaReceta)
}

export {getAll, create, getById}