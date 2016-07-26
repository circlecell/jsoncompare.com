import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssNested from 'postcss-nested';
import postcssCssnext from 'postcss-cssnext';
import postcssCalc from 'postcss-calc';

export default webpack => [
    postcssImport({ addDependencyTo: webpack }),
    postcssUrl({
        url: 'inline',
        from: 'frontend/pcss/style.pcss'
    }),
    postcssNested(),
    postcssCssnext(),
    postcssCalc()
];
