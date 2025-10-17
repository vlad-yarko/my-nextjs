'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"


export default function SwitchDashboard() {
    const pathname = usePathname()

    if (pathname === "/dashboard") {
        return (
            <>
                <Link href="/dashboard/archived">Archived dashboard data</Link>
            </>
        )
    }
    return (
			<>
				<Link href='/dashboard'>Normal dashboard data</Link>
			</>
		)
}
