const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://rizwan-user:rizwan-user@ths-alumni-portal-g3lyi.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true }).then(
  () => { console.log("mongo connected") },
  err => { console.log(err) }
);

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');
module.exports.User = require('./User');
module.exports.Token = require('./Token');
module.exports.UserProfile = require('./userProfile');

