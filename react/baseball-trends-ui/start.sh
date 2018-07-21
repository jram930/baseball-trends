#!/bin/bash

docker run --rm -d --name baseball-trends-ui --network simple-network --ip 172.18.0.5 -p 3000:3000 jram930/baseball-trends-ui:latest
