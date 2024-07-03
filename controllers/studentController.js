const Student = require('../models/student');

exports.createStudent = async (req,res) => {
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    }catch(error){
        res.status(400).send(error);
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).send();
        }
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.updateStudent = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'email', 'gender'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).send();
        }

        updates.forEach(update => student[update] = req.body[update]);
        await student.save();

        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};