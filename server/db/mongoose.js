var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MANGODB_URI || 'mongodb://Rohan007:dahiyarohan784@ds255740.mlab.com:55740/todoapp');

module.exports={mongoose};
