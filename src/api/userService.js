import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()
const baseURL = "users/"

const login = (user) => {
    return INSTANCE.post("/login", user)
}

const register = (user) => {
    return INSTANCE.post("/create", user)
}