const { Router } = require('express');
const notesController = require('../controllers/notesController');

const router = Router();

router.get('/notes/:id', notesController.getAllNotes);

router.post('/notes', notesController.createNote);

router.put('/notes/:id', notesController.updateNote);

router.delete('/notes/:id', notesController.deleteNote);

module.exports = router;