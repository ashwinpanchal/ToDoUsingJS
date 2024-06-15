const { Todo } = require("../models/Todo");

class TodoRepository {
  async create(data) {
    try {
      const todo = Todo.create(data);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at repository layer");
      throw { error };
    }
  }

  async getAll() {
    try {
      const todos = await Todo.find();
      return todos;
    } catch (error) {
      console.log("Someting went wrong at repository layer");
      throw { error };
    }
  }

  async getById(id) {
    try {
      const todo = await Todo.findById(id);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at repository layer");
      throw { error };
    }
  }

  async delete(id) {
    try {
      const todo = await Todo.findByIdAndDelete(id);
      return todo;
    } catch (error) {
      console.log("Someting went wrong at repository layer");
      throw { error };
    }
  }

  async update(id, data) {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(id, data, {
        new: true,
      });

      return updatedTodo;
    } catch (error) {
      console.log("Someting went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = { TodoRepository };
