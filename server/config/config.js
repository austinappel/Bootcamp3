//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://austin:austin11@cen3031-omb6t.mongodb.net/class?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'f1265ec1e5d34e76bf6eaaded3d7f95e' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};