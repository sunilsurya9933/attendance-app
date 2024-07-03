const express = require('express');
const router = new express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/attendance/date/:date', attendanceController.getAttendanceByDate);
router.get('/attendance/student/:studentId', attendanceController.getAttendanceByStudentId);
router.post('/attendance', attendanceController.createAttendance);
router.patch('/attendance', attendanceController.updateAttendance);
router.delete('/attendance', attendanceController.deleteAttendance);

module.exports = router;
