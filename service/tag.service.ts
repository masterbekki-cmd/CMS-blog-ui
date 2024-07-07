import { ICategoryAndTags } from '@/types'
import request, { gql } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tag {
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

	const { tag } = await request<{ tag: ICategoryAndTags[] }>(graphqlAPI, query)
	return tag
}
export const getTagBlogs = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tags(where: { slug: $slug }) {
				name
				blogs {
					... on Blog {
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
		}
	`

	const { tags } = await request<{ tags: ICategoryAndTags }>(
		graphqlAPI,
		query,
		{ slug }
	)
	return tags
})
