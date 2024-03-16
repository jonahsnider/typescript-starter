# TypeScript Starter

[![CI](https://github.com/jonahsnider/typescript-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jonahsnider/typescript-starter/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/jonahsnider/typescript-starter/graph/badge.svg?token=jC6Ho46EEn)](https://codecov.io/gh/jonahsnider/typescript-starter)

My personal TypeScript starter template.

## Features

- Targets the [latest versions of Node.js](./.node-version)
- Source code, tests, and tooling configs all use ESM
- 100% TypeScript codebase with [a simple, strict config](./tsconfig.json) via [`@tsconfig/node20`](https://github.com/tsconfig/bases#readme)
- Unit tests via [Vitest](https://vitest.dev/)
- Great tooling
  - Package management via Bun
  - Linting and formatting via [Biome](https://biomejs.dev/)
  - Automated dependency updates via [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) and [my config](https://github.com/jonahsnider/renovate-config#readme)
  - GitHub Actions CI for commits and pull requests
  - Lightweight [Visual Studio Code configs](./.vscode/settings.json) to alleviate common pain points
