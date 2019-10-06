#!/bin/bash
curl 'http://graphberry' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"# Write your query or mutation here\n{\n\tpin(id:21) {\n    id\n    value\n  }\n}"}' --compressed
