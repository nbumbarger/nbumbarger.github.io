# Nick's personal site

## Installation and Usage

The steps below will walk you through setting up your own instance of the project.

#### Note:
This app is developed to deploy to a Github user page repository via Travis-CI. Because user pages must be served compiled from the `master` branch rather than a `gh-pages` branch, only the `development` branch is intended to host the source code and canonical commit history.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v6 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules (from the src directory):

```
yarn install
```

### Usage
The development version of this application resides in the src directory, which is the home directory for all commands.

#### Starting the app

```
yarn run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

# Deployment
To prepare the app for deployment run:

```
yarn run build
```
or
```
yarn run stage
```
This will package the app and place all the contents in the `dist` directory. The app can then be run by any web server. Commits to the `develop` branch will compile the app to the `master` branch of a Github user page repository.
