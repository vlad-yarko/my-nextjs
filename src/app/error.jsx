'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react"


export default function ErrorBoundary({
	error,
	reset
}) {
	const router = useRouter()
	const reload = () => {
		startTransition(() => {
			router.refresh()
			reset()
		})
	}

	return (
		<div>
			<button onClick={() => reload()}>Try again</button>
		</div>
	)
}












// 'use client'


// export default function ErrorPage() {
// 	return (
// 		<>
// 			<h1>Error...</h1>
// 		</>
// 	)
// }



