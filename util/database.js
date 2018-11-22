const mongodb = require('mongodb');
const MongoCleint = mongodb.MongoClient;

const MONGO_URI = 'mongodb://127.0.0.1:27017/rest-api';

let _db;

const mongoConnect = (callback)=> {
    MongoCleint.connect(MONGO_URI)
        .then(client => {
            console.log('Connected to MongoDB');
            _db = client.db();
            callback()
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

};


const getDb = () => {
    if(_db){
        return _db;
    }
    throw  'No database found!'
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

