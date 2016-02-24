# babel-plugin-transform-es2015-modules-simple-commonjs [![npm version](https://badge.fury.io/js/babel-plugin-transform-es2015-modules-simple-commonjs.svg)](https://badge.fury.io/js/babel-plugin-transform-es2015-modules-simple-commonjs)

Limited CommonJS transformer for ECMAScript 2015 modules.

Converts this code:
```js
import x from '/path/to/x';
import y from '/path/to/y';
doSomething();
export default x + y;
```

Into this one:
```js
var x = require('/path/to/x');
var y = require('/path/to/y');
doSomething();
module.exports = x + y;
```

Instead of this one (generated with ``babel-plugin-transform-es2015-modules-commonjs``):
```js
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _x = require('/path/to/x');

var _x2 = _interopRequireDefault(_x);

var _y = require('/path/to/y');

var _y2 = _interopRequireDefault(_y);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

doSomething();
exports.default = _x2.default + _y2.default;
```

Other features (like ``import x as y from 'X'`` or ``import * from 'X'`` etc) aren't supported. Just ``import VARIABLE from 'PATH'`` and ``import 'PATH'``.


## Installation

```sh
$ npm install --save-dev babel-plugin-transform-es2015-modules-simple-commonjs
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-es2015-modules-simple-commonjs"]
}
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['transform-es2015-modules-simple-commonjs']
});
```

[The same thing for AMD](https://github.com/finom/babel-plugin-transform-es2015-modules-simple-amd).

Thanks to [RReverser](https://github.com/RReverser/babel-plugin-hello-world).
