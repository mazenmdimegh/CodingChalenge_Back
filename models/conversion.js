const mongoose = require('mongoose');
const Joi = require('joi');

let conversion_schema = new mongoose.Schema({
    from : String,
    to : String,
    amount :String ,
    result :  String,
    date: {
        type: Date,
        default: Date.now()
    },
});

let validation_Conversion = Joi.object({
    from : Joi.string().min(3).required(),
    to: Joi.string().min(3).required(),
    amount : Joi.string(),
    result : Joi.string(),
    date : Joi.date()
});

let Conversion = mongoose.model('Conversion',conversion_schema);
module.exports={
    validation_Conversion:validation_Conversion,
    Conversion:Conversion
}