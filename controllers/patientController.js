const Patient = require('../models/patient');
const JSONStream = require('JSONStream');
const es = require('event-stream');

let getStream = function(request) {
	let parser = JSONStream.parse('*');
	return request.pipe(parser);
}

exports.addPatientInfo = (req, res) => {
	getStream(req)
		.pipe(es.mapSync(function (data) {
			console.log('adding patients');
			Patient.addPatientInfo(data.Gender, data.HeightCm, data.WeightKg, (err) => {
				if (err) {
					res.status(400).json({
						error: err
					})
				}
			});
		}));
	res.json({ message: 'inserted successfully' });
}