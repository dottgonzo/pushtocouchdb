var verb=require('verbo'),
Promise=require('promise'),
PouchDB=require('pouchdb');


module.exports = function(from,to) {
  return new Promise(function (resolve, reject) {

  if (typeof replicationprocess === 'undefined') {
replicationprocess=false

  }
  var dbfrom=new PouchDB(from);
  var toremote=new PouchDB(to);
  dbfrom.allDocs().then(function(docs){

  if (!replicationprocess && docs.total_rows && docs.total_rows > 0){

verb("replication start","debug","Pushtocouch");


    replicationprocess=true;
    dbfrom.replicate.to(toremote).on('complete', function () {

      verb("replication","debug","Pushtocouch")

      dbfrom.destroy().then(function(){

        replicationprocess=false;
        verb("replication process ended","info","Pushtocouch")
        resolve({success:true,replication:'complete'});



      }).catch(function(err){
        replicationprocess=false;
        verb(err,"error","Pushtocouch");
        reject(err)

      });

}).on('error', function (err) {
  verb(err,'error','localdb replication online error');
  replicationprocess=false

  reject(err)
}).catch(function(err){
  verb('error on get all documents','error','localdb');
  reject(err);
  replicationprocess=false

})

  } else{
    resolve({success:true,replication:'active'});

  }
  }).catch(function(err){
      replicationprocess=false;
      verb(err,"error","Pushtocouch replication crash");
      reject(err)


    });




})

  }
