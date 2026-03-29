const express = require('express');
const todosRoute = require('./routes/todos.route');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/todos', todosRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

app.listen(port, () => {
    console.log(`Server is running in MVC pattern on http://localhost:${port}`);
});