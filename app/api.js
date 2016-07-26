import { Router } from 'express';
import { Validator } from 'jsonschema';
import AppState from './app-state-schema';
import AWS from 'aws-sdk';
import md5 from 'md5';

const validator = new Validator();
const { AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;
const s3 = new AWS.S3();
const router = Router();

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
});

router.post('/save', ({ jsonBody, rawBody }, res) => {
    const validation = validator.validate(jsonBody, AppState);
    if(validation.errors.length) {
        res.json(400, {
            error: validation.errors.join('; ')
        });
    } else {
        const key = md5(rawBody);
        const params = {
            Bucket: 'jsonlintcom',
            Key: `${key}.json`,
            Body: rawBody,
            ContentType: 'application/json'
        };

        s3.putObject(params, (error, data) => {
            if (error) {
                res.json(400, { error });
            } else {
                res.json({key, error: null})
            }
        });

    }
});

router.post('/proxy', (req, res) => {
    const { url } = req.jsonBody;
    const request = require('request');
    const { isUri } = require('valid-url');

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
        res.json(400, { error: 'Wrong URL format' });
    }
});

export default router;
