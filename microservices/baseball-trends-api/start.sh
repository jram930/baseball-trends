#!/bin/bash

docker run --rm -d --name baseball-trends-api --network simple-network --ip 172.18.0.4 -p 8080:8080 jram930/baseball-trends-api:latest
