const express = require('express');

const authenticate = require('../middlewares/authenticate');
const todoCtrl = require('../controllers/todo');

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
  todoCtrl.delete,
);

// prettier-ignore
router.put('/:id',
  authenticate,
  express.json(),
  todoCtrl.update,
);

module.exports = router;
