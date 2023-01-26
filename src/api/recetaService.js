import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()
const baseURL = "recetas/"

const getAll = () => {
    return INSTANCE.get(baseURL)

}

const create = (nuevaReceta) => {
    return INSTANCE.post(baseURL)
}

export {getAll, create}