#!/bin/bash

cd "$(dirname "$0")"

./start-services.sh
../react/baseball-trends-ui/start.sh
