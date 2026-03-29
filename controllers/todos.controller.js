// controllers/todos.controller.js
const db = require('../fake-db');
const AppError = require('../errors/AppError');

const createTodo = (req, res, next) => {
    const { title } = req.body;
    
    if (!title) {
        return next(new AppError('Title is required', 400));
    }

    const newTodo = {
        id: db.nextId++,
        title: title,
        isCompleted: false
    };

    db.todos.push(newTodo);
    res.status(201).json(newTodo);
};

const getAllTodos = (req, res, next) => {
    const { search } = req.query;
    let result = db.todos;

    if (search) {
        result = db.todos.filter(todo => 
            todo.title.toLowerCase().includes(search.toLowerCase())
        );
    }
    res.json(result);
};

const getTodoById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const todo = db.todos.find(t => t.id === id);

    if (!todo) {
        return next(new AppError('Todo not found', 404));
    }
    res.json(todo);
};

const updateTodo = (req, res, next) => {
    const id = parseInt(req.params.id);
    const todo = db.todos.find(t => t.id === id);

    if (!todo) {
        return next(new AppError('Todo not found', 404));
    }

    const { title, isCompleted } = req.body;
    if (title !== undefined) todo.title = title;
    if (isCompleted !== undefined) todo.isCompleted = isCompleted;

    res.json(todo);
};

const deleteTodo = (req, res, next) => {
    const id = parseInt(req.params.id);
    const index = db.todos.findIndex(t => t.id === id);

    if (index === -1) {
        return next(new AppError('Todo not found', 404));
    }

    db.todos.splice(index, 1);
    res.status(200).json({ message: 'Todo deleted successfully' });
};

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};