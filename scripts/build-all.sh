#!/bin/bash

cd "$(dirname "$0")"

../microservices/team-stats-gatherer/build.sh
../microservices/baseball-trends-api/build.sh
../react/baseball-trends-ui/build.sh
