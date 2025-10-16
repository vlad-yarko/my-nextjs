'use client'

import { useRouter } from "next/navigation"


export default function NavigateHook() {
    const router = useRouter()

    function navigateToAbout() {
        router.push("/about")
    }

    return (
        <>
            <button onClick={navigateToAbout}>Navigate to about page</button>
        </>
    )
}
