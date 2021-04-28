const express = require('express');
const { addPatientInfo } = require('../controllers/patientController');
const router = express.Router();

router.post('/patients_bulk', addPatientInfo);

module.exports = router;