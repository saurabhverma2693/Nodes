const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://saurabhverma2693:Sv%402025@cluster0.rutufru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    // MongoClient.connect('mongodb+srv://saurabhverma2693:Sv@2025@cluster0.rutufru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
        console.log('Connected!');
        callback(client);
    })
    .catch(err =>{
        console.log(err);
    });
};

module.exports = mongoConnect;
