#!/bin/bash

cd "$(dirname "$0")"

./configure-network.sh
./start-mongodb.sh
../microservices/team-stats-gatherer/start.sh diamondbacks 172.18.0.34
../microservices/team-stats-gatherer/start.sh braves 172.18.0.35
../microservices/team-stats-gatherer/start.sh cubs 172.18.0.6
../microservices/team-stats-gatherer/start.sh reds 172.18.0.7
../microservices/team-stats-gatherer/start.sh rockies 172.18.0.8
../microservices/team-stats-gatherer/start.sh dodgers 172.18.0.9
../microservices/team-stats-gatherer/start.sh marlins 172.18.0.10
../microservices/team-stats-gatherer/start.sh brewers 172.18.0.11
../microservices/team-stats-gatherer/start.sh mets 172.18.0.12
../microservices/team-stats-gatherer/start.sh phillies 172.18.0.13
../microservices/team-stats-gatherer/start.sh pirates 172.18.0.14
../microservices/team-stats-gatherer/start.sh padres 172.18.0.15
../microservices/team-stats-gatherer/start.sh giants 172.18.0.16
../microservices/team-stats-gatherer/start.sh cardinals 172.18.0.17
../microservices/team-stats-gatherer/start.sh nationals 172.18.0.18
../microservices/team-stats-gatherer/start.sh orioles 172.18.0.19
../microservices/team-stats-gatherer/start.sh redsox 172.18.0.20
../microservices/team-stats-gatherer/start.sh whitesox 172.18.0.21
../microservices/team-stats-gatherer/start.sh indians 172.18.0.22
../microservices/team-stats-gatherer/start.sh tigers 172.18.0.23
../microservices/team-stats-gatherer/start.sh astros 172.18.0.24
../microservices/team-stats-gatherer/start.sh royals 172.18.0.25
../microservices/team-stats-gatherer/start.sh angels 172.18.0.26
../microservices/team-stats-gatherer/start.sh twins 172.18.0.27
../microservices/team-stats-gatherer/start.sh yankees 172.18.0.28
../microservices/team-stats-gatherer/start.sh athletics 172.18.0.29
../microservices/team-stats-gatherer/start.sh mariners 172.18.0.30
../microservices/team-stats-gatherer/start.sh rays 172.18.0.31
../microservices/team-stats-gatherer/start.sh rangers 172.18.0.32
../microservices/team-stats-gatherer/start.sh bluejays 172.18.0.33
../microservices/baseball-trends-api/start.sh