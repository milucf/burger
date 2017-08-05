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
        date:getTimeStamp()
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

function getTimeStamp(){
    var d = new Date();
    var month=d.getMonth();
    var day=d.getDate();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var second=d.getSeconds();
    if(month<10)month="0"+month;
    if(day<10)day="0"+day;
    if(hour<10)hour="0"+hour;
    if(minute<10)minute="0"+minute;
    if(second<10)second="0"+second;
    var timestamp= d.getFullYear()+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;

    return timestamp;
}

module.exports = router;