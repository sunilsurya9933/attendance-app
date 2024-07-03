const Attendance = require('../models/attendance');

exports.getAttendanceByDate = async (req, res) => {
    try {
        const attendance = await Attendance.find({ date: req.params.date });
        res.send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAttendanceByStudentId = async (req, res) => {
    try {
        const attendance = await Attendance.find({ student: req.params.studentId });
        res.send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateAttendance = async (req, res) => {
    const { studentId, date } = req.query;
    try {
        const attendance = await Attendance.findOneAndUpdate(
            { student: studentId, date: date },
            req.body,
            { new: true, runValidators: true }
        );

        if (!attendance) {
            return res.status(404).send();
        }

        res.send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteAttendance = async (req, res) => {
    const { studentId, date } = req.query;
    try {
        const attendance = await Attendance.findOneAndDelete({ student: studentId, date: date });

        if (!attendance) {
            return res.status(404).send();
        }

        res.send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};
