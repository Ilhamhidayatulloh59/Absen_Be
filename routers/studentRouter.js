const router = require('express').Router();
const { studentController } = require('../controllers');

router.get('/api/students', studentController.students);
router.get('/api/student', studentController.student);

module.exports = router;
