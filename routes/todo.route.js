const { getAllTodos, addTodos, updateTodos, deleteTodos } = require("../controller/todo.controller")

const router = require("express").Router()

router
    .get("/", getAllTodos)
    .post("/", addTodos)
    .put("/:id", updateTodos)
    .delete("/:id", deleteTodos)

module.exports = router
