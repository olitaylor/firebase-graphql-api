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
    products: [Product]
  }
`;