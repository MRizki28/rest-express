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
}

module.exports = MahasiswaRepositories;
