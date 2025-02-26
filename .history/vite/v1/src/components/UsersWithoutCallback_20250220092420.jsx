import React, { useEffect } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function UserWithoutCallback() {

    const [users, setUsers] = React.useState([])
    const [search, setSearch] = React.useState()

    useEffect(() => {
        fetch()
    })
}