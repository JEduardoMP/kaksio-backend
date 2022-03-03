// Array
const todos = [
  { id: 1, task: "front" },
  { id: 2, task: "back" },
  { id: 3, task: "database" },
  { id: 4, task: "postgres" },
  { id: 5, task: "react" },
  { id: 6, task: "node" },
];

// Controllers
exports.getAllTodos = (req, res, next) => {
  res.status(200).json({ status: "success", todos });
};

exports.createTodo = (req, res, next) => {
  const { content } = req.body;

  const lastIndex = todos[todos.length - 1].id;

  const newTodo = {
    id: lastIndex + 1,
    content,
  };

  todos.push(newTodo);
  res.status(201).json({ status: "success", newTodo });
};

exports.updateTodo = (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  const todo = todos.find((todo) => todo.id === +id);
  todo.content = content;

  res.status(200).json({
    status: "success",
    data: { updatedTodo: todo },
  });
};

exports.deleteTodo = (req, res, next) => {
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id === +id);

  todos.splice(index, 1);

  res.status(200).json({ status: "success" });
};
