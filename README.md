# iwatchseries

## Pre-requisites

- Install [Docker](https://www.docker.com/products/docker-desktop)

## Install

1. Build the Docker image
```
docker-compose build
```

2. Run the Docker container
```
docker-compose up -d
```

3. Open the app: http://localhost:3000

## Run tests
```
docker-compose run --rm app npm run test
```

## Build the app
```
docker-compose run --rm app npm run build
```

## Authors
- SabrinaFZ
