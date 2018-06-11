var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rohan:rohan123@ds255740.mlab.com:55740/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
