const express = require('express');
const router = express.Router();

const studentRouter = require('./studentRoutes');

function generalRoutes(app){
    app.use('/api/v1', router);
    router.use('/students', studentRouter)
}

module.exports = generalRoutes;