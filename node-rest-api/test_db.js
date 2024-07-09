// Importing MongoDB, userRepo.js and Users.json
const MongoClient = require('mongodb').MongoClient;
const UserRepo = require('./Repos/userRepo')
const data = require('./Users.json')

// Defining the DB url and name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Users';

// Main Function
async function main(){
    const client = new MongoClient(url);
    await client.connect(); // Added await to hold processing until client.connect() comes back.

    // Loads Data from Users.json using loadData() from userRepo.js
    const results = await UserRepo.loadData(data);
    console.log(results.insertedCount, results.ops);
    const admin = client.db(dbName).admin();

    // Check to see if DB Server up and Running
    // console.log(await admin.serverStatus());

    // Returns a list of the DBs for this MongoDB Connection
    console.log(await admin.listDatabases());

}

main();