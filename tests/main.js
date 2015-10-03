var pushtocouchdb=require('../index.js'),
verb=require('verbo'),
rm=require('rm-r'),
PouchDB=require('pouchdb');

var db=new PouchDB('aa');
db.put({_id:"test"}).then(function(){

  pushtocouchdb('aa','bb',function(){
    var dbb=new PouchDB('bb');
dbb.get("test").then(function(){
  verb("ok","info","replicated")

  rm.dir('./bb')
}).catch(function(err){
  verb(err,"error","booh")
});



  }).catch(function(err){
    verb(err,"error","booh")
    rm.dir('./aa')
  });

})
