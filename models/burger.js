var orm=require("../config/orm.js");

var burger={
    all:function(cb){

        orm.selectAll("burgers",function(res){
           cb(res);
        });
    },

    create:function(vals,cb){
        orm.insertOne("burgers",vals,function(res){
            cb(res);
        });
    },

    update:function(objVal,objconditions,cb){
        orm.updateOne("burgers",objVal,objconditions,function(res){
            cb(res);
        });
    }
}

module.exports=burger;