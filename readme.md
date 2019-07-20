# Simple graphQl api using Apollo and Firebase

Make sure the endpoint value matches the browser url when first launching the playground

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
  addProduct(name: "Purple car park", isFull: false) {
    name,
    isFull
  }
}
```
