import { gql, useQuery } from '@apollo/client'
import { Todo } from '../../models/todo'

const GET_TODOS = gql`
      query getTodos {
				todos {
					title
					content
					id
					created_at
					creator_id
				}
			}`


export const useGetTodos = () : Todo[] => {
	const { data } = useQuery(GET_TODOS)
	return data?.todos
}
