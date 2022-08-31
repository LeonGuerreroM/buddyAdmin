const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    studentNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const studentModel = model('student', studentSchema);

module.exports = studentModel;