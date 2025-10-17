'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function TemplatesPage() {
	const [inputValue, setInputValue] = useState("")

	const changeValue = e => {
		setInputValue(e.target.value)
	}

	return (
		<div>
			<input value={inputValue} onChange={changeValue} />
			<Link href={`/`}>Home</Link>
		</div>
	)
}
