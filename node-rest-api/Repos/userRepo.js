const { MongoClient } = require('mongodb');

function userRepo() {
    // Defining the DB url and name
    const url = 'mongodb://127.0.0.1:27017';
    const dbName = 'Users';

    function get(query) {
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);

                const items = db.collection('users').find(query);

                resolve(await items.toArray());
                console.log(items.toArray());
                client.close();

            } catch (error) {
                reject (error);
            }
        });

    }


    function loadData(data){
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);

                results = await db.collection('users').insertMany(data);
                resolve(results);
                client.close();
            } catch (error) {
                reject(error)
            }
        })
    }

    return {loadData, get}
    
}

module.exports = userRepo();