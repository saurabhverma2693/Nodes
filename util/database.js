const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://saurabhverma2693:Sv%402025@cluster0.rutufru.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
    // MongoClient.connect('mongodb+srv://saurabhverma2693:Sv@2025@cluster0.rutufru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
        console.log('Connected!');
        _db = client.db();
        callback(client);
    })
    .catch(err =>{
        console.log(err);
        throw err;
    });
};

const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No Database Found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
