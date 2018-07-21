#!/bin/bash

cd "$(dirname "$0")"

docker build -t jram930/baseball-trends-ui .
