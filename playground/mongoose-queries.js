const {ObjectID}= require('mongodb');

var {mongoose} = require('./../server/db/mongoose.js');
var {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// var id = '500b1a49f382d9c430e1260c66'
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// // Todo.find({
// //   _id:id
// // }).then((todos)=>{
// //   console.log('Todos',todos);
// // });
// //
// // Todo.findOne({
// //   _id:id
// // }).then((todo)=>{
// //   console.log('Todo',todo);
// // });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//      // return console.log('Id not found')
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=>console.log(e));


var id1='5b1d14ace54194ee0f8478d9';
User.findById(id1).then((user)=>{
  if(!user)
  {
    console.log('user not found');
  }
  console.log('User with email',user);
}).catch((e)=>console.log(e));
