const MongoClient = require('mongodb').MongoClient;
// const{MongoClient,ObjectID}=require('mangodb'); can also be used


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');//return is used to prevent rest of the function to execute
  }
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp')

// db.collection('Todos').find().toArray().then((docs)=>{
//   console.log(`Todos`);
//    console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch todos',err);
// });
//
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos Count: ${count}`);
//   // console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch todos',err);
// });

db.collection('users').find({name:'Rohan'}).toArray().then((docs)=>{
  console.log(`Users`);
   console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch todos',err);
  });


// client.close();
});
