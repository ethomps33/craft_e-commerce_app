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

    // const results = await UserRepo.loadData(data);

    // Check to see if DB Server up and Running
    const admin = client.db(dbName).admin();
    // console.log(await admin.serverStatus());
    console.log(await admin.listDatabases());

}

main();