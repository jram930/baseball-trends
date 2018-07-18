#!/bin/bash

cd "$(dirname "$0")"

../microservices/team-stats-gatherer/build.sh
../microservices/baseball-stats-api/build.sh