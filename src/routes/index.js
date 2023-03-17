const { Router } = require('express');

const userRoutes = require('./userRoutes');
const notesRoutes = require('./notesRoutes');

const router = Router();

router.use(userRoutes);
router.use(notesRoutes);

module.exports = router;