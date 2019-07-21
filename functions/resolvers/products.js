const admin = require("firebase-admin");
const { ValidationError } = require('apollo-server');

admin.initializeApp();

module.exports = {
  Query: {
    /** 
     * Get all products from firebase db
     */
    products: () => 
      admin
        .database()
        .ref('products')
        .once('value')
        .then(snap => snap.val())
        .then(val => {
          return Object.keys(val).map((key, index) => { 
            return { id: Object.keys(val)[index], ...val[key] }  || new ValidationError('No products found')
          })
        }),

    /**
    * Get product by name from firebase db
    */
    product: (_, args, context) => 
      admin
        .database()
        .ref('products')
        .orderByChild('name')
        .equalTo(args.name)
        .once('value')
        .then(val => {
          let key = val.val() ? Object.keys(val.val())[0] : null
          return val.val() ? { id: key, ...val.val()[key] } : null
        })
        .then(val => val || new ValidationError('Product not found')),

  },
  Mutation: {
    /** 
    * Push new product to the firebase db, validation is performed on the typeDef
    */
    addProduct: (_, args) => {
      admin
        .database()
        .ref('products')
        .push(args);
    },
  },
};