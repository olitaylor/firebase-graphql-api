# Simple graphQl api using Apollo and Firebase

 [Live playground](https://us-central1-graphql-api-3d27c.cloudfunctions.net/products/graphql)

Make sure the playground url matches the browser url.

Sample query 

```
products {
  name
  location
}
product(name: "Green car park") {
  name
}
```

Sample mutation 

```
mutation {
  addProduct(name: "Purple car park") {
    name,
    pricePerDay
    isFull,
    location
    meetAndGreet
  }
}
```
