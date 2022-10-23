const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Model = require('./model/Model');

mongoose.connect('mongodb+srv://darsh:8160@cluster0.n4nnvwz.mongodb.net/Garregs?retryWrites=true&w=majority').then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/model',async (req,res)=>{
        const data = await Model.find();
        res.send(data);      
    })
    app.get('/model/:id',async (req,res)=>{
        const data = await Model.findOne({CarNumbr:req.params.id});
        res.send(data);      
    });
   
    app.post('/model',async (req,res)=>{
          const mdl = new Model();
          mdl.CarNumbr=req.body.CN;
          mdl.CarName=req.body.CNUM;
          mdl.CarPrice=req.body.CP;
          mdl.CarModel=req.body.CM ;
          const data = await mdl.save();
        res.send(data);
    })
    app.put('/model/:id',async (req,res)=>{
        const data = await Model.findOne({CarNumbr:req.params.id});
        data.CarName=req.body.CNUM;
        data.CarPrice=req.body.CP;
        data.CarModel=req.body.CM;
        await data.save();
        res.send(data);

    })

    app.delete('/model/:id',async (req,res)=>{
        const data = await Model.deleteOne({CarNumbr:req.params.id});
        res.send(data);      
    })
    
    app.listen(7000,(req,res)=>{
        console.log("Serever Stated at Point 7000");
    })
})


