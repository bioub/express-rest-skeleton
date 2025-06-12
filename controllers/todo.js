import * as Todo from '../models/todo.js';

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function list(req, res, next) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function show(req, res, next) {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function add(req, res, next) {
  try {
    const todo = await Todo.create(req.body);
    res.statusCode = 201;
    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function deleteTodo(req, res, next) {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function update(req, res, next) {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json(todo);
  }
  catch (err) {
    next(err);
  }
};
