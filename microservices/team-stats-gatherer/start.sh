#!/bin/bash

docker run --rm -d -e TEAM_NAME=$1 --name team-stats-gatherer_$1 --network simple-network --ip $2 jram930/team-stats-gatherer:latest
