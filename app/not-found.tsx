import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
	return (
		<div className='h-[100vh] relative'>
			<Image
				src={'/notfound/not-found.gif'}
				fill
				alt='not-found'
			/>
			<Link href={"/"} className='p-3 bg-blue-500 hover:bg-blue-500/80 absolute top-3 right-3 z-10 rounded-md transition-colors'>Go Home</Link>
		</div>
	)
}

export default NotFound
