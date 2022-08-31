require('dotenv').config();

const config = {
    port: process.env.PORT || 3001,
    mongoUri: process.env.MONGO_URI
}

module.exports = config;