#!/bin/bash

docker container kill mongodb
docker container kill team-stats-gatherer
docker container kill baseball-stats-api
docker network rm simple-network