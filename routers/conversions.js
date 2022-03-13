const router = require('express').Router();
const res = require('express/lib/response');
const {Conversion,validation_Conversion}=require("../models/conversion")


router.get('',async(req,res)=>{
    res.send(await Conversion.find());
})
router.get('/:id',async(req,res)=>{
    try {
    res.send(await Conversion.findById(req.params.id));
    } catch (error) {
    res.status(400).send('Error finding conversion :'+error.message);
    }
})

router.post('',async(req,res)=>{
    let result= validation_Conversion.validate(req.body);
    if(!result)
        res.status(400).send("wrong format")
    let conversion = new Conversion(req.body);
    res.send(await conversion.save());
})
router.put('',async(req,res)=>{
    let result= validation_Conversion.validate(req.body);
    if(!result)
        res.status(400).send("wrong format")
    let conversion = new Conversion(req.body);
    res.send(await conversion.save());
})
router.delete('/:id',async(req,res)=>{
    try {
        let conv = await Conversion.findByIdAndRemove(req.params.id);
        if(!conv)
            return res.status(404).send('conversion with id is not found');
        res.send(conv);
    } catch (error) {
        res.status(400).send('Error Deleting conversion :',error.message);
    }
})
module.exports = router