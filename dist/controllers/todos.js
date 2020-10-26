"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.updateTodo = function (req, res, next) {
    var todoId = req.params.id;
    var updateText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updateText);
    res.json({ message: 'Updated!', updateTodo: TODOS[todoIndex] });
};
exports.deleteTodo = function (req, res, next) {
    var todoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not fond todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
