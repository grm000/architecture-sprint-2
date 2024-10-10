rs.initiate({
    _id: "mongo-shard01",
    version: 1,
    members: [
        { _id: 0, host : "mongo-shard01-master:27017" },
        { _id: 1, host : "mongo-shard01-slave01:27017" },
        { _id: 2, host : "mongo-shard01-slave02:27017" },
    ]   
})