const notesModels = require('../models/notesModels');

const getAllNotes = async (req, res) => {
  const { id } = req.params;
  const notes = await notesModels.getAllNotes(id);
  return res.status(200).json(notes);
};

const createNote = async (req, res) => {
  const { title, description, user_id } = req.body;

  const createdNote = await notesModels.createNote(title, description, user_id);

  return res.status(201).json(createdNote);
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await notesModels.updateNote(id, title, description);

  return res.status(204).json();
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  await notesModels.deleteNote(id);

  return res.status(204).json();
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};