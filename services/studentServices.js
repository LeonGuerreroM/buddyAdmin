const studentModel = require('../lib/mongoModels/studentModel');

class StudentServices{

    constructor(){}

    async create(body){
        const element = new studentModel(body);
        const newElement = await element.save();
        return newElement;
    }

}

module.exports = StudentServices;