const MongoClient = require('mongodb').MongoClient;
// const{MongoClient,ObjectID}=require('mangodb'); can also be used


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');//return is used to prevent rest of the function to execute
  }
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp')

// deleteMany
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log('Not able to delete');
// });
// deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//    console.log(result);
//  },(err)=>{
//    console.log('Not able to delete');
//  });

// findOneandDelete(returns and deletes one)
db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
   console.log(result);
 },(err)=>{
   console.log('Not able to delete');
 });
// client.close();
});
