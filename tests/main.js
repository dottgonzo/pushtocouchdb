var pushtocouchdb=require('../index.js'),
verb=require('verbo'),
rm=require('rm-r'),
PouchDB=require('pouchdb');

var db=new PouchDB('aa');
var serverlink='http://admin:admin@localhost:5984/bb';
db.put({_id:"test"}).then(function(){

  pushtocouchdb('aa',serverlink).then(function(){
    var dbb=new PouchDB(serverlink);
dbb.get("test").then(function(){
  verb("ok","info","replicated")

  rm.dir('./bb')
}).catch(function(err){
  verb(err,"error","booh1")
});



  }).catch(function(err){
    verb(err,"error","booh2")

    rm.dir('./aa')
  });

}).catch(function(err){
  verb(err,"error","booh")

});
