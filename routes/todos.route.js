const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.post('/', todosController.createTodo);
router.get('/', todosController.getAllTodos);
router.get('/:id', todosController.getTodoById);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;