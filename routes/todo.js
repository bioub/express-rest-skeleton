import express from 'express';

import authenticate from '../middlewares/authenticate.js';
import * as todoCtrl from '../controllers/todo.js';

const router = express.Router();

// prettier-ignore
router.get('/',
  todoCtrl.list,
);

// prettier-ignore
router.get('/:id',
  todoCtrl.show,
);

// prettier-ignore
router.post('/',
  authenticate,
  express.json(),
  todoCtrl.add
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
  todoCtrl.update,
);

export default router;
