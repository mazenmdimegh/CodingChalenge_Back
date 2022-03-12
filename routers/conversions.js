const router = require('express').Router();
const res = require('express/lib/response');
const {Conversion,validation_Conversion}=require("../models/conversion")


router.get('',async(req,res)=>{
    res.send(await Conversion.find());
})

router.post('',async(req,res)=>{
    let result= validation_Conversion.validate(req.body);
    if(!result)
        res.status(400).send("wrong format")
    let conversion = new Conversion(req.body);
    res.send(await conversion.save());
})