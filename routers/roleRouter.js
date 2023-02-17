const router = require('express').Router();
const { roleController } = require('../controllers');

router.get('/api/roles', roleController.role);

module.exports = router;
