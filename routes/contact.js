const express = require('express');

const authenticate = require('../middlewares/authenticate');
const contactCtrl = require('../controllers/contact');

const router = express.Router();

router.get('/', 
  contactCtrl.list,
);

router.get('/:id', 
  contactCtrl.show,
);

router.post('/',
  authenticate,
  express.json(),
  contactCtrl.add
);

router.delete('/:id', 
  authenticate,
  contactCtrl.delete,
);

router.put('/:id', 
  authenticate,
  express.json(),
  contactCtrl.update,
);

module.exports = router;
