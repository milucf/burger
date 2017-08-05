var connection = require("../config/connection.js");

var orm={

    selectAll:function(tableName, cb){
    var queryString = "SELECT * FROM ?? ;";
    connection.query(queryString,[tableName], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },

   insertOne:function(tableName,objValues,cb){
     var queryString = "INSERT INTO "+connection.escapeId(tableName)+"SET ? ;";
     connection.query(queryString, objValues, function(err, result) {
      if (err) throw err;

      cb(result);
    });
   },

   updateOne:function(tableName,objValues,objCondition,cb){
      var queryString = "UPDATE "+connection.escapeId(tableName)+" SET ? WHERE ? ;";
      connection.query(queryString, [objValues,objCondition], function(err, result) {
      if (err) throw err;

      cb(result);
    });
   }
};

module.exports = orm;