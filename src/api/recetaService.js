import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()
const baseURL = "recetas/"

const getAllRecetas = () => {
    return INSTANCE.get(baseURL)
}

const getRecetaById = (id) => {
    return INSTANCE.get(baseURL + id)
}

const createReceta = (nuevaReceta) => {
    return INSTANCE.post(baseURL, nuevaReceta)
}

const updateReceta = (receta) => {
    return INSTANCE.patch(baseURL+receta.id, receta)
}

export {getAllRecetas, createReceta, getRecetaById, updateReceta}