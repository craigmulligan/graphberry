# Graphberry

> A graphql server for interacting with hardware

# Why?

I intially just built this to learn more about graphql subscriptions and graphql schema merging, but I think there maybe other practical applications.

1.  Microservices on hardware is now a thing, this is a great abstraction if you have multiple services that interact with the same hardware.
2.  It's makes it easier for web developers to pick up hardware.
3.  A library to interact with serial/ble may no exist in your langauge of choice, say PHP, but this way you can write your business logic in php and then call the graphberry services over language agnostic transport `http` :)
4.  It's easier to get up a running, as the api is self documented (thanks to graphql types).

## Features

* Pluggable [DataSources](https://gramps.js.org/data-source/data-source-overview/) - graphberry uses the [gramps](https://gramps.js.org/) project to merge various graphql schema's making the framework pluggable and extendable.

* Batteries included - Prebuilt docker image for off the shelf hardware api.

## Docs

```
comming soon!
```
