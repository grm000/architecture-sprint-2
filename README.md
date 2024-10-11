# Задание 1
    
Схема с заданием (1): [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-1-r-galeev.drawio)


# Задание 2

1. Из "mongo-sharding" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

``` 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```
### LINUX

``` 
docker-compose up -d && \
sleep 5 && \
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && \
sleep 2 && \
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && \
sleep 2 && \
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && \
sleep 2 && \
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```

2. Очистить ресурсы.
```
docker compose down -v
```

# Задание 3

1. Из "mongo-sharding-repl" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

``` 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```
### LINUX

``` 
docker-compose up -d && \
sleep 5 && \
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && \
sleep 2 && \
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && \
sleep 2 && \
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && \
sleep 2 && \
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```

2. Очистить ресурсы.

```
docker compose down -v
```

# Задание 4

1. Из "sharding-repl-cache" выполнить команду развёртывания кластера и инициализировать окружение

### WINDOWS

``` 
docker compose up -d && ^
timeout /t 5 && ^
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && ^
timeout /t 2 && ^
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```
### LINUX

``` 
docker-compose up -d && \
sleep 5 && \
docker-compose exec mongo-conf-srv sh -c "mongosh < /scripts/init-mongo-conf-srv.js" && \
sleep 2 && \
docker-compose exec mongo-shard01-master sh -c "mongosh < /scripts/init-mongo-shard01.js" && \
sleep 2 && \
docker-compose exec mongo-shard02-master sh -c "mongosh < /scripts/init-mongo-shard02.js" && \
sleep 2 && \
docker-compose exec mongo-router sh -c "mongosh < /scripts/init-mongo-router.js"
```

2. Очистить ресурсы.

```
docker compose down -v
```

# Задание 5

Схема с заданием (5): [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-5-r-galeev.drawio)

# Задание 6
       
Схема с заданием (6): [draw.io](https://github.com/grm000/architecture-sprint-2/blob/sprint-2/architecture-sprint-2-task-6-r-galeev.drawio)
