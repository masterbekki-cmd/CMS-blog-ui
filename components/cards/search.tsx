import { IBlog } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { DrawerClose } from '../ui/drawer'
import { CalendarDays } from 'lucide-react'
import { format } from 'date-fns'

function SearchCard(blog: IBlog) {
	return (
		<Link href={`/blogs/${blog.slug}`} key={blog.slug}>
			<DrawerClose className='flex flex-col space-y-2 text-start'>
				<Image
					width={200}
					height={200}
					src={blog.image.url}
					alt={blog.title}
					className='rounded-md shadow-xl dark:shadow-white/10'
				/>
			</DrawerClose>
			<div className='flex items-center gap-2 my-2'>
				<CalendarDays className='w-5 h-5' />
				<p>{format(new Date(blog.createdAt), 'MMM dd,yyyy')}</p>
			</div>
			<h1 className="font-creteRound">{blog.title}</h1>
		</Link>
	)
}

export default SearchCard
