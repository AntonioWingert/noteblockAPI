const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/user', userController.getAll);

router.post('/user', userController.createUser);

router.put('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;