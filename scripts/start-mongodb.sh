#!/bin/bash

docker run --rm --name mongodb -d --network simple-network --ip 172.18.0.2 -p 27017:27017 mongo:latest