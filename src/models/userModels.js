const conn = require('./connection');

const getAll = async () => {
  const [users] = await conn.execute(
    'SELECT * FROM users',
  );
  return users;
};

const createUser = async (body) => {
  const { email, password, token } = body;
  const [user] = await conn.execute(
    'INSERT INTO users (email, password, token) VALUES (?, ?, ?)',
    [email, password, token],
  );
  return {  insertId: user.insertId };
};

const updateUser = async (id, body) => {
  const { email, password } = body;
  await conn.execute(
    'UPDATE users SET email = ?, password = ? WHERE id = ?',
    [email, password, id],
  );
  return { id };
};

const deleteUser = async (id) => {
  await conn.execute(
    'DELETE FROM users WHERE id = ?',
    [id],
  );
  return { id };
};

module.exports = {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};