import { createContext } from "react";


export const userContext = createContext({
    users: [],
    getUsers: () => { },
    error: false,
    message: ""
})