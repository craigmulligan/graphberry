#!/bin/bash
while true
do
	echo "Press [CTRL+C] to stop.."
  curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query": "{ pin(id: "id") {
    id 
    value
  } }"}' \
  http://graphberry/graphql
	sleep 1
done
