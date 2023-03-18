const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  try {
    if (!password || password === '' || password === null) {
      throw { status: 401, message: 'Password is required' };
    }
    if (password.length < 6) {
      throw { status: 401, message: 'Password must be at least 6 characters' };
    }

  } catch (error) {
    next(error);
  }

  next();
};

module.exports = passwordValidator;