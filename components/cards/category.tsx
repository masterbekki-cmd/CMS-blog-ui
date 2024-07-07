import { ICategoryAndTags } from '@/types'
import { Layers2, Layers3, Tags } from 'lucide-react'
import Link from 'next/link'

interface IProps extends ICategoryAndTags
{
	type:"tags" | "categories"
}

function CategoryCard(item: IProps) {
	return (
		<>
			<Link
				href={`/${item.type}/${item.slug}`}
				className='bg-secondary p-4 md:p-6 rounded-md shadow-xl flex flex-col items-center gap-3 hover:bg-secondary/80 transition-colors dark:shadow-white/10'
				role='button'
			>
				{item.type == "tags"? <Tags/> : <Layers3/>}
				<h1 className='text-xl'>{item.name}</h1>
				<p>{item.blogs?.length} blogs</p>
			</Link>
		</>
	)
}

export default CategoryCard
