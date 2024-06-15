const { TodoRepository } = require("../repository/todo-repository");

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async createTodo(data) {
    try {
      const todo = await this.todoRepository.create(data);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at service layer");
      throw { error };
    }
  }

  async getAllTodos() {
    try {
      const todos = await this.todoRepository.getAll();
      return todos;
    } catch (error) {
      console.log("Someting went wrong at service layer");
      throw { error };
    }
  }

  async getTodoById(id) {
    try {
      const todo = await this.todoRepository.getById(id);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at service layer");
      throw { error };
    }
  }

  async deleteTodoById(id) {
    try {
      const todo = await this.todoRepository.delete(id);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at service layer");
      throw { error };
    }
  }

  async updateTodoById(id, data) {
    try {
      const updatedTodo = await this.todoRepository.update(id, data);
      return updatedTodo;
    } catch (error) {
      console.log("Someting went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = { TodoService };
