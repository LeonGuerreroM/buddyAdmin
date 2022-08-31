const Joi = require('@hapi/joi');

const studentNumber = Joi.string().length(10);
const name = Joi.string().max(80);
const email = Joi.string().email();

const createStudentSchema = Joi.object({
    studentNumber: studentNumber.required(),
    name: name.required(),
    email: email.required()
});

module.exports = { createStudentSchema };