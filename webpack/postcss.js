const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const postcssNested = require('postcss-nested');
const postcssCssnext = require('postcss-cssnext');
const postcssCalc = require('postcss-calc');

module.exports = webpack => [
    postcssImport({ addDependencyTo: webpack }),
    postcssUrl({
        url: 'inline',
        from: 'frontend/pcss/style.pcss'
    }),
    postcssNested(),
    postcssCssnext(),
    postcssCalc()
];
