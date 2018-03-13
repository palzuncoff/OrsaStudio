import graphQLSource from './GraphQLSource'

class DataTable {
  error = null
  Posts = () => {
    return graphQLSource.allPosts()
      .then(data => data.allPosts)
      .catch(error => this.error = error)
  }

  Users = () => {}

  Comments = () => {}
}

export default new DataTable()
