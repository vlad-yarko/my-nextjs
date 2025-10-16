import { notFound } from "next/navigation"


async function fetchUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!res.ok) {
        return null
    }
    const user = await res.json()
    return user
}


export default async function User({ params }) {

    const { userId } = await params
    const user = await fetchUser(userId) 
	
    if (!user) {
        notFound()
    }

	return (
		<div>
            <h1>{user.id}</h1>
			<h1>{user.name}</h1>
		</div>
	)
}
