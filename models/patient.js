const sql = require('../db');

let Patient = function(data) {
	this.data = data;
}

Patient.prototype.data = {}

Patient.addPatientInfo = function(gender, heightCm, weightKg, result) {
	let weight = parseInt(weightKg, 10)
	if (isNaN(weight))
		return;
	let height = parseInt(heightCm, 10);
	if (isNaN(height))
		return;
	height /= 100;
	let bmi = weight / (height * height);
	let bmi_category = 'Normal Weight';
	let health_risk = 'Low risk';

	switch (true) {
		case (bmi < 18.4):
			bmi_category = 'Underweight';
			health_risk = 'Malnutrition';
			break;
		case (bmi >= 18.5 && bmi <= 24.9):
			bmi_category = 'Normal Weight';
			health_risk = 'Low risk';
			break;
		case (bmi >= 25 && bmi <= 29.9):
			bmi_category = 'Overweight';
			health_risk = 'Enhanced risk';
			break;
		case (bmi >= 30 && bmi <= 34.9):
			bmi_category = 'Moderately obese';
			health_risk = 'Medium risk';
			break;
		case (bmi >= 35 &&  bmi <= 39.9):
			bmi_category = 'Severely obese';
			health_risk = 'High risk';
			break;
		case (bmi >= 40):
			bmi_category = 'Very severely obese';
			health_risk = 'Very high risk';
			break;
		default:
			bmi_category = 'Invalid category';
			health_risk = 'Invalid risk';
	}

	sql.query('INSERT INTO bmi_data (gender, height, weight, bmi, bmi_category, health_risk) VALUES (?, ?, ?, ?, ?, ?)',
		[gender, heightCm, weight, bmi, bmi_category, health_risk], (err, res) => {
			if (err) {
				console.log(err);
				result(err, null);
			} else {
				result(null, res);
			}
		})
}

module.exports = Patient;