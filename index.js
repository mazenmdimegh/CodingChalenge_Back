require('./db/connect')
const express = require('express');
const appDebug = require('debug')('app:debug');
const {Conversion } = require('./models/conversion');
const router= require('./routers/conversions');
const bodyParser    = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/conversions',router);

let conversion = new Conversion({
    from : "EUR",
    to : "USD",
    amount : 100,
    result : 1000 
});
//console.log(conversion.save());


app.listen(port,()=> appDebug(`server on ${port}`))