const express = require('express');
const router = express.Router();
const mahasiswaAPI = require('./API/MahasiswaAPI')

router.use('/api/v1/mahasiswa' , mahasiswaAPI)

module.exports = router;