const conn = require('./connection');

const getAllNotes = async (id) => {
  const [notes] = await conn.execute(
    'SELECT * FROM notes WHERE user_id = ?', [id],
  );
  return notes;
};

const createNote = async (title, description, user_id) => {
  const [createdNote] = await conn.execute(
    'INSERT INTO notes (title, description, user_id) VALUES (?, ?, ?)', 
    [title, description, user_id],
  );

  return { id: createdNote.insertId };
};

const updateNote = async (id, title, description) => {
  const [updatedNote] = await conn.execute(
    'UPDATE notes SET title = ?, description = ? WHERE id = ?',
    [title, description, id],
  );

  return updatedNote;
};

const deleteNote = async (id) => {
  await conn.execute(
    'DELETE FROM notes WHERE id = ?', [id],
  );

  return { id };
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};