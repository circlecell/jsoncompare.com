const Validator = require('jsonschema').Validator,
	validator = new Validator(),
	AppState = require('../schema/app-state'),
	AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || "AKIAJYCANFVYHKUIE5TQ",
	AWS_SECRET_KEY = process.env.AWS_SECRET_KEY || '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',
	AWS = require('aws-sdk'),
	md5 = require('md5');

AWS.config.update({
	accessKeyId: AWS_ACCESS_KEY,
	secretAccessKey: AWS_SECRET_KEY
});

const s3 = new AWS.S3();

module.exports = app => {
	app.post('/save', (req, res) => {
		const validation = validator.validate(req.jsonBody, AppState);
		if(validation.errors.length) {
			res.json(400, {
				error: validation.errors.join('; ')
			});
		} else {
			const key = md5(req.rawBody),
				params = {
					Bucket: 'jsonlintcom',
					Key: `${key}.json`,
					Body: req.rawBody,
					ContentType: 'application/json'
				};

			s3.putObject(params, function(error, data) {

				if (error) {
					res.json(400, {error});
				} else {
					res.json({key, error: null})
				}
			});

		}
	});

	app.post('/proxy', (req, res) => {
		const {url} = req.jsonBody;
		const request = require('request');
		const {isUri} = require('valid-url');

		if(isUri(url)) {
			request(url, (error, response, body) => {
				if(error) {
					res.json(400, {error: `Error ${error.code || 'unknown'}`});
				} else if(response.statusCode === 200) {
					res.json({body, error: null})
				} else {
					res.json({error: `Error ${response.statusCode}`})
				}
			});
		} else {
			res.json(400, {error: 'Wrong URL format'});
		}
	});
};
