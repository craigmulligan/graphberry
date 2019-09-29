# 📈 Graphberry 🍇

[![CircleCI](https://circleci.com/gh/hobochild/graphberry.svg?style=svg)](https://circleci.com/gh/hobochild/graphberry)

> A graphql server for interacting with hardware

**NOTE** Warning: This project is in it's early stages. APIs are likely to break.

# Features

1.  Well defined API - A curated typeSafe API makes it easier for developers to pick up unfamiliar hardware.
1.  Network Abstraction - Abstracting hardware behind a network removes all the work around sshing|sync+cross-compiling code you can just directly interact with the graphberry API over the local network.
1.  Language Agnostic - A library to interact with gpio/ble may not exist in your langauge of choice, say PHP, but this way you can write your business logic in php and then call the graphberry services over language agnostic transport `http` :)
1.  Pluggable - Use the core plugins or easily create your own, using the [gramps](https://gramps.js.org/) format.

## Getting Started

```
docker run hobochild/graphberry -p 4000
```

## Docs

```
coming soon!
```
