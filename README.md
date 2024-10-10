# Задание 1
    Схема с заданием: [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-1-r-galeev.drawio)
# Задание 2

1. Из "mongo-sharding" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

```shell 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && ^
timeout /t 2 && ^
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```
### LINUX
```shell 
docker compose up -d && /
timeout /t 5 && /
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && /
timeout /t 2 && /
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && /
timeout /t 2 && /
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && /
timeout /t 2 && /
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```

2. Очистить ресурсы.
```shell
docker compose down -v
```

# Задание 3

1. Из "mongo-sharding-repl" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

```shell 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && ^
timeout /t 2 && ^
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```
### LINUX
```shell 
docker compose up -d && /
timeout /t 5 && /
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && /
timeout /t 2 && /
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && /
timeout /t 2 && /
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && /
timeout /t 2 && /
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```

2. Очистить ресурсы.

```shell
docker compose down -v
```

# Задание 4

1. Из "sharding-repl-cache" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

```shell 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && ^
timeout /t 2 && ^
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && ^
timeout /t 2 && ^
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```

### LINUX
```shell 
docker compose up -d && /
timeout /t 5 && /
docker-compose exec -i config_srv sh -c "mongosh --port 27017 < /scripts/init-mongo-config_srv.js" && /
timeout /t 2 && /
docker-compose exec -i shard1a sh -c "mongosh --port 27018 < /scripts/init-mongo-shard1a.js" && /
timeout /t 2 && /
docker-compose exec -i shard2a sh -c "mongosh --port 27019 < /scripts/init-mongo-shard2a.js" && /
timeout /t 2 && /
docker-compose exec -i mongos_router sh -c "mongosh --port 27020 < /scripts/init-mongo-mongos_router.js"
```

2. Очистить ресурсы.

```shell
docker compose down -v
```
# Задание 5
    Схема с заданием: [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-5-r-galeev.drawio)
# Задание 6
    Схема с заданием: [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-6-r-galeev.drawio)