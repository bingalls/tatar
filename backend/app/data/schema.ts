// GraphQL schema in string form
const typeDefs = `
  type CostProvider {
    gross: Float
    net: Float
  }
  type Query {
    rate(code: Int!, lname: String!, fname: String!): CostProvider
  }
`

export default typeDefs
