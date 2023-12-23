const MahasiswaRepositories = require("../../Repositories/MahasiswaRepositories");

class MahasiswaController {
    constructor() {
        this.mahasiswaRepositories = new MahasiswaRepositories();
    }

    async getAllData(request, response) {
        const data = await this.mahasiswaRepositories.getAllData();
        response.json(data);
    }

    async createData(request, response) {
        const data = await this.mahasiswaRepositories.createData(request)
        response.json(data);
    }
}

module.exports = MahasiswaController;
