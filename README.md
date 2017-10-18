# README

## Introduction

This project was made using [Webpacker](https://github.com/rails/webpacker). It allows for easy integration of JS libraries that require precompilation. In additon, Hot Module Reloading has been enabled for the dev version of this project, so any changes made to React files will automatically be refreshed in the browser.

## Running the project

Git clone, cd into the directory and run the following commands in your terminal:

```
bundle install
bundle exec foreman start -f Procfile.dev
```

## Front-end Notes

### Important Directories

```
/app
  |_ /javascript
  |  |_ /packs
  |  |_ /src
  |
  |_ /assets
    |_ /javascripts
    |_ /stylesheets
```

Webpacker, by default, puts all its entry point files inside `app/javascript/packs` and you only put the entry point file. Other files related to react are to be put elsewhere. Therefore, the bulk of React code will be put in the `app/javascript/src` directory, however, if you're looking for the final `ReactDOM.render` call, it's in the `packs/main.js` file.

The majority of styling will be embedded into the components through JS, but when the need arises, styling is done in the `assets/stylesheets` folder ala RoR defaults.

### Webpacker Notes

In our config file, Webpacker aliases the `app/assets` directory, so React Code has convenient access to resources like images. For example,

```
const fanpCharacter = require('images/character.png');
```

`styled-components` still cannot access assets from the asset pipeline, so import the images into the JS directly and use accordingly.

```
const fanpCharacter = require('images/character.png');

const MyAwesomeBackground = styled.div`
  background-image: url(${fanpCharacter})
`
```
