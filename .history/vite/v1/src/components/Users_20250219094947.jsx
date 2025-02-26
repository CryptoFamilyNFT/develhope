/* eslint-disable no-unused-vars */
import { useFetch } from "./hooks"

export const Users = () => {
    const {data: users, loading, error} = useFetch("https://api.example.com/users");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {users.users.map((user, index) => (
                <div key={index}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}