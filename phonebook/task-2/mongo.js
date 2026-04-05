const mongoose = require('mongoose');
const dns = require('node:dns'); 
dns.setServers(['8.8.8.8', '8.8.4.4']);

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://hussensenple_db_user:${password}@hussienmohamed.4rvxnvl.mongodb.net/phonebookApp?appName=HussienMohamed`;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);


if (process.argv.length === 3) {
  console.log('phonebook:');
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close(); 
  });

} else if (process.argv.length === 5) {
  const inputName = process.argv[3];
  const inputNumber = process.argv[4];

  const person = new Person({
    name: inputName,
    number: inputNumber,
  });

  person.save().then(result => {
    console.log(`added ${inputName} number ${inputNumber} to phonebook`);
    mongoose.connection.close(); 
  });

} else {
  console.log('Invalid arguments. Use: node mongo.js <password> ["name"] [number]');
  mongoose.connection.close();
}