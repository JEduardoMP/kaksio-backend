const express = require("express");

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

const router = express.Router();

// Gets
router.get("/", getAllTodos);
// Posts
router.post("/", createTodo);
// Patchs
router.patch("/:id", updateTodo);
// Deletes
router.delete("/:id", deleteTodo);

module.exports = { todosRouter: router };
