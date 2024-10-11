rs.initiate({
    _id: "mongo-shard02",
    version: 1,
    members: [
        { _id: 0, host : "mongo-shard02-master:27017" }
          
        ]   
})