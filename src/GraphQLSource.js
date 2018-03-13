import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { request } from 'graphql-request'

class GraphQLSource {
  allPosts = () => {
    const query = {
        query: {
          allPosts: {
            id: true,
            title: true,
            views: true,
          }
        }
    };

    const graphqlRequest =  jsonToGraphQLQuery(query, { pretty: true })
    return request('http://localhost:3000/', graphqlRequest)
  }

  allUsers = () => {}

}

export default new GraphQLSource()
