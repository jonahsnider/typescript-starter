# TypeScript Starter

[![Build Status](https://github.com/jonahsnider/typescript-starter/workflows/CI/badge.svg)](https://github.com/jonahsnider/typescript-starter/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![codecov](https://codecov.io/gh/jonahsnider/typescript-starter/branch/main/graph/badge.svg)](https://codecov.io/jonahsnider/typescript-starter)

My personal TypeScript starter template.

## Features

- Targets the [latest versions of Node.js](./.node-version)
- Source code, tests, and tooling configs all use ESM
- 100% TypeScript codebase with [a simple, strict config](./tsconfig.json) via [`@tsconfig/node16`](https://github.com/tsconfig/bases#readme)
- [devcontainer.json](./.devcontainer/devcontainer.json) makes getting a dev environment 100% reproducible
- Unit tests via [AVA](https://avajs.dev/) and test coverage via [c8](https://github.com/bcoe/c8#readme)
- Great tooling
  - Package management via Yarn 2+ (without PnP)
  - Linting via [XO](https://github.com/xojs/xo#readme) (an ESLint wrapper) and [my config](https://github.com/jonahsnider/xo-config#readme)
  - Formatting via [Prettier](https://prettier.io/) and [my config](https://github.com/jonahsnider/prettier-config#readme)
  - Automated dependency updates via [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) and [my config](https://github.com/jonahsnider/renovate-config#readme)
  - GitHub Actions CI for commits and pull requests
  - Lightweight [Visual Studio Code configs](./.vscode/settings.json) to alleviate common pain points
