const userModels = require('../models/userModels');

const createUser = async ({ email, password, token }) => {
  try {
    const users = await userModels.getAll();
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      throw { status: 409, message: 'Email already registered' };
    }
    const user = await userModels.createUser({ email, password, token });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
};