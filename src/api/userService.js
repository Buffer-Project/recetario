import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()
// eslint-disable-next-line
const baseURL = "users/"

const login = (user) => {
    return INSTANCE.post(baseURL+"login", user)
}

const register = (user) => {
    return INSTANCE.post(baseURL+"create", user)
}

export {login, register}