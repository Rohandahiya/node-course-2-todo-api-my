var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:ashish123@ds255740.mlab.com:55740/todoapp' || 'mongodb://localhost:27017/TodoAp');

module.exports={mongoose};
