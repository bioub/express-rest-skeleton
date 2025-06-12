import express from 'express';
import * as userCtrl from '../controllers/user.js';

const router = express.Router();

// prettier-ignore
router.post('/login',
  express.json(),
  userCtrl.login
);

export default router;
