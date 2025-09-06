const { MongoClient } = require('mongodb')
const dotenv = require('dotenv');
dotenv.config();

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Databse is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            database = client.db();
            console.log('Connected to MongoDB')
          callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
}

const getDatabase = () => {
    if (!database) {
        throw Error('Databse is not initialized!');
    }
    return database;
    };

module.exports = {initDb, getDatabase}