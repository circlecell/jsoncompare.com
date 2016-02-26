Router-like plugin for Matreshka
============

[![Coverage Status](https://coveralls.io/repos/github/matreshkajs/matreshka-router/badge.svg?branch=master)](https://coveralls.io/github/matreshkajs/matreshka-router?branch=master) [![Build Status](https://travis-ci.org/matreshkajs/matreshka-router.svg?branch=master)](https://travis-ci.org/matreshkajs/matreshka-router) [![npm version](https://badge.fury.io/js/matreshka-router.svg)](https://badge.fury.io/js/matreshka-router)

[Demo](http://output.jsbin.com/pigihe/10/#!/foo/bar/baz/)

# tl;dr

The plugin turns on two-way data binding between properties and parts of ``location.hash`` hash.

```js
this.initRouter('/a/b/c/');
this.a = 'foo';
this.b = 'bar';
this.c = 'baz';

// makes location.hash to be #!/foo/bar/baz/
```

If you need to use History API instead of hash, pass ``"history"`` as second argument.


```js
this.initRouter('/a/b/c/', 'history');
```

Installing:
```
npm install --save matreshka-router
```
-------



How does "traditional" routing works? A developer defines a rule (route) and defines a function which will be called when current path fits given rule.

```js
route("books/:id", id => {
	// do something
});
```



The principle of the plugin is the following. You define which part of an URL (both [hash](https://developer.mozilla.org/ru/docs/Web/API/Window/location), and [HTML5 History](https://developer.mozilla.org/ru/docs/Web/API/History_API) are supported) need to be synchronized with given property.

**Disclamer:** this way of routing may not be what you're looking for. If you need full-featured router you can use any library you want (eg. [Director](https://github.com/flatiron/director)).

For example you need to synchronize ``"x"`` with the first part of ``location.hash`` and ``"y"`` with the second.

```js
this.initRouter("/x/y/");
```

Now  when you type...

```js
this.x = 'foo';
this.y = 'bar';
```

...``location.hash`` is automatically replaced by ``#!/foo/bar/``


And vice versa. When the URL is changed manually or via back-forward buttons, the properties will be changed automatically.

```js
location.hash = '#!/baz/qux/';

console.log(this.x, this.y); // ‘baz’, ‘qux’
```

## Property change listening

As usually you can listen property changes with [Matreshka#on](http://matreshka.io/#!Matreshka-on) method.

```js
this.on('change:x', handler);
```

## Asterisk

You can pass a string which contain asterisks to ``initRouter`` if you don't need to synchronize some part of the path.

```js
this.initRouter('/x/*/y');
```

If the hash looks like ``#!/foo/bar/baz/``, then ``this.x = "foo"`` and ``this.y = "baz"``.

This feature is useful in cases when classes control different parts of the path.


**class1.js**

```js
this.initRouter('/x/*/');
```

**class2.js**

```js
this.initRouter('/*/y/');
```

## Two things to remember

**1.** If a property has truthy value then URL will be changed immediately after ``initRouter`` call.


```js
this.x = 'foo';

this.initRouter('/x/y/');
```

**2.** If a property gets falsy value then all next listed values will get ``null`` as new value.

```js
this.initRouter('/x/y/z/u/');

this.y = null; // makes this.z and this.u to be null as well
```

Don't worry about this feature. The idea is to get actual state of URL. It could be weird to get ``"z"`` with value ``"foo"`` in case of non-existing bound part of URL.

## HTML5 History API

The plugin supports  HTML5 History as well. To initialize it you need to pass optional argument ``type`` with ``"history"`` value to the ``initRoute`` (by default ``type`` is ``"hash"``).

```js
this.initRouter('x/y/z/', 'history');
```


## Custom objects support

The ``initRoute`` has static alternative which accepts custom object as the first argument. It works just the same.


```js
var obj = {};
MK.initRouter(obj, '/a/b/c/');

obj.a = 'foo';
obj.b = 'bar';
obj.c = 'baz';
```

## Additional information

### ``Matreshka.Router`` class

The core of Matreshka Router is powered by  ``Matreshka.Router`` class. It accepts only one argument - router type (``"hash"``, ``"history"`` or custom string).

By default, the plugin creates two instances of ``Matreshka.Router`` with types ``hash`` and ``history``. They are contained in ``Matreshka.Router.hash`` and ``Matreshka.Router.history``. The plugin uses lazy initialization so when you just attach the script onto webpage, the plugin does nothing.

For these two types of instances the singletone pattern is used. That means when you're trying to create another instance of ``hash`` routing via ``new Matreshka.Router('hash')``, the ``Matreshka.Router.hash`` will be returned instead of new instance creation. This logic centralizes URL handling, gives positive effect to the performance and doesn't allow to get collisions. Objects which are handled by ``initRouter`` just subscribe to the changes of needed type of router.



Custom instances (non-hash and non-history) of ``Matreshka.Router`` can be created manually in case if you make code outside of the browser environment of you need to generate some URL for further usage. At this case changes of target properties don't affect on ``hash`` and don't call ``pushState``.

### Properties

``Matreshka.Router`` instances has 3 properties.

- ``path`` - contains actual URL, eg ``/foo/bar/baz/``.
- ``hashPath`` - contains actual URL and hashbang as a prefix, eg ``#!/foo/bar/baz/``
- ``parts`` - contains an array of all parts of the path, eg ``[‘foo’, ‘bar’, ‘baz’]``.

All these properties are created using [linkProps](https://matreshka.io/#!Matreshka-linkProps), which means when you change one property, the others are changed automatically.

```js
Matreshka.Router.hash.path = '/yo/man/';
```

By changing these properties you can call needed procedures (update the path, change subscribed objects etc.)

### Methods

- ``subscribe(object, route)`` - subscribes object to changes in properties above.
- ``init()`` - used for lazy initialization in  ``subscribe`` method (no need to call it manually).

```js
var customRouter = new Matreshka.Router(),
	object = {
		a: 'foo',
		b: 'bar'
	};

customRouter.subscribe(object, '/a/b/');

console.log(customRouter.path); // /foo/bar/

```
