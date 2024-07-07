import { ICategoryAndTags } from '@/types'
import request, { gql } from 'graphql-request'

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
