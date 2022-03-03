const express = require("express");
const cors = require('cors');

const { globalErrorHandler } = require('./controllers/error.controller');

// Routes
const { todosRouter } = require("./routes/todos.router");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('*', cors());

app.use(globalErrorHandler);

// Endpoints
app.use("/api/v1/cats", todosRouter);

module.exports = { app };
