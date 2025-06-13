import express from 'express';

import authenticate from '../middlewares/authenticate.js';
import * as todoCtrl from '../controllers/todo.js';

const router = express.Router();

// prettier-ignore
router.get('/',
  todoCtrl.listTodos,
);

// prettier-ignore
router.get('/:id',
  todoCtrl.showTodo,
);

// prettier-ignore
router.post('/',
  authenticate,
  express.json(),
  todoCtrl.addTodo,
);

// prettier-ignore
router.delete('/:id',
  authenticate,
  todoCtrl.deleteTodo,
);

// prettier-ignore
router.put('/:id',
  authenticate,
  express.json(),
  todoCtrl.replaceTodo,
);

// prettier-ignore
router.patch('/:id',
  authenticate,
  express.json(),
  todoCtrl.updateTodo,
);

export default router;
