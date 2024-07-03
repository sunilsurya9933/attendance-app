const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    status: { type: String, enum: ['present', 'absent'], required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true }
});

const Attendance = mongoose.model('attendance', attendanceSchema);
module.exports = Attendance;
