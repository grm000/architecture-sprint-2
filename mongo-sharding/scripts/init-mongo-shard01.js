rs.initiate({
    _id: "mongo-shard01",
    version: 1,
    members: [
        { _id: 0, host : "mongo-shard01-master:27017" }
        
    ]   
})