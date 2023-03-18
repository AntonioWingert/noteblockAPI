const userModels = require('../models/userModels');
const userServices = require('../services/userServices');

const getAll = async (_req, res) => {
  const users = await userModels.getAll();
  return res.status(200).json(users);
};

const createUser = async (req, res, next) => {
  const { email, password, token } = req.body;
  const user = await userServices.createUser({ email, password, token });
  if (user.status) return next(user);
  return res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  await userModels.updateUser(id, { email, password });
  return res.status(204).json();
};

const deleteUser = async (req, res) => {
  const { id } = req.params;image.png
  await userModels.deleteUser(id);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};