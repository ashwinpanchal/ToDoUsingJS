const { TodoService } = require("../service/todo-service");

const todoService = new TodoService();

const createTodo = async (req, res) => {
  try {
    const data = req.body;
    const todo = await todoService.createTodo(data);
    return res.status(201).json({
      data: todo,
      success: true,
      message: "Todo created successfully",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "",
      error: { error },
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    return res.status(200).json({
      data: todos,
      success: true,
      message: "Todos fetched successfully",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "",
      error: { error },
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoService.getTodoById(id);
    return res.status(200).json({
      data: todo,
      success: true,
      message: "Todo fetched successfully",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "",
      error: { error },
    });
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoService.deleteTodoById(id);
    return res.status(200).json({
      data: todo,
      success: true,
      message: "Todo deleted successfully",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "",
      error: { error },
    });
  }
};

const updateTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedTodo = await todoService.updateTodoById(id, data);
    return res.status(200).json({
      data: updatedTodo,
      success: true,
      message: "Todo updated successfully",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      success: false,
      message: "",
      error: { error },
    });
  }
};

module.exports = {
  TodoController: {
    createTodo,
    getTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById,
  },
};
