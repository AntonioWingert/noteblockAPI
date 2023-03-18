const tokenValidator = (req, _res, next) => {
  const { token } = req.body;

  try {
    if (!token) {
      throw { status: 401, message: 'Token is required' };
    }
    if (typeof token !== 'string') {
      throw { status: 401, message: 'Invalid Token' };
    }
    if (token.length !== 8) {
      throw { status: 401, message: 'Invalid Token' };
    }

  } catch (error) {
    next(error);
  }

  next();
};

module.exports = tokenValidator;