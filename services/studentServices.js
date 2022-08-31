const studentModel = require('../lib/mongoModels/studentModel');

class StudentServices{

    constructor(){}

    async create(body){
        const newBody = {
            ...body,
            role: 'student' 
        }
        const element = new studentModel(newBody);
        const newElement = await element.save();
        return newElement;
    }

}

module.exports = StudentServices;