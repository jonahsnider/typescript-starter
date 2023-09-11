# Contributing

## Prequisites

This project uses [Bun](https://bun.sh/) to run, so make sure you have a version compatible with the one listed in `package.json`.

[Bun](https://bun.sh/) is used to manage dependencies and run scripts.
After cloning the repository you can use this command to install dependencies:

```sh
bun
```

## Building

Run the `build` script to compile the TypeScript source code into JavaScript in the `tsc_output` folder.

## Style

All files are formatted using Prettier.

You can check code style with this command:

```sh
bun run style
```

You can format files with this command:

```sh
bun run style --write
```

## Linting

XO (a wrapper around ESLint) is used to lint the source.

You can run the this command to lint the source:

```sh
bun run lint
```

You can fix linting errors with this command:

```sh
bun run lint --fix
```

## Testing

AVA is used for unit testing.

Unit tests are stored in the `test/` directory mirroring the structure of the source files (ex. `src/config.ts` would have `test/config/some-function.test.ts`).
You can run the tests with the `test` script:

```sh
bun test
```

You can run tests in watch mode with this command:

```sh
bun test --watch
```

### Coverage

You can collect test coverage by running this command:

```sh
bun run test:coverage
```

This will generate a `coverage` folder which has a breakdown of coverage of the project.
The CI will upload the coverage information to [CodeCov](https://codecov.io) which can be [viewed here](https://codecov.io/gh/jonahsnider/typescript-starter).
