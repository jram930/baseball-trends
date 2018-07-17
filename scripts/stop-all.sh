#!/bin/bash

docker container kill mongodb
docker container kill team-stats-gatherer
docker network rm simple-network