// Importing MongoDB, userRepo.js and Users.json
const MongoClient = require('mongodb').MongoClient;
const userRepo = require('./Repos/userRepo');
const UserRepo = require('./Repos/userRepo')
const data = require('./Users.json')
const assert = require('assert');


// Defining the DB url and name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Users';

// Main Function
async function main(){
    const client = new MongoClient(url);
    await client.connect(); // Added await to hold processing until client.connect() comes back.
    
    try {
        const results = await UserRepo.loadData(data);

        // Makes sure that the Length Equals what was Inserted
        assert.equal(data.length, results.insertedCount);

        // Gets Loaded Data
        const getData = await userRepo.get();
        assert.equal(data.length, getData.length);
        

        // Searches the Data and Returns Entries
        const filterData = await userRepo.get({name: getData[2].name});
        assert.deepEqual(filterData[0], getData[2]);
        console.log(filterData);

    } catch (error) {
        console.log(error);

    } finally {
        const admin = client.db(dbName).admin();


        // Drops the Database so that it can be Reloaded (testing)
        await client.db(dbName).dropDatabase();

        // Returns a list of the DBs for this MongoDB Connection
        console.log(await admin.listDatabases());

        // Closes the Connection
        client.close();
    }
    // // Loads Data from Users.json using loadData() from userRepo.js
    // const results = await UserRepo.loadData(data);

    // // Makes sure that the Length Equals what was Inserted
    // assert.equal(data.length, results.insertedCount);

    // // Gets Loaded Data
    // const getData = await userRepo.get();
    // // console.log(results.insertedCount, results.ops);
    // const admin = client.db(dbName).admin();

    // // Drops the Database so that it can be Reloaded (testing)
    // await client.db(dbName).dropDatabase();

    // // Check to see if DB Server up and Running
    // // console.log(await admin.serverStatus());

    // // Returns a list of the DBs for this MongoDB Connection
    // console.log(await admin.listDatabases());

    // client.close();

}

main();