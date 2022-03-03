const express = require("express");
const cors = require('cors');

const { globalErrorHandler } = require('./controllers/error.controller');

// Routes
const { catsRouter } = require("./routes/cats.router");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('*', cors());

// Endpoints
app.use("/api/v1/cats", catsRouter);

app.use(globalErrorHandler);

module.exports = { app };
