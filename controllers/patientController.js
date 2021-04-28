const JSONStream = require('JSONStream');
const es = require('event-stream');
const Patient = require('../models/patient');

let getStream = function(request) {
	let parser = JSONStream.parse('*');
	return request.pipe(parser);
}

exports.addPatientInfo = (req, res) => {
	getStream(req)
		.pipe(es.mapSync(function (data) {
			Patient.addPatientInfo(data.Gender, data.HeightCm, data.WeightKg, (err) => {
				if (err) {
					res.status(400).json({
						error: err
					})
				}
			});
		}));
	res.status(201).json({ message: 'inserted successfully' });
}