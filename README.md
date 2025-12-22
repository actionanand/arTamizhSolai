# arTamizhSolai

This project was generated with [Analog](https://analogjs.org), the fullstack meta-framework for Angular.

## Cloning Guide

1.  Clone only the remote primary HEAD (default: origin/main)

```bash
git clone <url> --single-branch
```

2. Only specific branch

```bash
git clone <url> --branch <branch> --single-branch [<folder>]
```

```bash
git clone <url> --branch <branch>
```

3. Cloning repositories using degit

   - main branch is default.

```bash
npx degit github:user/repo#branch-name <folder-name>
```

4. Cloning this project with skeleton

```bash
git clone https://github.com/actionanand/artamizhsolai.git --branch 2-skeleton-blog angular-proj-name
```

```bash
npx degit github:actionanand/artamizhsolai#2-skeleton-blog angular-proj-name
```

## Setup

```bash
  nvm install v24.11.1
```

Run `npm install` to install the application dependencies.

## Development

Run `npm run dev` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

## Generating SHA1

```bash
echo -n 'your_password' | shasum
```

For generating [SHA1](https://emn178.github.io/online-tools/sha1.html) online

## Build

Run `npm run build` to build the client/server project. The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
