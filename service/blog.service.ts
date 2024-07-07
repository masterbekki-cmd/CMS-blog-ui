import { IBlog, IDetailedBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				title
				slug
				description
				content {
					html
				}
				image {
					url
				}
				author {
					name
					slug
					image {
						url
					}
				}
				category {
					name
					slug
				}
				tags {
					name
					slug
				}
				archive
				createdAt
			}
		}
	`
	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getDetailedBlog = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					name
					slug
					bio
					image {
						url
					}
				}
				content {
					html
				}
				image {
					url
				}
				createdAt
				slug
				title
				tags {
					name
					slug
				}
			}
		}
	`
	const { blog } = await request<{ blog: IDetailedBlog}>(graphqlAPI, query, {
		slug,
	})
	return blog
}


export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query MyQuery($title: String) {
			blogs(where: { title_contains: $title }) {
				id
				title
				image {
					url
				}
				slug
				createdAt
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
		title,
	})
	return blogs
}