# Steps

### Commit 1 : Basic Project Setup

- `npm init -y` to make the package.json file
- make the src folder all the code will be in the src folder
- Inside src fodler make the `index.js` file it will be the main file which runs
- Install the initial dependencies which will be used to set up the express server: express,nodemon `npm i express nodemon`
- `git init` to initialize git and make a .gitignore by `touch gitignore`
- add `node_modules` in `.gitignore` to exclude it from git add
- adding the `start` script in the package.json to run the project with `npm start`

### Commit 2 : Database Integration

- Make a `config` folder in the src this will contain the configs file as the name suggest and inside it make a `dbConfig.js` in it
- Now we will require the mongoose package `npm i mongoose`

<!-- ### Commit 3 : serverConfig

- All important info like the port number or some user and password are not hardcoded in our application we initialize them inside the environment variables
- make a ` -->
