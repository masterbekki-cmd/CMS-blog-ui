import BlogCard from '@/components/cards/blog'
import { getCategoryBlogs } from '@/service/category.service'

async function page({params}:{params:{slug:string}}) {
	const category = await getCategoryBlogs(params.slug)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>{category.name}</span>
				</h2>
			</div>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
				{category.blogs?.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default page
