import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getReadingTime } from '@/lib/utils'
import { getDetailedBlog } from '@/service/blog.service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import {
	ArrowUpRight,
	CalendarDays,
	Clock,
	Facebook,
	Link2,
	Linkedin,
	Minus,
	Send,
	Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }){
	const blog = await getDetailedBlog(params.slug)
	return{
		title:blog.title,
		description:blog.description,
		openGraph:{
			image:blog.image.url
		}
	}
}


async function SlugPage({ params }: { params: { slug: string } }) {
	const blog = await getDetailedBlog(params.slug)

	return (
		<div className='pt-[15vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-5xl md:text-4xl text-3xl font-creteRound'>
				{blog.title}
			</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-5'>
				<div className='flex items-center gap-2'>
					<Image
						src={blog.author.image.url}
						alt='author'
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by {blog.author.name}</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{getReadingTime(blog.content.html)} min o'qish</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{format(new Date(blog.createdAt), 'MMM d, yyyy')}</p>
				</div>
			</div>

			<Image
				src={blog.image.url}
				alt='alt'
				width={`1120`}
				height={`595`}
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
							<Button size={'icon'} variant={'outline'}>
								<Twitter />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Facebook />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Linkedin />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Send />
							</Button>
							<Button size={'icon'} variant={'outline'}>
								<Link2 />
							</Button>
						</div>
					</div>
				</div>
				<div className='flex-1 prose dark:prose-invert'>
					{parse(blog.content.html)}
				</div>
			</div>
			<Separator className='mt-12 mb-4' />
			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.image.url}
					alt='author'
					width='110'
					height='110'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{blog.author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>
						{blog.author.bio}
					</p>
					<Link
						href={`/authors/${blog.author.slug}`}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>Avtorga tegishli barcha bloglarni ko'ring</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SlugPage
