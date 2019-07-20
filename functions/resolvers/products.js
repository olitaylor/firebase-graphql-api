const admin = require("firebase-admin");
admin.initializeApp();

module.exports = {
  Query: {
    products: () =>
      admin
        .database()
        .ref("products")
        .once("value")
        .then(snap => snap.val())
        .then(val => Object.keys(val).map(key => val[key]))
  }
};