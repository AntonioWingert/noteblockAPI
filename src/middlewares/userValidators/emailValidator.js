const validEmail = (email) => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email || email === '' || email === null) {
      throw { status: 401, message: 'Email is required' };
    }
    if (typeof email !== 'string') {
      throw { status: 401, message: 'Invalid Email' };
    }
    if (!validEmail(email)) {
      throw { status: 401, message: 'Please insert one valid email: mail@mail.com' };
    }

  } catch (error) {
    next(error);
  }

  next();
};

module.exports = emailValidator;