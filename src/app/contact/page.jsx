import Image from 'next/image'


export default function Contact() {

    return (
			<>
				<h1>Contact page</h1>
				<Image
					src='https://upload.wikimedia.org/wikipedia/common/b/b6/Image_created_with_a_mobile_phone.png'
					alt='Yep'
                    width={180}
                    height={38}
				/>
			</>
		)
}
