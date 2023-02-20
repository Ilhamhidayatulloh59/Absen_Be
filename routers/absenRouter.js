const router = require('express').Router();
const { absenController } = require('../controllers');
const {verifyToken} = require('../middleware/auth')

router.post('/api/absen', absenController.addAbsen);

module.exports = router;
