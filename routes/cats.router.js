const express = require("express");

const { getAllCats } = require("../controllers/cats.controller");

const router = express.Router();

// Gets
router.get("/", getAllCats);

module.exports = { catsRouter: router };
