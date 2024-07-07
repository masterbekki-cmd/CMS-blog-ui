export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	slug:string
	description:string
	content:{html:string}
	image:{url:string}
	author:IAuthor
	category:ICategoryAndTags
	tags:ICategoryAndTags
	createdAt:string
}

export interface ICategoryAndTags{
	name:string
	slug:string
	blogs?:IBlog[]
}
export interface IAuthor {
	name: string
	slug:string
	image: {url:string}
	bio:string
}

export interface IDetailedBlog {
	author: IAuthor
	content: { html: string }
	image: { url: string }
	createdAt: string
	slug: string
	tag: ICategoryAndTags
	title: string
	description:string
}