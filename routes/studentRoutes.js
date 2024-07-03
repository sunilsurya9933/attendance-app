const express = require('express');
const router = new express.Router();
const studentController = require('../controllers/studentController');

router.post('/students',studentController.createStudent);
router.get('/students',studentController.getAllStudents);

router.get('/students/:id',studentController.getStudentById);
router.delete('/students/:id',studentController.deleteStudent);
router.patch('/students/:id', studentController.updateStudent);

module.exports = router;
