# PostCSS Clearfix
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS][PostCSS] plugin that adds `fix` and `fix-legacy` attributes to the `clear` property, for self-clearing of children.

Part of [Rucksack - CSS Superpowers](http://simplaio.github.io/rucksack).

```css
.foo {
  clear: fix; /* IE8+ */
}

.bar {
  clear: fix-legacy; /* IE6+ */
}
```

```css
.foo:after{
  content: '';
  display: table;
  clear: both;
}

.bar:before,
.bar:after {
  content: '';
  display: table;
}
.bar:after {
  clear: both;
}
.bar {
  zoom: 1;
}
```

--

### Usage

```js
postcss([ require('postcss-clearfix') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

--

### License

MIT © [Sean King](https://twitter.com/seaneking)

[npm-image]: https://badge.fury.io/js/postcss-clearfix.svg
[npm-url]: https://npmjs.org/package/postcss-clearfix
[travis-image]: https://travis-ci.org/seaneking/postcss-clearfix.svg?branch=master
[travis-url]: https://travis-ci.org/seaneking/postcss-clearfix
[daviddm-image]: https://david-dm.org/seaneking/postcss-clearfix.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seaneking/postcss-clearfix
[PostCSS]: https://github.com/postcss/postcss
