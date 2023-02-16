import { createContext, useState } from "react";


const UserContext = createContext(null)

const defaultUser = {
    "tipo": "guest"
}
export const UserProvider = ({ children, user }) => {
    const [currentUser, setCurrentUser] = useState(user || defaultUser)

    const changeUser = (user) => {
        setCurrentUser(user)
    }
    return (
        <UserContext.Provider value={{ currentUser, changeUser }}>
            {children}
        </UserContext.Provider>



    );
}



export const UserConsumer = UserContext.Consumer

export default UserContext

