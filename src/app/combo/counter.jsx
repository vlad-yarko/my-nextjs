'use client'

import { useState } from 'react'


export default function Counter() {
    const [ count, setCount ] = useState(0)

    function increaseCount() {
        setCount(prev => prev + 1)
    }

	return (
		<>
			<button onClick={increaseCount}>Click</button>
            <h1>{count}</h1>
		</>
	)
}
