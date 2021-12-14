#!/bin/bash

git pull

echo "Building client"
docker-compose -f ./client/docker-compose.yml up -d --build 