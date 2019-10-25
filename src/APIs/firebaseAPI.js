require('firebase');
require('firebase/firestore');
const db = require('./firebase.js')['db'];

/**
 * It returns all the events in the database in order of creation
 * the format is as follows:
 * res = {doc.id : {Date, Description, Image, Name, Signup} ,  doc.id2: {...} , ...}
 * If the Event (doc) has different fields then the appended fields to doc.id will
 * be different too.
 * THE RETURNED OBJECT IS A PROMISE
 */
function getTimestamp(secs, nanosecs){
  var timestamp = db.Timestamp(secs, nanosecs);
  var date = timestamp.toDate();
  console.log(date);
  return date;
}
function getEvents() {

    return new Promise(function(resolve, reject) {
        var res = {};
        db.collection("events").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var dataJSON = JSON.stringify(doc.data());
                res[doc.id] = dataJSON;
                //console.log(dataJSON);
            });
            resolve(res);
        })
        .catch(function(error) {
            console.log("Error getting documents", error);
            reject(error);
        });
    })

}

/**
 * this show cases how to use the promisified json object
 */
function test() {
    getEvents().then(function(result) {
        for (var k in result) {
          //console.log(k);
        }
      })
      .catch(err => console.log(err));
}

module.exports = {
    getEvents,
    test,
    getTimestamp
}
