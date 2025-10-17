'use client'

import { redirect } from 'next/navigation'


export default function MyRedirect() {
    function redirectTo() {
        redirect('/')
    }

    return (
        <>
            <button onClick={redirectTo}>Redirect</button>
        </>
    )
}
