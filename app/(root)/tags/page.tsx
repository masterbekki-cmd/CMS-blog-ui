import CategoryCard from '@/components/cards/category'
import { getTags } from '@/service/tag.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Teglar | Dasturlash haqida blog',
}
async function Page() {
	const tags = await getTags()
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Tags</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Tags</p>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24'>
				{tags.map(tag => (
					<CategoryCard {...tag} type='tags' />
				))}
			</div>
		</div>
	)
}

export default Page
