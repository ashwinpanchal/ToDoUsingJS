const express = require("express");

const todoRouter = express.Router();

const { TodoController } = require("../../controller/todo-controller");

todoRouter.post("/todos", TodoController.createTodo);
todoRouter.get("/todos", TodoController.getTodos);
todoRouter.get("/todos/:id", TodoController.getTodoById);
todoRouter.put("/todos/:id", TodoController.updateTodoById);
todoRouter.delete("/todos/:id", TodoController.deleteTodoById);

module.exports = { todoRouter };
