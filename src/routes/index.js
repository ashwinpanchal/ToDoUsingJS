const express = require("express");

const { todoRouter } = require("./v1/todo-router");

const appRouter = express.Router();

appRouter.use("/v1", todoRouter);

module.exports = { appRouter };
