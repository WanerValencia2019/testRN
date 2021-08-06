import React, { useState } from 'react';
import { userContext } from "./context";

import { fetchUsers, detailUser } from "./actions";


export default function Provider({ children }) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const getUsers = () => {
        fetchUsers()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                setError(true);
            })
    }

    return (
        <userContext.Provider value={{ users, getUsers, error: false, message: "" }}>
            {children}
        </userContext.Provider>
    )
}
