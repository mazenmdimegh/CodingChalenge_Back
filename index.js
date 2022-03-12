require('./db/connect')
const express = require('express');
const appDebug = require('debug')('app:debug');
const {Conversion } = require('./models/conversion');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

let conversion = new Conversion({
    from : "EUR",
    to : "USD",
    amount : 100,
    result : 1000 
});
console.log(conversion.save());


app.listen(port,()=> appDebug(`server on ${port}`))