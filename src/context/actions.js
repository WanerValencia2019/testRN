import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/users";


export const fetchUsers = () => (axios.get(API_URL)
    .then(res => res.data)
    .catch(error => error)
)

