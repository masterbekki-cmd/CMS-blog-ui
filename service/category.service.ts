import { IBlog, ICategoryAndTags } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCategory = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
				blogs {
					... on Blog {
						slug
						title
					}
				}
			}
		}
	`

	const { categories } = await request<{ categories: ICategoryAndTags[] }>(
		graphqlAPI,
		query
	)
	return categories
}

export const getCategoryBlogs = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				name
				blogs {
					title
					slug
					description
					image {
						url
					}
					author {
						name
						image {
							url
						}
					}
					category {
						name
						slug
					}
					createdAt
				}
			}
		}
	`

	const { category } = await request<{ category: ICategoryAndTags }>(
		graphqlAPI,
		query,
		{ slug }
	)
	return category
})
