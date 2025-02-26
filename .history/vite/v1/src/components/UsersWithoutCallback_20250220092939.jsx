import React, { useEffect } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users';

export default function UserWithoutCallback() {

    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState();

    useEffect(() => {
        fetch(URL)
            .then((r) => r.json)
            .then((data) => setUsers(data));
    },[])

    const filteredUsers = users.filter((users) => users.name.includes(search));

    return (
        <div>
            <input type="text" value={search} placeholder="Cerca Utente..." onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
    )
}