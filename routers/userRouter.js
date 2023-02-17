const router = require('express').Router();
const { userController } = require('../controllers');
const {verifyToken} = require('../middleware/auth')

router.post('/api/user/register', userController.register);
router.post('/api/user/login', userController.login);
router.get('/api/user/keeplogin', verifyToken, userController.keepLogin);

module.exports = router;
