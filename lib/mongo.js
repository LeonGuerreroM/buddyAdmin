const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;

async function mongoConnect(){
    await mongoose.connect(config.mongoUri, { useNewUrlParser: true });
    console.log('successfully connected to mongo');
}



module.exports = mongoConnect; 