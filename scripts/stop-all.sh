#!/bin/bash

docker container kill mongodb
docker container kill team-stats-gatherer
docker container kill baseball-trends-api
docker container kill baseball-trends-ui
docker network rm simple-network
