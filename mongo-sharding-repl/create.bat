docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"