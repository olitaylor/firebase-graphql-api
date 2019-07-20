const { gql } = require("apollo-server-express");

module.exports =  gql`
  type Product {
    isFull: Boolean
    location: String
    name: String
    meetAndGreet: Boolean
    pricePerDay: Float
  }
  type Query {
    products: [Product],
    product(name: String!): Product
  }

  type Mutation {
      # A mutation to add a new product to the list of products
      addProduct(
        name: String!
        isFull: Boolean!
        location: String!
        name: String!
        meetAndGreet: Boolean!
        pricePerDay: Float!
      ): Product
  }
`;