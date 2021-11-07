# Contributing

## Prequisites

This project uses [Node.js](https://nodejs.org) to run, so make sure you've got a version compatible with the one listed in `package.json`.

[Yarn](https://yarnpkg.com) is used to manage dependencies and run scripts.
After cloning the repository you can use this command to install dependencies:

```sh
yarn
```

## Building

Run the `build` script to compile the TypeScript source code into JavaScript in the `tsc_output` folder.

## Style

You can check code style with this command:

```sh
yarn run style
```

## Linting

You can run the this command to lint the source:

```sh
yarn run lint
```

## Testing

Unit tests are stored in the `test/` directory mirroring the structure of the source files (ex. `src/config.ts` would have `test/config/some-function.test.ts`).
You can run the tests with the `test` script:

```sh
yarn test
```

## Coverage

You can collect test coverage by running this command:

```sh
yarn run test:coverage
```

This will generate a `coverage` folder which has a breakdown of coverage of the project.
The CI will upload the coverage information to [CodeCov](https://codecov.io) which can be [viewed here](https://codecov.io/gh/jonahsnider/typescript-starter).
