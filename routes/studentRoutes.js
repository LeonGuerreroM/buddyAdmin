const express = require('express');
const router = express.Router();
const success = require('../utils/success');


const Service = require('../services/studentServices');
const service = new Service();

const validationHandler = require('../utils/middlewares/validationHandler');
const { createStudentSchema } = require('../utils/schemas/studentSchema');

router.post('/register',
    validationHandler(createStudentSchema, 'body'),
    async (req, res, next) => {
        try{
            const body = req.body;
            const newStudent = await service.create(body);
            success(res, 201, 'newStudent', newStudent, 'student created');
        }catch(error){
            next(error);
        }
    }
);

module.exports = router;