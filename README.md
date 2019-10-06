# 📈 Graphberry 🍇

[![CircleCI](https://circleci.com/gh/hobochild/graphberry.svg?style=svg)](https://circleci.com/gh/hobochild/graphberry)

> A graphql server for interacting with hardware

**Warning**: This project is in it's early stages. APIs are likely to break.

# Features

1.  Well defined API - A curated typeSafe API makes it easier for developers to pick up unfamiliar hardware.
1.  Network Abstraction - Abstracting hardware behind a network removes all the work around sshing|sync+cross-compiling code you can just directly interact with the graphberry API over the local network.
1.  Language Agnostic - A library to interact with gpio/ble may not exist in your langauge of choice, say PHP, but this way you can write your business logic in php and then call the graphberry services over language agnostic transport `http` :)
1.  Pluggable - Use the core plugins or easily create your own, using the [gramps](https://gramps.js.org/) format.

## Docs

Running with [Balena](https://www.balena.io/)

Follow their [Getting Started](https://www.balena.io/docs/learn/getting-started/raspberrypi3/nodejs/#introduction) to setup an account.

Then push this repo to your applications remote:

```
git push balena master
```

Visit: `<your-pi-ip-addr>` to see the interactive query playground.

See [/example](/example) for example app source code.

> More docs coming soon!
