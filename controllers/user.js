const User = require('../models/user');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.login = async (req, res, next) => {
  try {
    const token = await User.login(req.body);

    if (!token) {
      res.statusCode = 400;
      return res.json({
        msg: 'Wrong username/password',
      });
    }

    res.json({token});
  }
  catch (err) {
    next(err);
  }
};
