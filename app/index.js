import api from './api';
import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';

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
    const config = require('../webpack/webpack.config.babel');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    //const webpackHotMiddleware = require('webpack-hot-middleware');
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

    /*app.use(webpackHotMiddleware(compiler, {
        log: console.log, // eslint-disable-line no-console
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));*/
} else {
    if (!API_ONLY) {
        app.use(
            express.static(
                path.resolve(__dirname, '..', 'public')
            )
        );
    }
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    let rawBody = '';

    req.on('data', chunk => {
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
