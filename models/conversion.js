const mongoose = require('mongoose');
const Joi = require('joi');

let conversion_schema = new mongoose.Schema({
    from : String,
    to : String,
    amount : {
        type : Number,
        min : 0
        },
    result :  {
        type : Number,
        min : 10
        },
    date: {
        type: Date,
        default: Date.now()
    },
});

let validation_Conversion = Joi.object({
    from : Joi.string().min(3).required(),
    to: Joi.string().min(3).required(),
    amount : Joi.number().positive(),
    result : Joi.number().positive(),
    date : Joi.date(),
    price : Joi.number().positive()
});

let Conversion = mongoose.model('Conversion',conversion_schema);
module.exports={
    validation_Conversion:validation_Conversion,
    Conversion:Conversion
}