#!/bin/bash

docker run --rm -d --name team-stats-gatherer --network simple-network --ip 172.18.0.3 jram930/team-stats-gatherer:latest