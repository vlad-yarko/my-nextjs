import Link from 'next/link'


export default function DashabordLayout({
    children,
    users,
    notifications
}) {

    return (
			<div>
				<div>{children}</div>
				<div>{users}</div>
				<div>{notifications}</div>
			</div>
		)
}
