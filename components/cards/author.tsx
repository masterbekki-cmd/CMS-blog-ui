import Image from 'next/image'
interface IProps {
	name: string
	image: string
}
function AuthorCard(c: IProps) {
	return (
		<div className='flex flex-col space-y-2 w-52 text-center'>
			<div className='w-full h-52 relative'>
				<Image
					src={c.image}
					alt='chris'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
				/>
			</div>
			<h2 className='text-2xl font-creteRound'>{c.name}</h2>
			<p className='text-muted-foreground'>
				<span className='font-bold text-white'>04</span> blog chop etgan
			</p>
		</div>
	)
}

export default AuthorCard
