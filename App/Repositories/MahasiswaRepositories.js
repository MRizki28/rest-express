const { response } = require("../../app");
const mahasiswaModel = require("../../models/mahasiswaModel");
const MahasiswaInterfaces = require("../Interfaces/MahasiswaInterfaces");

class MahasiswaRepositories extends MahasiswaInterfaces {
    async getAllData() {
        const data = await mahasiswaModel.findAll();
        return response.json({
            code: 200,
            message: 'Success',
            data: data
        });
    }

    async createData() {

    }
}