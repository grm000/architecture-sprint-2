sh.addShard("mongo-shard01/mongo-shard01-master:27017")
sh.addShard("mongo-shard01/mongo-shard01-slave01:27017")
sh.addShard("mongo-shard01/mongo-shard01-slave02:27017")
sh.addShard("mongo-shard02/mongo-shard02-master:27017")
sh.addShard("mongo-shard02/mongo-shard02-slave01:27017")
sh.addShard("mongo-shard02/mongo-shard02-slave02:27017")



sh.enableSharding("somedb");
sh.shardCollection("somedb.helloDoc", { "name" : "hashed" } );
use somedb
for(var i = 0; i < 1000; i++) db.helloDoc.insert({age:i, name:"ly"+i});
db.helloDoc.countDocuments();