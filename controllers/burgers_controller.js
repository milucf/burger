var express = require("express");
var burger=require("../models/burger.js");

var router=express.Router();

router.get("/:json?",function(req,res){
    burger.all(function(data){
       var hbObj={
           burgers:data
       }
        if(req.params.json=="json")
            res.json(data);
        else
           res.render("index",hbObj);
    });
});

router.post("/",function(req,res){
    valsObj={
        burger_name:req.body.burgerName,
        devoured:false,
        date:Date.now()
    };
    burger.create(valsObj,function(){
        res.end();
    });
});

router.put("/",function(req,res){
    valsObj={
        devoured:true,
    };
   condObj={
        id:req.body.id
    };
    burger.update(valsObj,condObj,function(){
        res.end();
    });
});

module.exports = router;