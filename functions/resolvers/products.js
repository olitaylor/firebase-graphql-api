const admin = require("firebase-admin");
const { ApolloError, ValidationError } = require('apollo-server');

admin.initializeApp();

module.exports = {
  Query: {
    /** 
     * Get all products from firebase db
     */
    products: async () => 
      await admin
        .database()
        .ref('products')
        .once('value')
        .then(snap => snap.val())
        .then(val => Object.keys(val).map(key => val[key])  || new ValidationError('No products found')),

    /**
    * Get product by name from firebase db
    */
    product: async (root, args, context) => 
      await admin
        .database()
        .ref('products')
        .orderByChild('name')
        .equalTo(args.name)
        .once('value')
        .then(val => {
          let key = val.val() ? Object.keys(val.val())[0] : null
          return val.val() ? val.val()[key] : null
        })
        .then(val => val || new ValidationError('Product not found')),
  }
};