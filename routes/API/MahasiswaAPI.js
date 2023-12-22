// routes/api/mahasiswa.js
const express = require('express');
const router = express.Router();
const MahasiswaController = require('../../App/Controllers/CMS/MahasiswaController');

const mahasiswaController = new MahasiswaController();

router.get('/', (req, res) => {
    mahasiswaController.getAllData(req,res);
});

module.exports = router;
