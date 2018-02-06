const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const api = require('./api');

const app = express();
const { PORT, NODE_ENV, API_ONLY } = process.env;

if (!PORT) {
    throw Error('PORT is not set');
}

if (!NODE_ENV) {
    throw Error('NODE_ENV is not set');
}

app.set('port', PORT);

if (NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const config = require('../../webpack/webpack.config');
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const webpackDevMiddleware = require('webpack-dev-middleware');
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    const webpack = require('webpack');

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        headers: { 'X-Served-By': 'Webpack' },
        hot: true,
        filename: 'js/app.js',
        publicPath: '/',
        stats: {
            colors: true
        },
        historyApiFallback: true
    }));
} else if (!API_ONLY) {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    let rawBody = '';

    req.on('data', (chunk) => {
        rawBody += chunk;
    });

    req.on('end', () => {
        if (rawBody) {
            req.rawBody = rawBody; // eslint-disable-line no-param-reassign
            req.jsonBody = JSON.parse(rawBody); // eslint-disable-line no-param-reassign
        }

        next();
    });
});

app.use('/api', api);

app.listen(app.get('port'));
