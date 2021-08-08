import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

export default client

// client
//   .query({
//     query: gql`
//       query getTodos {
// 				todos {
// 					title
// 					content
// 					id
// 					created_at
// 					creator_id
// 				}
// 			}`
//   })
//   .then((result) => console.log(result))
