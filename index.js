var verb=require('verbo'),
PouchDB=require('pouchdb');


module.exports = function(from,to,callback) {

  if (typeof variable === 'undefined') {
replicationprocess=false

  }
  var dbfrom=new PouchDB(from);
  var toremote=new PouchDB(to);
  dbfrom.allDocs().then(function(docs){

  if (!replicationprocess && docs.total_rows && docs.total_rows > 0){

verb("replication start","debug","Pushtocouch");


    replicationprocess=true;
    dbfrom.replicate.to(toremote, {
      retry: true
    }).then(function(){
      verb("replication","debug","Pushtocouch")

      dbfrom.destroy().then(function(){

        replicationprocess=false;
        verb("replication process ended","info","Pushtocouch")
if(callback){
  callback()
}


      }).catch(function(err){
        replicationprocess=false;
        verb(err,"error","Pushtocouch")

      });

    }).catch(function(err){
      replicationprocess=false;
      verb("replication crash","error","Pushtocouch")

    });


  }
}).catch(function(err){
  verb('error on get all documents','error','localdb')
})

}
