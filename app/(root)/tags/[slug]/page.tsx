import BlogCard from '@/components/cards/blog'
import { getTagBlogs } from '@/service/tag.service'
export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const category = await getTagBlogs(params.slug)

	return {
		title: category.name + ' | Dasturlashga oid blog',
		openGraph: {
			image:
				'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsammi.ac%2F&psig=AOvVaw14TY_sXprr2SLa-xPNiHEq&ust=1720464331293000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD_i6DLlYcDFQAAAAAdAAAAABAE',
		},
	}
}
async function page({ params }: { params: { slug: string } }) {
	const tags = await getTagBlogs(params.slug)
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>{tags.name}</span>
				</h2>
			</div>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
				{tags.blogs?.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default page
