const { MongoClient } = require('mongodb');

function userRepo() {
    // Defining the DB url and name
    const url = 'mongodb://127.0.0.1:27017';
    const dbName = 'Users';


    function loadData(data){
        return new Promise(async (resolve, reject) => {
            const client = new MongoClient(url);
            try {
                await client.connect();
                const db = client.db(dbName);

                results = await db.collection('users').insertMany(data);
                resolve(results);
            } catch (error) {
                reject(error)
            }
        })
    }

    return {loadData}
    
}

module.exports = userRepo();