const sinon = require('sinon');
const request = require('request');
const should = require('should');
const mocha = require('mocha');

const base = 'http://localhost:3000';

const patients = require('./testFiles/patients');

beforeEach(() => {
	this.post = sinon.stub(request, 'post');
});

afterEach(() => {
	request.post.restore();
});

describe('POST /api/patients/patients_bulk', () => {
	it('should return the patient data that was added', (done) => {
		const options = {
			body: {
				Gender: 'Male',
				HeightCm: 171,
				WeightKg: 96
			},
			json: true,
			url: `${base}/api/patients/patiens_bulk`
		};
		const obj = patients.add.success;
		this.post.yields(null, obj.res, JSON.stringify(obj.body));
		request.post(options, (err, res, body) => {
			res.statusCode.should.equal(201);
			done();
		})
	})
})