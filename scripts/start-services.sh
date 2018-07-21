#!/bin/bash

cd "$(dirname "$0")"

./configure-network.sh
./start-mongodb.sh
../microservices/team-stats-gatherer/start.sh
../microservices/baseball-trends-api/start.sh
