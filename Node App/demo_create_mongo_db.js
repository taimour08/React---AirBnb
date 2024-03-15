
//mongodb+srv://taimourkhan98:<password>@thecluster.ezepf8y.mongodb.net/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://taimourkhan98:2lYaaA4MEyokkBGP@thecluster.ezepf8y.mongodb.net/?retryWrites=true&w=majority&appName=TheCluster";

// Your current IP address (193.40.12.11) has been added to enable local connectivity.
// 2lYaaA4MEyokkBGP

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});