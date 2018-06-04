const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');//return is used to prevent rest of the function to execute
  }
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp')

db.collection('Todos').insertOne({
  text: 'Some random text',
  completed: false
} ,(err,result)=>{
  if(err){
    return console.log('Unable to insert todo ',err);
  }
  console.log(JSON.stringify(result.ops,undefined ,2));
});

db.collection('users').insertOne({
  name: 'Rohan',
  age: 20,
  location: 'Noida'
},(err,result)=>{
  if(err){
    return console.log('Unable to insert todo ',err);
  }
  console.log(result.ops[0]._id.getTimestamp());
});

  client.close();
});
