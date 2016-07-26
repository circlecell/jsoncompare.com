import api from './api';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import express from 'express';

const app = express();
const { PORT, NODE_ENV, API_ONLY } = process.env;

if(!PORT) {
    throw Error('PORT is not set')
}

app.set('port', PORT);

if(NODE_ENV === 'development') {
    const config = require('../webpack/webpack.config.babel');
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const webpack = require('webpack');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        headers: { "X-Served-By": "Webpack" },
        hot: true,
        filename: 'js/app.js',
        publicPath: '/',
        stats: {
            colors: true,
        },
        historyApiFallback: true,
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));
} else {
    if(!API_ONLY) {
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

    req.on('data', function(chunk) {
        rawBody += chunk;
    });

    req.on('end', function() {
        if(rawBody) {
            req.rawBody = rawBody;
            req.jsonBody = JSON.parse(rawBody);
        }

        next();
    });
});

app.use('/api', api);

app.use((error) => {
    if (error) {
        res.json(400, {
            error: String(error)
        });
    }
});

app.listen(app.get('port'));
