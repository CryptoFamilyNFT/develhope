/* eslint-disable no-unused-vars */
import { useFetch } from "./hooks"

export const Users = () => {
    const {data: users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {users.map((user, index) => (
                <div key={index} style={{backgroundColor: index % 2 === 0 ? 'red' : 'green'}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}