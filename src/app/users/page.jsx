export default async function Users() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return (
        <div>
            <h1>User list</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
