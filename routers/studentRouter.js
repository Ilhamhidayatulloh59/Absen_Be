const router = require('express').Router();
const { studentController } = require('../controllers');

router.get('/api/students', studentController.students);
router.get('/api/student', studentController.student);
router.get('/api/student/:NIS', studentController.studentByNIS);

module.exports = router;
