const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://root:root@pepperfyy.p5n4q.mongodb.net/pepprefyy?retryWrites=true&w=majority";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, {useUnifiedTopology: true}, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log(`[MongoDB connection SUCCESS] collection connected :- ${dbCollectionName}`);

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};