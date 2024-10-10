rs.initiate({
    _id: "mongo-conf-srv", 
    configsvr: true, 
    version: 1, 
    members: [
         { _id: 0, host : 'mongo-conf-srv:27017' } 
    ]
})