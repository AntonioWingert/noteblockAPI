const { Router } = require('express');
const userController = require('../controllers/userController');
const userValidators = require('../middlewares/userValidators');

const router = Router();

router.get('/user', userController.getAll);

router.post('/user',
  userValidators.tokenValidator,
  userValidators.emailValidator, 
  userValidators.passwordValidator, 
  userController.createUser
);

router.put('/user/:id', 
  userValidators.emailValidator, 
  userValidators.passwordValidator, 
  userController.updateUser
);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;