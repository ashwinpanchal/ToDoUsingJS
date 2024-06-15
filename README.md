# Steps

### To Run

- git clone this repo
- inside the rootDir run the following command

```
npm install
```

- make a `.env` file in the rootDir
- the content of `.env` are :

```
PORT=3000
```

- make sure mongo is installed on your pc
- `npm start`

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

### Commit 3 : serverConfig

- All important info like the port number or some user and password are not hardcoded in our application we initialize them inside the environment variables
- make a `.env` file in the root directory by `touch .env`, put it in `.gitignore`
- the content of `.env` are :

```
PORT=3000
```

- the command line code may not work in windows like the touch command and all
- We use dotenv package to configure this process variable `npm i dotenv`and make the `serverConfig.js` file and we how its configured

### Commit 4 : Models

- In the models we make the schema for our resources for each resources we have one file
- make the `Todo.js` file inside the models make the schema and model for the Todo

### Commit 5 : Repository

- The repository layer will interact with the database directly
- We have to make a class `TodoRepository` which does the basic CRUD functionality on the Todo in mongo

### Commit 6 : Service

- First lets make a `service` folder and inside it make a `todo-service.js`
- `todo-service` will have all the business logic but since this is a small application the todo service might appear unnecessary as of now and only a copy of `todo-repository`

### Commit 7 : Controller

- First lets make a `controller` folder and inside it make a `todo-controller.js`
- Make different controllers in it

### Commit 8 : Routes

- Same make the routes folder and make the routes
- make the respective routers and add them in the `index.js` file in rootDir

### Routes

- to test the routes in the post man

- GET : localhost:3000/api/v1/todos -> all todos
- GET : localhost:3000/api/v1/todos/:id -> todo with id : id
- POST : localhost:3000/api/v1/todos -> create a todo (pass the todo in the body)
- DELETE : localhost:3000/api/v1/todos/:id -> delete the todo with id : id
- PUT : localhost:3000/api/v1/todos/:id -> update the todo with id : id (updated todo in body)
