const express = require('express');
const app = express();
const cors = require('cors');

const generalRoutes = require('./routes');
const config = require('./config');
const mongoConnect = require('./lib/mongo');
const { logErrors, boomErrorHandler, generalErrorHandler } = require('./utils/middlewares/errorHandlers');

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://algoritmia.upiitadigital.com/', 'https://algoritmia.upiitadigital.com'];
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('Access denied'));
        }
    }
}
app.use(cors(options));


generalRoutes(app);
mongoConnect();

app.use(logErrors);
app.use(boomErrorHandler);
app.use(generalErrorHandler);

app.listen(config.port, () => {
    console.log('listening on port '+config.port);
});