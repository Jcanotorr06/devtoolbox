# Contributing Guidelines

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

When contributing to `devtoolbox`, wheter on Github or in other community spaces:

- Be respectful, civil and open-minded
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/Jcanotorr06/devtoolbox/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the change you want to make, and open a pull request only when your suggestions get apporved by maintainers.

## Table Of Contents

- [Contributing Guidelines](#contributing-guidelines)
  - [Table Of Contents](#table-of-contents)
  - [How to Contribute](#how-to-contribute)
    - [Prerequisites](#prerequisites)
    - [Setup your enviroment](#setup-your-enviroment)
    - [Implement your changes](#implement-your-changes)
    - [When you're done](#when-youre-done)
  - [Credits](#credits)

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/Jcanotorr06/devtoolbox/issues) describing the problem you would like to solve.

### Setup your enviroment

_Some commands will assume you have the Github CLI installed, if you haven't, consider [installing it](https://github.com/cli/cli#installation), but you can always use the Web UI if you prefer that instead._

In order to contribute to this project, you will need to fork the repository:

```bash
gh repo fork jcanotorr06/devtoolbox
```

then, clone it to your local machine:

```bash
gh repo clone <your-github-name>/devtoolbox
```

This project uses [yarn](https://yarnpkg.com/) as its package manager. Install it if you haven't already:

```bash
npm install -g yarn
```

Then, install the project's dependencies:

```bash
yarn install
```

### Implement your changes

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

- Check that your code follows the project's style guidelines
- Please also make a manual, functional test of your changes.


When all that's done, it's time to file a pull request to upstream: 

**NOTE**: All pull requests should target the `next` branch.


```bash
gh pr create --web
```

and fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

## Credits

This documented was inspired by the contributing guidelines for [cloudflare/wrangler2](https://github.com/cloudflare/wrangler2/blob/main/CONTRIBUTING.md).