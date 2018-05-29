<nowiki>
    <marquee>
        :construction: Work in Progress! :construction:
    </marquee>
</nowiki>

<div align="center">
<img alt="Prettier"
  src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.png">
<img alt="Bash" height="180" hspace="25" vspace="15"
  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg">
</div>

<h2 align="center">Prettier Shell Plugin</h2>

## WORK IN PROGRESS

Please note that this plugin is currently in alpha stage and still under active development. I encourage everyone to try it and give feedback, but I don't recommend it for production use yet.

## Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

This plugin adds support for Shell scripts to Prettier.

## Install

```sh
yarn add --dev prettier prettier-plugin-sh
# or
npm install --save-dev prettier prettier-plugin-sh
```

## Use

```bash
yarn prettier path/to/file.sh --write
# or
npx prettier path/to/file.sh --write
```

## Contributing

To test it out on a Shell script:

- Clone this repository.
- Run `yarn`.
- Create a file called `test.sh`.
- Run `yarn prettier test.sh` to check the output.
