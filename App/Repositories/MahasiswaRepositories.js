const Joi = require("joi");
const { mahasiswaModel } = require("../../models");
const HttpResponseTraits = require("../Traits/HttpResponseTraits");

class MahasiswaRepositories {
    async getAllData() {
        const data = await mahasiswaModel.findAll();
        if (!data || data.length === 0) {
            return HttpResponseTraits.dataNotFound();
        } else {
            return HttpResponseTraits.success(data);
        }
    }

    async createData(request) {
        const validation = Joi.object({
            name: Joi.required().messages({
                'any.required': ' Nama wajib diisi !'
            }),
        });

        const { error } = validation.validate(request.body);

        if (error) {
            const errors = [error.message];
            return HttpResponseTraits.checkValidation(errors)
        }

        try {
            const { name } = request.body;
            const data = await mahasiswaModel.create({
                name,
            });

            return HttpResponseTraits.success(data);
        } catch (error) {
            console.log(error);
        };

    }
}

module.exports = MahasiswaRepositories;
