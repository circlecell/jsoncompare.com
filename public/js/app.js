var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MK, Tabs) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		MK.prototype.appendNode = function (key, selector) {
			var nodes = this.$bound(key),
			    container = this.select(selector),
			    i = 0;
	
			for (; i < nodes.length; i++) {
				container.appendChild(nodes[i]);
			}
		};
	
		module.exports = new (function (_MK$Object) {
			_inherits(App, _MK$Object);
	
			function App() {
				var _this;
	
				_classCallCheck(this, App);
	
				(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this)), _this).setClassFor({
					tabs: Tabs
				}).bindNode('sandbox', 'body');
	
				return _this;
			}
	
			return App;
		}(MK.Object))();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function(__root) {
	/*
		Matreshka v1.7.1 (2016-02-23)
		JavaScript Framework by Andrey Gubanov
		Released under the MIT license
		More info: http://matreshka.io
	*/
	var matreshka_dir_xclass, matreshka_dir_core_var_core, matreshka_dir_core_util_common, matreshka_dir_core_var_map, matreshka_dir_core_bindings_binders, matreshka_dir_core_dom_lib_bquery, matreshka_dir_core_dom_lib_dollar_lib, matreshka_dir_core_dom_lib_used_lib, matreshka_dir_core_initmk, matreshka_dir_core_definespecial, matreshka_dir_core_util_define, matreshka_dir_core_util_linkprops, matreshka_dir_core_util_mediate, matreshka_dir_core_get_set_remove, matreshka_dir_core_bindings_bindnode, matreshka_dir_core_bindings_unbindnode, matreshka_dir_core_bindings_parsebindings, matreshka_dir_core_bindings_getnodes, matreshka_dir_core_var_domevtreg, matreshka_dir_core_events_trigger, matreshka_dir_core_events_on, matreshka_dir_core_events_off, matreshka_dir_core_var_specialevtreg, matreshka_dir_core_events_addlistener, matreshka_dir_core_events_removelistener, matreshka_dir_core_events_delegatelistener, matreshka_dir_core_events_undelegatelistener, matreshka_dir_core_events_domevents, matreshka_dir_core_events_adddomlistener, matreshka_dir_core_events_removedomlistener, matreshka_dir_core_events_once, matreshka_dir_core_events_ondebounce, matreshka_dir_matreshka_magic, matreshka_dir_matreshka_dynamic, matreshka_dir_matreshka_static, matreshka_dir_matreshkaclass, matreshka_dir_matreshka_object_dynamic, matreshka_dir_matreshka_object_iterator, matreshka_dir_core_var_sym_iterator, matreshka_dir_matreshka_objectclass, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate, matreshka_dir_matreshka_array_native_dynamic, matreshka_dir_matreshka_array_native_static, matreshka_dir_matreshka_array_custom_dynamic, matreshka_dir_matreshka_array_iterator, matreshka_dir_matreshka_arrayclass, matreshka_dir_amd_modules_matreshka, matreshka;
	matreshka_dir_xclass = function () {
	  var ie = typeof document != 'undefined' ? document.documentMode : null;
	  /* istanbul ignore if  */
	  if (ie && ie < 9) {
	    throw Error('Internet Explorer ' + ie + ' isn\'t supported');
	  }
	  return function Class(prototype, staticProps) {
	    var Constructor = prototype.constructor !== Object ? prototype.constructor : function EmptyConstructor() {
	      }, Parent = prototype['extends'] = prototype['extends'] || prototype.extend, proto, typeofParent, key, assign = Object.assign || function (target, firstSource) {
	        if (target === undefined || target === null) {
	          throw new TypeError('Cannot convert first argument to object');
	        }
	        var to = Object(target);
	        for (var i = 1; i < arguments.length; i++) {
	          var nextSource = arguments[i];
	          if (nextSource === undefined || nextSource === null) {
	            continue;
	          }
	          var keysArray = Object.keys(Object(nextSource));
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              to[nextKey] = nextSource[nextKey];
	            }
	          }
	        }
	        return to;
	      };
	    proto = Object.create(Parent ? Parent.prototype : null);
	    assign(proto, prototype);
	    if (staticProps && typeof staticProps == 'object') {
	      assign(Constructor, staticProps);
	    }
	    proto.instanceOf = function () {
	      return this instanceof Constructor;
	    };
	    Constructor.prototype = proto;
	    if (this instanceof Class) {
	      return new Constructor();
	    } else {
	      return Constructor;
	    }
	  };
	}();
	matreshka_dir_core_var_core = {};
	matreshka_dir_core_util_common = function (core) {
	  var extend = function (o1, o2) {
	      var i, j;
	      if (o1) {
	        for (i = 1; i < arguments.length; i++) {
	          o2 = arguments[i];
	          if (o2) {
	            for (j in o2) {
	              if (o2.hasOwnProperty(j)) {
	                o1[j] = o2[j];
	              }
	            }
	          }
	        }
	      }
	      return o1;
	    }, util = {
	      extend: extend,
	      trim: function (s) {
	        return s.trim ? s.trim() : s.replace(/^\s+|\s+$/g, '');
	      },
	      randomString: function () {
	        return (new Date().getTime() - new Date(2013, 4, 3).getTime()).toString(36) + Math.floor(Math.random() * 1679616).toString(36);
	      },
	      toArray: function (object, start) {
	        var array = [], l = object.length, i;
	        start = start || 0;
	        for (i = start; i < l; i++) {
	          array[i - start] = object[i];
	        }
	        return array;
	      },
	      debounce: function (f, d, thisArg) {
	        var timeout;
	        if (typeof d !== 'number') {
	          thisArg = d;
	          d = 0;
	        }
	        return function () {
	          var args = arguments, ctx = this;
	          clearTimeout(timeout);
	          timeout = setTimeout(function () {
	            f.apply(thisArg || ctx, args);
	          }, d || 0);
	        };
	      },
	      each: function (o, f, thisArg) {
	        if (!o)
	          return;
	        if (o.isMK && typeof o.each == 'function') {
	          o.each(f, thisArg);
	        } else if ('length' in o) {
	          [].forEach.call(o, f, thisArg);
	        } else {
	          for (var i in o) {
	            if (o.hasOwnProperty(i)) {
	              f.call(thisArg, o[i], i, o);
	            }
	          }
	        }
	        return o;
	      },
	      deepFind: function (obj, path) {
	        var paths = typeof path == 'string' ? path.split('.') : path, current = obj, i;
	        for (i = 0; i < paths.length; ++i) {
	          if (typeof current[paths[i]] == 'undefined') {
	            return undefined;
	          } else {
	            current = current[paths[i]];
	          }
	        }
	        return current;
	      },
	      noop: function () {
	      },
	      orderBy: function (arr, keys, orders) {
	        var defaultOrder = 'asc', newArr, length, i, commonOrder;
	        if ('length' in arr && typeof arr == 'object') {
	          if (!(orders instanceof Array)) {
	            commonOrder = orders || defaultOrder;
	          }
	          length = arr.length;
	          newArr = Array(length);
	          for (i = 0; i < length; i++) {
	            newArr[i] = arr[i];
	          }
	          if (!keys)
	            return newArr;
	          keys = keys instanceof Array ? keys : [keys];
	          return newArr.sort(function (a, b) {
	            var length = keys.length, i, order, key;
	            if (a && b) {
	              for (i = 0; i < length; i++) {
	                key = keys[i];
	                order = (commonOrder || orders[i]) != 'desc' ? -1 : 1;
	                if (a[key] > b[key]) {
	                  return -order;
	                } else if (a[key] < b[key]) {
	                  return order;
	                }
	              }
	            }
	            return 0;
	          });
	        } else {
	          return [];
	        }
	      }
	    };
	  function PseudoMap() {
	  }
	  extend(PseudoMap.prototype, {
	    get: function (obj) {
	      return obj.matreshkaData;
	    },
	    set: function (obj, data) {
	      Object.defineProperty(obj, 'matreshkaData', {
	        value: data,
	        enumerable: false,
	        writable: false,
	        configurable: false
	      });
	    },
	    has: function (obj) {
	      return 'matreshkaData' in obj;
	    }
	  });
	  util.PseudoMap = PseudoMap;
	  extend(core, util);
	  return util;
	}(matreshka_dir_core_var_core);
	matreshka_dir_core_var_map = function (util) {
	  var mkId = 'mk-' + util.randomString();
	  return typeof WeakMap == 'undefined' ? new util.PseudoMap() : new WeakMap();
	}(matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_binders = function (core) {
	  var readFiles = function (files, readAs, callback) {
	      var length = files.length, i = 0, filesArray = core.toArray(files), file;
	      if (readAs) {
	        filesArray.forEach(function (file) {
	          var reader = new FileReader();
	          reader.onloadend = function (evt) {
	            file.readerResult = reader.result;
	            if (++i == length) {
	              callback(filesArray);
	            }
	          };
	          reader[readAs](file);
	        });
	      } else {
	        callback(filesArray);
	      }
	    }, binders;
	  core.binders = binders = {
	    innerHTML: function () {
	      return {
	        on: 'input',
	        getValue: function () {
	          return this.innerHTML;
	        },
	        setValue: function (v) {
	          this.innerHTML = v + '';
	        }
	      };
	    },
	    innerText: function () {
	      return {
	        on: 'input',
	        getValue: function () {
	          return this.textContent;
	        },
	        setValue: function (v) {
	          this.textContent = v + '';
	        }
	      };
	    },
	    className: function (className) {
	      var not = className.indexOf('!') === 0;
	      if (not) {
	        className = className.replace('!', '');
	      }
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this, contains = _this.classList ? _this.classList.contains(className) : hasClass(_this, className);
	          return not ? !contains : !!contains;
	        },
	        setValue: function (v) {
	          var _this = this, add = not ? !v : !!v;
	          _this.classList ? _this.classList[add ? 'add' : 'remove'](className) : add ? addClass(_this, className) : removeClass(_this, className);
	        }
	      };
	      // @IE9
	      // thanks to Iliya Kantor
	      function addClass(o, c) {
	        var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
	        if (re.test(o.className))
	          return;
	        o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	      }
	      function removeClass(o, c) {
	        var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
	        o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	      }
	      function hasClass(o, c) {
	        return new RegExp('(\\s|^)' + c + '(\\s|$)').test(o.className);
	      }
	    },
	    property: function (propertyName) {
	      return {
	        on: null,
	        getValue: function () {
	          return this[propertyName];
	        },
	        setValue: function (v) {
	          // in case when you're trying to set read-only property
	          try {
	            this[propertyName] = v;
	          } catch (e) {
	          }
	        }
	      };
	    },
	    attribute: function (attributeName) {
	      return {
	        on: null,
	        getValue: function () {
	          return this.getAttribute(attributeName);
	        },
	        setValue: function (v) {
	          this.setAttribute(attributeName, v);
	        }
	      };
	    },
	    dataset: function (prop) {
	      // replace namesLikeThis with names-like-this
	      function toDashed(name) {
	        return 'data-' + name.replace(/([A-Z])/g, function (u) {
	          return '-' + u.toLowerCase();
	        });
	      }
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this;
	          return _this.dataset ? _this.dataset[prop] : _this.getAttribute(toDashed(prop));
	        },
	        setValue: function (v) {
	          var _this = this;
	          if (_this.dataset) {
	            _this.dataset[prop] = v;
	          } else {
	            _this.setAttribute(toDashed(prop), v);
	          }
	        }
	      };
	    },
	    textarea: function () {
	      return binders.input('text');
	    },
	    progress: function () {
	      return binders.input();
	    },
	    input: function (type, options) {
	      var on;
	      switch (type) {
	      case 'checkbox':
	        return {
	          on: 'click keyup',
	          getValue: function () {
	            return this.checked;
	          },
	          setValue: function (v) {
	            this.checked = v;
	          }
	        };
	      case 'radio':
	        return {
	          on: 'click keyup',
	          getValue: function () {
	            return this.value;
	          },
	          setValue: function (v) {
	            this.checked = typeof v != 'undefined' && this.value == v;
	          }
	        };
	      case 'submit':
	      case 'button':
	      case 'image':
	      case 'reset':
	        return {};
	      case 'hidden':
	        on = null;
	        break;
	      case 'file':
	        on = 'change';
	        break;
	      /*
	      case 'text':
	      case 'password':
	      case 'date':
	      case 'datetime':
	      case 'datetime-local':
	      case 'month':
	      case 'time':
	      case 'week':
	      case 'range':
	      case 'color':
	      case 'search':
	      case 'email':
	      case 'tel':
	      case 'url':
	                  case 'file':
	      case 'number':  */
	      default:
	        // other future (HTML6+) inputs
	        on = 'input';
	      }
	      return {
	        on: on,
	        getValue: function () {
	          return this.value;
	        },
	        setValue: function (v) {
	          this.value = v;
	        }
	      };
	    },
	    output: function () {
	      return {
	        getValue: function () {
	          var _this = this;
	          return _this.value || _this.textContent;
	        },
	        setValue: function (v) {
	          var _this = this;
	          _this['form' in _this ? 'value' : 'textContent'] = v === null ? '' : v + '';
	        }
	      };
	    },
	    select: function (multiple) {
	      var i;
	      if (multiple) {
	        return {
	          on: 'change',
	          getValue: function () {
	            var i = 0, options = this.options, result = [];
	            for (; options.length > i; i++) {
	              if (options[i].selected) {
	                result.push(options[i].value);
	              }
	            }
	            return result;
	          },
	          setValue: function (v) {
	            v = typeof v == 'string' ? [v] : v;
	            for (i = this.options.length - 1; i >= 0; i--) {
	              this.options[i].selected = ~v.indexOf(this.options[i].value);
	            }
	          }
	        };
	      } else {
	        return {
	          on: 'change',
	          getValue: function () {
	            return this.value;
	          },
	          setValue: function (v) {
	            var _this = this, options;
	            _this.value = v;
	            if (!v) {
	              options = _this.options;
	              for (i = options.length - 1; i >= 0; i--) {
	                if (!options[i].value) {
	                  options[i].selected = true;
	                }
	              }
	            }
	          }
	        };
	      }
	    },
	    display: function (value) {
	      value = typeof value == 'undefined' ? true : value;
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this, v = _this.style.display || (window.getComputedStyle ? getComputedStyle(_this, null).getPropertyValue('display') : _this.currentStyle.display), none = v == 'none';
	          return value ? !none : !!none;
	        },
	        setValue: function (v) {
	          this.style.display = value ? v ? '' : 'none' : v ? 'none' : '';
	        }
	      };
	    },
	    file: function (readAs) {
	      /* istanbul ignore if  */
	      if (typeof FileReader == 'undefined') {
	        throw Error('FileReader is not supported by this browser');
	      }
	      if (readAs) {
	        readAs = 'readAs' + readAs[0].toUpperCase() + readAs.slice(1);
	        if (!FileReader.prototype[readAs]) {
	          throw Error(readAs + ' is not supported by FileReader');
	        }
	      }
	      return {
	        on: function (callback) {
	          var handler = function () {
	            var files = this.files;
	            if (files.length) {
	              readFiles(files, readAs, callback);
	            } else {
	              callback([]);
	            }
	          };
	          this.addEventListener('change', handler);
	        },
	        getValue: function (evt) {
	          var files = evt.domEvent || [];
	          return this.multiple ? files : files[0] || null;
	        }
	      };
	    },
	    style: function (property) {
	      return {
	        getValue: function () {
	          var _this = this;
	          return _this.style[property] || getComputedStyle(_this, null).getPropertyValue(property);
	        },
	        setValue: function (v) {
	          this.style[property] = v;
	        }
	      };
	    }
	  };
	  binders.visibility = binders.display;
	  binders.html = binders.innerHTML;
	  binders.text = binders.innerText;
	  binders.prop = binders.property;
	  binders.attr = binders.attribute;
	  return binders;
	}(matreshka_dir_core_var_core);
	matreshka_dir_core_dom_lib_bquery = function () {
	  /* istanbul ignore if  */
	  if (typeof window == 'undefined') {
	    return;
	  }
	  var s_classList = 'classList', nsReg = /\.(.+)/, allEvents = {}, nodeIndex = 0, fn = [];
	  function $b(s, context) {
	    return new $b.i(s, context);
	  }
	  $b.i = function (s, context) {
	    var result, l, i;
	    if (s) {
	      if (s.nodeType || s == window) {
	        result = [s];
	      } else if (typeof s == 'string') {
	        if (/</.test(s)) {
	          result = $b.parseHTML(s);
	        } else {
	          if (context) {
	            if (context = $b(context)[0]) {
	              result = context.querySelectorAll(s);
	            }
	          } else {
	            result = document.querySelectorAll(s);
	          }
	        }
	      } else if (s instanceof Function) {
	        // typeof nodeList returns "function" in old WebKit
	        if (document.readyState == 'loading') {
	          document.addEventListener('DOMContentLoaded', s);
	        } else {
	          s();
	        }
	      } else {
	        result = s;
	      }
	    }
	    l = result && result.length;
	    if (l) {
	      for (i = 0; i < l; i++) {
	        this.push(result[i]);
	      }
	    }
	  };
	  $b.fn = $b.i.fn = $b.i.prototype = fn;
	  $b.extend = function (obj) {
	    var k = arguments, i, j, l;
	    for (i = 1; i < k.length; i++) {
	      if (l = k[i]) {
	        for (j in l) {
	          obj[j] = l[j];
	        }
	      }
	    }
	    return obj;
	  };
	  $b.extend(fn, {
	    is: function (s) {
	      var node = this[0];
	      return node ? (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, s) : false;
	    },
	    on: function (names, selector, handler) {
	      var _this = this, delegate, name, namespace, node, nodeID, events, event, exist, i, j, k;
	      if (typeof selector == 'function') {
	        handler = selector;
	        selector = null;
	      }
	      if (selector) {
	        delegate = function (evt) {
	          var randomID = 'x' + String(Math.random()).split('.')[1], node = this, is;
	          node.setAttribute(randomID, randomID);
	          is = '[' + randomID + '="' + randomID + '"] ' + selector;
	          if ($b(evt.target).is(is + ',' + is + ' *')) {
	            handler.call(node, evt);
	          }
	          node.removeAttribute(randomID);
	        };  //delegate._callback = handler;
	            //handler = delegate;
	      }
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i].split(nsReg);
	        namespace = name[1];
	        name = name[0];
	        for (j = 0; j < _this.length; j++) {
	          node = _this[j];
	          nodeID = node.b$ = node.b$ || ++nodeIndex, events = allEvents[name + nodeID] = allEvents[name + nodeID] || [], exist = false;
	          for (k = 0; k < events.length; k++) {
	            event = events[k];
	            if (handler == event.handler && (!selector || selector == event.selector)) {
	              exist = true;
	              break;
	            }
	          }
	          if (!exist) {
	            events.push({
	              delegate: delegate,
	              handler: handler,
	              namespace: namespace,
	              selector: selector
	            });
	            node.addEventListener(name, delegate || handler, false);
	          }
	        }
	      }
	      return _this;
	    },
	    off: function (names, selector, handler) {
	      var _this = this, name, namespace, node, events, event, i, j, k;
	      if (typeof selector == 'function') {
	        handler = selector;
	        selector = null;
	      }
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i].split(nsReg);
	        namespace = name[1];
	        name = name[0];
	        for (j = 0; j < _this.length; j++) {
	          node = _this[j];
	          events = allEvents[name + node.b$];
	          if (events) {
	            for (k = 0; k < events.length; k++) {
	              event = events[k];
	              if ((!handler || handler == event.handler || handler == event.delegate) && (!namespace || namespace == event.namespace) && (!selector || selector == event.selector)) {
	                node.removeEventListener(name, event.delegate || event.handler);
	                events.splice(k--, 1);
	              }
	            }
	          } else {
	            if (!namespace && !selector) {
	              node.removeEventListener(name, handler);
	            }
	          }
	        }
	      }
	      return _this;
	    },
	    add: function (s) {
	      var result = $b(this), map = {}, nodeID, node, i;
	      s = $b(s);
	      for (i = 0; i < result.length; i++) {
	        node = result[i];
	        nodeID = node.b$ = node.b$ || ++nodeIndex;
	        map[nodeID] = 1;
	      }
	      for (i = 0; i < s.length; i++) {
	        node = s[i];
	        nodeID = node.b$ = node.b$ || ++nodeIndex;
	        if (!map[nodeID]) {
	          map[nodeID] = 1;
	          result.push(node);
	        }
	      }
	      return result;
	    },
	    not: function (s) {
	      var result = $b(this), index, i;
	      s = $b(s);
	      for (i = 0; i < s.length; i++) {
	        if (~(index = result.indexOf(s[i]))) {
	          result.splice(index, 1);
	        }
	      }
	      return result;
	    },
	    find: function (s) {
	      var result = $b();
	      this.forEach(function (item) {
	        result = result.add($b(s, item));
	      });
	      return result;
	    }
	  });
	  // simple html parser
	  $b.parseHTML = function (html) {
	    var node = document.createElement('div'),
	      // wrapMap is taken from jQuery
	      wrapMap = {
	        option: [
	          1,
	          '<select multiple=\'multiple\'>',
	          '</select>'
	        ],
	        legend: [
	          1,
	          '<fieldset>',
	          '</fieldset>'
	        ],
	        thead: [
	          1,
	          '<table>',
	          '</table>'
	        ],
	        tr: [
	          2,
	          '<table><tbody>',
	          '</tbody></table>'
	        ],
	        td: [
	          3,
	          '<table><tbody><tr>',
	          '</tr></tbody></table>'
	        ],
	        col: [
	          2,
	          '<table><tbody></tbody><colgroup>',
	          '</colgroup></table>'
	        ],
	        area: [
	          1,
	          '<map>',
	          '</map>'
	        ],
	        _: [
	          0,
	          '',
	          ''
	        ]
	      }, wrapper, i, ex;
	    html = html.replace(/^\s+|\s+$/g, '');
	    wrapMap.optgroup = wrapMap.option;
	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;
	    ex = /<([\w:]+)/.exec(html);
	    wrapper = ex && wrapMap[ex[1]] || wrapMap._;
	    node.innerHTML = wrapper[1] + html + wrapper[2];
	    i = wrapper[0];
	    while (i--) {
	      node = node.children[0];
	    }
	    return $b(node.childNodes);
	  };
	  $b.create = function create(tagName, props) {
	    var el, i, j, prop;
	    if (typeof tagName == 'object') {
	      props = tagName;
	      tagName = props.tagName;
	    }
	    el = document.createElement(tagName);
	    if (props)
	      for (i in props) {
	        prop = props[i];
	        if (i == 'attributes' && typeof prop == 'object') {
	          for (j in prop)
	            if (prop.hasOwnProperty(j)) {
	              el.setAttribute(j, prop[j]);
	            }
	        } else if (i == 'tagName') {
	          continue;
	        } else if (i == 'children' && prop) {
	          for (j = 0; j < prop.length; j++) {
	            el.appendChild(create(prop[j]));
	          }
	        } else if (typeof el[i] == 'object' && el[i] !== null && typeof props == 'object') {
	          for (j in prop)
	            if (prop.hasOwnProperty(j)) {
	              el[i][j] = prop[j];
	            }
	        } else {
	          el[i] = prop;
	        }
	      }
	    return el;
	  };
	  $b.one = function (s, context) {
	    return $b(s, context)[0] || null;
	  };
	  return $b;
	}();
	matreshka_dir_core_dom_lib_dollar_lib = function ($b) {
	  /* istanbul ignore if  */
	  if (typeof window == 'undefined') {
	    return;
	  }
	  var neededMethods = 'on off is add not find'.split(/\s/), dollar = typeof window.$ == 'function' ? window.$ : null, useDollar = true, fn, i;
	  if (dollar) {
	    fn = dollar.fn || dollar.prototype;
	    for (i = 0; i < neededMethods.length; i++) {
	      if (!fn[neededMethods[i]]) {
	        useDollar = false;
	        break;
	      }
	    }
	    if (useDollar && !dollar.parseHTML) {
	      dollar.parseHTML = $b.parseHTML;
	    }
	  } else {
	    useDollar = false;
	  }
	  return useDollar ? dollar : $b;
	}(matreshka_dir_core_dom_lib_bquery);
	matreshka_dir_core_dom_lib_used_lib = function (core, $b, $) {
	  core.$ = $ || noop;
	  core.$b = core.balalaika = core.bQuery = core.bquery = $b || noop;
	  core.useAs$ = function (_$) {
	    return core.$ = this.$ = $ = _$;
	  };
	  /* istanbul ignore next */
	  // used as DOM library placeholder in non-browser environment (eg nodejs)
	  function noop() {
	    return [];
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_dom_lib_bquery, matreshka_dir_core_dom_lib_dollar_lib);
	matreshka_dir_core_initmk = function (core, map) {
	  var initMK = core.initMK = function (object) {
	    if (!map.has(object)) {
	      map.set(object, {
	        events: {},
	        special: {},
	        id: 'mk' + Math.random()
	      });
	    }
	    return object;
	  };
	  return function (object) {
	    object._initMK ? object._initMK() : initMK(object);
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_definespecial = function (core, map) {
	  core._defineSpecial = function (object, key, noAccessors) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object' || !map.has(object))
	      return object;
	    var objectData = map.get(object), specialProps = objectData.special[key];
	    if (!specialProps) {
	      specialProps = objectData.special[key] = {
	        $nodes: core.$(),
	        value: object[key],
	        getter: null,
	        setter: null,
	        mediator: null
	      };
	      if (!noAccessors && key != 'sandbox') {
	        Object.defineProperty(object, key, {
	          configurable: true,
	          enumerable: true,
	          get: function () {
	            return specialProps.getter ? specialProps.getter.call(object) : specialProps.value;
	          },
	          set: function (v) {
	            specialProps.setter ? specialProps.setter.call(object, v) : core.set(object, key, v, { fromSetter: true });
	          }
	        });
	      }
	    }
	    return specialProps;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_util_define = function (core, initMK) {
	  var _define, defineGetter, defineSetter;
	  _define = core.define = function (object, key, descriptor) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var i;
	    if (typeof key == 'object') {
	      for (i in key) {
	        _define(object, i, key[i]);
	      }
	      return object;
	    }
	    Object.defineProperty(object, key, descriptor);
	    return object;
	  };
	  defineGetter = core.defineGetter = function (object, key, getter) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var i, special;
	    if (typeof key == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          defineGetter(object, i, key[i]);
	        }
	      return object;
	    }
	    special = core._defineSpecial(object, key);
	    special.getter = function () {
	      return getter.call(object, {
	        value: special.value,
	        key: key,
	        self: object
	      });
	    };
	    return object;
	  };
	  defineSetter = core.defineSetter = function (object, key, setter) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var i;
	    if (typeof key == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          defineSetter(object, i, key[i]);
	        }
	      return object;
	    }
	    core._defineSpecial(object, key).setter = function (v) {
	      return setter.call(object, v, {
	        value: v,
	        key: key,
	        self: object
	      });
	    };
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_util_linkprops = function (core, map, initMK, util) {
	  var linkProps = core.linkProps = function (object, key, keys, getter, evtOptions) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var optionsType = typeof evtOptions, objectData = map.get(object), _this, _key, _keys, i, j, path, t, setOnInit, onChange;
	    onChange = function (evt) {
	      var values = [], _protect = evt._protect;
	      if (!_protect) {
	        _protect = evt._protect = evt._protect || {};
	        for (i in evtOptions) {
	          evt[i] = evtOptions[i];
	        }
	      }
	      if (!(key + objectData.id in _protect)) {
	        if (typeof keys[0] == 'object') {
	          for (i = 0; i < keys.length; i += 2) {
	            _this = keys[i];
	            _keys = typeof keys[i + 1] == 'string' ? keys[i + 1].split(/\s/) : keys[i + 1];
	            for (j = 0; j < _keys.length; j++) {
	              values.push(util.deepFind(_this, _keys[j]));
	            }
	          }
	        } else {
	          for (i = 0; i < keys.length; i++) {
	            _key = keys[i];
	            _this = object;
	            values.push(util.deepFind(_this, _key));
	          }
	        }
	        _protect[key + objectData.id] = 1;
	        core._defineSpecial(object, key, evtOptions.hideProperty);
	        core.set(object, key, getter.apply(object, values), evt);
	      }
	    };
	    keys = typeof keys == 'string' ? keys.split(/\s+/) : keys;
	    // backward compability for setOnInit
	    if (optionsType == 'boolean') {
	      setOnInit = evtOptions;
	    }
	    if (optionsType != 'object') {
	      evtOptions = {};
	    }
	    if (optionsType == 'boolean') {
	      evtOptions.setOnInit = setOnInit;
	    }
	    evtOptions.fromDependency = true;
	    getter = getter || function (value) {
	      return value;
	    };
	    function getEvtName(path) {
	      var evtName, sliceIndex;
	      if (path.length > 1) {
	        sliceIndex = path.length - 1;
	        evtName = path.slice(0, sliceIndex).join('.') + '@' + '_rundependencies:' + path[sliceIndex];
	      } else {
	        evtName = '_rundependencies:' + path;
	      }
	      return evtName;
	    }
	    onChange = evtOptions.debounce ? util.debounce(onChange) : onChange;
	    // TODO refactor this shi..
	    if (typeof keys[0] == 'object') {
	      for (i = 0; i < keys.length; i += 2) {
	        _this = initMK(keys[i]);
	        _keys = typeof keys[i + 1] == 'string' ? keys[i + 1].split(/\s/) : keys[i + 1];
	        for (j = 0; j < _keys.length; j++) {
	          path = _keys[j].split('.');
	          core[path.length > 1 ? 'on' : '_fastAddListener'](_this, getEvtName(path), onChange);
	        }
	      }
	    } else {
	      for (i = 0; i < keys.length; i++) {
	        _key = keys[i];
	        _this = object;
	        path = _key.split('.');
	        core[path.length > 1 ? 'on' : '_fastAddListener'](_this, getEvtName(path), onChange);
	      }
	    }
	    evtOptions.setOnInit !== false && onChange.call(typeof keys[0] == 'object' ? keys[0] : object, { key: typeof keys[0] == 'object' ? keys[1] : keys[0] });
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_util_mediate = function (core, initMK) {
	  var mediate = core.mediate = function (object, keys, mediator) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof keys, i, special;
	    if (type == 'object' && !(keys instanceof Array)) {
	      for (i in keys) {
	        if (keys.hasOwnProperty(i)) {
	          core.mediate(object, i, keys[i]);
	        }
	      }
	      return object;
	    }
	    keys = type == 'string' ? keys.split(/\s/) : keys;
	    for (i = 0; i < keys.length; i++)
	      (function (key) {
	        special = core._defineSpecial(object, key);
	        special.mediator = function (v) {
	          return mediator.call(object, v, special.value, key, object);
	        };
	        core.set(object, key, special.mediator(special.value), { fromMediator: true });
	      }(keys[i]));
	    return object;
	  };
	  var setClassFor = core.setClassFor = function (object, keys, Class, updateFunction) {
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof keys, i;
	    if (type == 'object' && !(keys instanceof Array)) {
	      for (i in keys)
	        if (keys.hasOwnProperty(i)) {
	          core.setClassFor(object, i, keys[i], Class);
	        }
	      return object;
	    }
	    keys = type == 'string' ? keys.split(/\s/) : keys;
	    updateFunction = updateFunction || function (instance, data) {
	      var i, keys, removeKeys;
	      if (instance.isMKArray) {
	        instance.recreate(data);
	      } else if (instance.isMKObject) {
	        keys = instance.keys();
	        removeKeys = [];
	        for (i = 0; i < keys.length; i++) {
	          if (!(keys[i] in data)) {
	            removeKeys.push(keys[i]);
	          }
	        }
	        instance.jset(data).removeDataKeys(removeKeys);
	      } else {
	        for (i in data) {
	          if (data.hasOwnProperty(i)) {
	            instance[i] = data[i];
	          }
	        }
	      }
	    };
	    for (i = 0; i < keys.length; i++) {
	      core.mediate(object, keys[i], function (v, prevVal, key) {
	        var result;
	        if (prevVal && (prevVal.instanceOf ? prevVal.instanceOf(Class) : prevVal instanceof Class)) {
	          updateFunction.call(object, prevVal, v, key);
	          result = prevVal;
	        } else {
	          result = new Class(v, object, key);
	        }
	        return result;
	      });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_get_set_remove = function (core, map) {
	  var set;
	  core.get = function (object, key) {
	    return object && object[key];
	  };
	  // set method is the most often used method
	  // we need to optimize it as good as possible
	  set = core.set = function (object, key, v, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var type = typeof key, _isNaN = Number.isNaN || function (value) {
	        return typeof value == 'number' && isNaN(value);
	      }, objectData, special, events, prevVal, newV, i, _evt, isChanged, triggerChange;
	    if (type == 'undefined')
	      return object;
	    if (type == 'object') {
	      for (i in key) {
	        if (key.hasOwnProperty(i)) {
	          set(object, i, key[i], v);
	        }
	      }
	      return object;
	    }
	    objectData = map.get(object);
	    if (!objectData || !objectData.special[key]) {
	      object[key] = v;
	      return object;
	    }
	    special = objectData.special[key];
	    events = objectData.events;
	    prevVal = special.value;
	    if (special.mediator && v !== prevVal && (!evt || !evt.skipMediator && !evt.fromMediator)) {
	      newV = special.mediator(v, prevVal, key, object);
	    } else {
	      newV = v;
	    }
	    isChanged = newV !== prevVal;
	    _evt = {
	      originalEvent: evt,
	      value: newV,
	      previousValue: prevVal,
	      key: key,
	      node: special.$nodes[0] || null,
	      $nodes: special.$nodes,
	      self: object,
	      isChanged: isChanged
	    };
	    if (evt && typeof evt == 'object') {
	      for (i in evt) {
	        _evt[i] = _evt[i] || evt[i];
	      }
	    }
	    triggerChange = (isChanged || _evt.force) && !_evt.silent;
	    if (triggerChange) {
	      events['beforechange:' + key] && core._fastTrigger(object, 'beforechange:' + key, _evt);
	      events.beforechange && core._fastTrigger(object, 'beforechange', _evt);
	    }
	    special.value = newV;
	    if (isChanged || _evt.force || _evt.forceHTML || newV !== v && !_isNaN(newV)) {
	      if (!_evt.silentHTML) {
	        events['_runbindings:' + key] && core._fastTrigger(object, '_runbindings:' + key, _evt);
	      }
	    }
	    if (triggerChange) {
	      events['change:' + key] && core._fastTrigger(object, 'change:' + key, _evt);
	      events.change && core._fastTrigger(object, 'change', _evt);
	    }
	    if ((isChanged || _evt.force) && !_evt.skipLinks) {
	      events['_rundependencies:' + key] && core._fastTrigger(object, '_rundependencies:' + key, _evt);
	    }
	    return object;
	  };
	  core.remove = function (object, key, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object' || typeof key !== 'string')
	      return object;
	    var keys = key.split(/\s+/), _evt = { keys: keys }, objectData = map.get(object), exists, i;
	    if (evt && typeof evt == 'object') {
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	    }
	    for (i = 0; i < keys.length; i++) {
	      key = keys[i];
	      exists = key in object;
	      if (exists) {
	        _evt.key = key;
	        _evt.value = object[key];
	        delete object[key];
	        if (objectData) {
	          core.unbindNode(object, key);
	          core.off(object, 'change:' + key + ' beforechange:' + key + ' _runbindings:' + key + ' _rundependencies:' + key);
	          delete objectData.special[key];
	          if (!_evt.silent) {
	            core._fastTrigger(object, 'delete', _evt);
	            core._fastTrigger(object, 'delete:' + key, _evt);
	          }
	        }
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_bindings_bindnode = function (core, map, initMK, util) {
	  var defaultBinders, lookForBinder;
	  defaultBinders = core.defaultBinders = [function (node) {
	      var tagName = node.tagName, binders = core.binders, b;
	      if (tagName == 'INPUT') {
	        b = binders.input(node.type);
	      } else if (tagName == 'TEXTAREA') {
	        b = binders.textarea();
	      } else if (tagName == 'SELECT') {
	        b = binders.select(node.multiple);
	      } else if (tagName == 'PROGRESS') {
	        b = binders.progress();
	      } else if (tagName == 'OUTPUT') {
	        b = binders.output();
	      }
	      return b;
	    }];
	  lookForBinder = core.lookForBinder = function (node) {
	    var result, ep = defaultBinders, i;
	    for (i = 0; i < ep.length; i++) {
	      if (result = ep[i].call(node, node)) {
	        return result;
	      }
	    }
	  };
	  core.bindOptionalNode = function (object, key, node, binder, evt) {
	    if (typeof key == 'object') {
	      /*
	      * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
	      */
	      bindNode(object, key, node, binder, true);
	    } else {
	      bindNode(object, key, node, binder, evt, true);
	    }
	    return object;
	  };
	  var bindSandbox = core.bindSandbox = function (object, node, evt) {
	    var $nodes = core.$(node), _evt, special, i;
	    initMK(object);
	    if (!$nodes.length) {
	      throw Error('Binding error: node is missing for "sandbox".' + (typeof node == 'string' ? ' The selector is "' + node + '"' : ''));
	    }
	    special = core._defineSpecial(object, 'sandbox');
	    special.$nodes = special.$nodes.length ? special.$nodes.add($nodes) : $nodes;
	    if (object.isMK) {
	      object.$sandbox = $nodes;
	      object.sandbox = $nodes[0];
	      object.$nodes.sandbox = special.$nodes;
	      object.nodes.sandbox = special.$nodes[0];
	    }
	    if (!evt || !evt.silent) {
	      _evt = {
	        key: 'sandbox',
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      if (evt) {
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	      }
	      core._fastTrigger(object, 'bind:sandbox', _evt);
	      core._fastTrigger(object, 'bind', _evt);
	    }
	    return object;
	  };
	  var bindNode = core.bindNode = function (object, key, node, binder, evt, optional) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    if (key == 'sandbox') {
	      return bindSandbox(object, node, evt, optional);
	    }
	    initMK(object);
	    var objectData = map.get(object), win = typeof window != 'undefined' ? window : null, $nodes, keys, i, special, path, listenKey, changeHandler, _evt;
	    /*
	     * this.bindNode([['key', $(), {on:'evt'}], [{key: $(), {on: 'evt'}}]], { silent: true });
	     */
	    if (key instanceof Array) {
	      for (i = 0; i < key.length; i++) {
	        bindNode(object, key[i][0], key[i][1], key[i][2] || evt, node);
	      }
	      return object;
	    }
	    /*
	     * this.bindNode('key1 key2', node, binder, { silent: true });
	     */
	    if (typeof key == 'string' && ~key.indexOf(' ')) {
	      keys = key.split(/\s+/);
	      if (keys.length > 1) {
	        for (i = 0; i < keys.length; i++) {
	          bindNode(object, keys[i], node, binder, evt, optional);
	        }
	        return object;
	      }
	    }
	    /*
	     * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
	     */
	    if (typeof key == 'object') {
	      for (i in key) {
	        if (key.hasOwnProperty(i)) {
	          bindNode(object, i, key[i], node, binder, evt);
	        }
	      }
	      return object;
	    }
	    /*
	     * this.bindNode('key', [ node, binder ], { silent: true });
	     */
	    // node !== win is the most uncommon bugfix ever. Don't ask what does it mean.
	    // This is about iframes, CORS and deprecated DOM API.
	    if (node && node.length == 2 && node !== win && !node[1].nodeName && (node[1].setValue || node[1].getValue)) {
	      return bindNode(object, key, node[0], node[1], binder, optional);
	    }
	    $nodes = core._getNodes(object, node);
	    if (!$nodes.length) {
	      if (optional) {
	        return object;
	      } else {
	        throw Error('Binding error: node is missing for "' + key + '".' + (typeof node == 'string' ? ' The selector is "' + node + '"' : ''));
	      }
	    }
	    if ((!evt || evt.deep !== false) && ~key.indexOf('.')) {
	      path = key.split('.');
	      changeHandler = function (evt) {
	        evt = evt && evt.originalEvent;
	        var target = evt && evt.value, i;
	        if (!target) {
	          target = object;
	          for (i = 0; i < path.length - 1; i++) {
	            target = target[path[i]];
	          }
	        }
	        bindNode(target, path[path.length - 1], $nodes, binder, evt, optional);
	        if (evt && evt.previousValue) {
	          core.unbindNode(evt.previousValue, path[path.length - 1], $nodes);
	        }
	      };
	      core._delegateListener(object, path.slice(0, path.length - 2).join('.'), 'change:' + path[path.length - 2], changeHandler);
	      changeHandler();
	      return object;
	    }
	    evt = evt || {};
	    special = core._defineSpecial(object, key);
	    special.$nodes = special.$nodes.length ? special.$nodes.add($nodes) : $nodes;
	    if (object.isMK) {
	      object.$nodes[key] = special.$nodes;
	      object.nodes[key] = special.$nodes[0];
	    }
	    for (i = 0; i < $nodes.length; i++) {
	      initBinding(object, objectData, key, $nodes, i, binder, evt, special);
	    }
	    if (!evt.silent) {
	      _evt = {
	        key: key,
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      core._fastTrigger(object, 'bind:' + key, _evt);
	      core._fastTrigger(object, 'bind', _evt);
	    }
	    return object;
	  };
	  function initBinding(object, objectData, key, $nodes, index, binder, evt, special) {
	    var options = {
	        self: object,
	        key: key,
	        $nodes: $nodes,
	        node: node
	      }, node = $nodes[index], isUndefined = typeof special.value == 'undefined', _binder, _evt, foundBinder, _options, i, domEvt, mkHandler, val;
	    if (binder === null) {
	      _binder = {};
	    } else {
	      foundBinder = lookForBinder(node);
	      if (foundBinder) {
	        if (binder) {
	          for (i in binder) {
	            foundBinder[i] = binder[i];
	          }
	        }
	        _binder = foundBinder;
	      } else {
	        _binder = binder || {};
	      }
	    }
	    if (_binder.initialize) {
	      _options = { value: special.value };
	      for (i in options) {
	        _options[i] = options[i];
	      }
	      _binder.initialize.call(node, _options);
	    }
	    if (_binder.getValue && (isUndefined && evt.assignDefaultValue !== false || evt.assignDefaultValue === true)) {
	      _evt = { fromNode: true };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      val = _binder.getValue.call(node, options);
	      isUndefined = typeof val == 'undefined';
	      core.set(object, key, val, _evt);
	    }
	    if (_binder.setValue) {
	      mkHandler = function (evt) {
	        var v = objectData.special[key].value,
	          // dirty hack for this one https://github.com/matreshkajs/matreshka/issues/19
	          _v = evt && typeof evt.onChangeValue == 'string' && typeof v == 'number' ? v + '' : v, i;
	        if (evt && evt.changedNode == node && evt.onChangeValue == _v)
	          return;
	        _options = { value: v };
	        for (i in options) {
	          _options[i] = options[i];
	        }
	        _binder.setValue.call(node, v, _options);
	      };
	      if (evt.debounce) {
	        mkHandler = util.debounce(mkHandler);
	      }
	      core._fastAddListener(object, '_runbindings:' + key, mkHandler, null, { node: node });
	      !isUndefined && mkHandler();
	    }
	    if (_binder.getValue && _binder.on) {
	      domEvt = {
	        node: node,
	        on: _binder.on,
	        instance: object,
	        key: key,
	        mkHandler: mkHandler,
	        handler: function (evt) {
	          if (domEvt.removed)
	            return;
	          var oldvalue = object[key], value, j, _options = {
	              value: oldvalue,
	              domEvent: evt,
	              originalEvent: evt.originalEvent || evt,
	              preventDefault: function () {
	                evt.preventDefault();
	              },
	              stopPropagation: function () {
	                evt.stopPropagation();
	              },
	              which: evt.which,
	              target: evt.target
	            };
	          // hasOwnProperty is not required there
	          for (j in options) {
	            _options[j] = options[j];
	          }
	          value = _binder.getValue.call(node, _options);
	          if (value !== oldvalue) {
	            core.set(object, key, value, {
	              fromNode: true,
	              changedNode: node,
	              onChangeValue: value
	            });
	          }
	        }
	      };
	      core.domEvents.add(domEvt);
	    }
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_unbindnode = function (core, map, initMK) {
	  var unbindNode = core.unbindNode = function (object, key, node, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof key, objectData = map.get(object), special = objectData.special[key], $nodes, keys, i, indexOfDot, path, listenKey, _evt;
	    if (key instanceof Array) {
	      for (i = 0; i < key.length; i++) {
	        evt = node;
	        unbindNode(object, key[i][0], key[i][1] || evt, evt);
	      }
	      return object;
	    }
	    if (type == 'string') {
	      keys = key.split(/\s/);
	      if (keys.length > 1) {
	        for (i = 0; i < keys.length; i++) {
	          unbindNode(object, keys[i], node, evt);
	        }
	        return object;
	      }
	      indexOfDot = key.indexOf('.');
	      if (~indexOfDot) {
	        path = key.split('.');
	        var target = object;
	        for (i = 0; i < path.length - 1; i++) {
	          target = target[path[i]];
	        }
	        core._undelegateListener(object, path.slice(0, path.length - 2), 'change:' + path[path.length - 2]);
	        unbindNode(target, path[path.length - 1], node, evt);
	        return object;
	      }
	    }
	    if (key === null) {
	      for (key in objectData.special) {
	        if (objectData.special.hasOwnProperty(key)) {
	          unbindNode(object, key, node, evt);
	        }
	      }
	      return object;
	    } else if (type == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          unbindNode(object, i, key[i], node);
	        }
	      return object;
	    } else if (!node) {
	      if (special && special.$nodes) {
	        return unbindNode(object, key, special.$nodes, evt);
	      } else {
	        return object;
	      }
	    } else if (node.length == 2 && !node[1].nodeName && (node[1].setValue || node[1].getValue || node[1].on)) {
	      // It actually ignores binder. With such a syntax you can assign definite binders to some variable and then easily delete all at once using
	      return unbindNode(object, key, node[0], evt);
	    } else if (!special) {
	      return object;
	    }
	    $nodes = core._getNodes(object, node);
	    for (i = 0; i < $nodes.length; i++) {
	      core.domEvents.remove({
	        key: key,
	        node: $nodes[i],
	        instance: object
	      });
	      special.$nodes = special.$nodes.not($nodes[i]);
	      (function (node) {
	        core._removeListener(object, '_runbindings:' + key, null, null, {
	          node: node,
	          howToRemove: function (onData, offData) {
	            return onData.node == offData.node;
	          }
	        });
	      }($nodes[i]));
	    }
	    if (object.isMK) {
	      object.$nodes[key] = special.$nodes;
	      object.nodes[key] = special.$nodes[0] || null;
	      if (key == 'sandbox') {
	        object.sandbox = special.$nodes[0] || null;
	        object.$sandbox = special.$nodes;
	      }
	    }
	    if (!evt || !evt.silent) {
	      _evt = {
	        key: key,
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      core._fastTrigger(object, 'unbind:' + key, _evt);
	      core._fastTrigger(object, 'unbind', _evt);
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk);
	matreshka_dir_core_bindings_parsebindings = function (core, map, initMK, util) {
	  core.parserBrackets = {
	    left: '{{',
	    right: '}}'
	  };
	  var parseBindings = core.parseBindings = function (object, nodes) {
	    var objectData, $ = core.$, brackets = core.parserBrackets, leftBracket = brackets.left, rightBracket = brackets.right, escLeftBracket = leftBracket.replace(/(\[|\(|\?)/g, '\\$1'), escRightBracket = rightBracket.replace(/(\]|\)|\?)/g, '\\$1'), bindingsReg = new RegExp(escLeftBracket + '(.+?)' + escRightBracket, 'g'), strictBindingsReg = new RegExp('^' + escLeftBracket + '(.+?)' + escRightBracket + '$', 'g');
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return $();
	    initMK(object);
	    objectData = map.get(object);
	    if (typeof nodes == 'string') {
	      if (!~nodes.indexOf(leftBracket)) {
	        return $.parseHTML(nodes.replace(/^\s+|\s+$/g, ''));
	      } else {
	        nodes = $.parseHTML(nodes.replace(/^\s+|\s+$/g, ''));
	      }
	    } else if (!nodes) {
	      nodes = objectData && objectData.special && objectData.special.sandbox && objectData.special.sandbox.$nodes;
	      if (!nodes || !nodes.length) {
	        return object;
	      }
	    } else {
	      nodes = $(nodes);
	    }
	    var all = [], k = 0, childNodes, i, j, node, bindHTMLKey, atts, attr, attrValue, attrName, keys, key, binder, previous, textContent, childNode, body, matched;
	    function initLink(key, keys, attrValue) {
	      var regs = {};
	      for (i = 0; i < keys.length; i++) {
	        regs[keys[i]] = new RegExp(escLeftBracket + keys[i] + escRightBracket, 'g');
	      }
	      core.linkProps(object, key, keys, function () {
	        var v = attrValue, i;
	        for (i = 0; i < keys.length; i++) {
	          v = v.replace(regs[keys[i]], arguments[i]);
	        }
	        return v;
	      }, {
	        hideProperty: true,
	        setOnInit: true
	      });
	    }
	    for (i = 0; i < nodes.length; i++) {
	      node = nodes[i];
	      // we need 2 if's for old firefoxes
	      if (node.outerHTML) {
	        // this is for firefox too
	        if (!~node.outerHTML.indexOf(leftBracket) && !~node.outerHTML.indexOf(encodeURI(leftBracket))) {
	          continue;
	        }
	      }
	      childNodes = node.getElementsByTagName('*');
	      for (j = 0; j < childNodes.length; j++) {
	        all[k++] = childNodes[j];
	      }
	      all[k++] = node;
	    }
	    if (!all.length) {
	      return $();
	    }
	    for (j = 0; j < all.length; j++) {
	      node = all[j];
	      if (node.tagName != 'TEXTAREA') {
	        for (i = 0; i < node.childNodes.length; i++) {
	          childNode = node.childNodes[i];
	          if (childNode.nodeType == 3 && ~childNode.nodeValue.indexOf(leftBracket)) {
	            textContent = childNode.nodeValue.replace(bindingsReg, '<span mk-html="$1"></span>');
	            insertHTML(node, childNode, textContent);
	            node.removeChild(childNode);
	          }
	        }
	      }
	    }
	    for (i = 0; i < nodes.length; i++) {
	      childNodes = nodes[i].querySelectorAll('[mk-html]');
	      for (j = 0; j < childNodes.length; j++) {
	        all[k++] = childNodes[j];
	      }
	    }
	    for (i = 0; i < all.length; i++) {
	      node = all[i];
	      bindHTMLKey = node.getAttribute('mk-html');
	      if (bindHTMLKey) {
	        node.removeAttribute('mk-html');
	        core.bindNode(object, bindHTMLKey, node, {
	          setValue: function (v) {
	            this.innerHTML = v;
	          }
	        });
	      }
	      atts = node.attributes;
	      for (j = 0; j < atts.length; j++) {
	        attr = atts[j];
	        attrValue = attr.value;
	        attrName = attr.name;
	        matched = attrValue.match(bindingsReg);
	        if (matched) {
	          keys = matched.map(function (key) {
	            return key.replace(bindingsReg, '$1');
	          });
	          if (keys.length == 1 && strictBindingsReg.test(attrValue)) {
	            key = keys[0];
	          } else {
	            key = core.randomString();
	            initLink(key, keys, attrValue);
	          }
	          if ((attrName == 'value' && node.type != 'checkbox' && node.type != 'radio' || attrName == 'checked' && (node.type == 'checkbox' || node.type == 'radio')) && core.lookForBinder(node)) {
	            node.setAttribute(attrName, '');
	            core.bindNode(object, key, node);
	          } else {
	            core.bindNode(object, key, node, core.binders.attr(attrName));
	          }
	        }
	      }
	    }
	    return nodes;
	  };
	  function insertHTML(node, childNode, html) {
	    var previous = childNode.previousSibling, body;
	    try {
	      if (previous) {
	        previous.insertAdjacentHTML('afterend', html);
	      } else {
	        node.insertAdjacentHTML('afterbegin', html);
	      }
	    } catch (e) {
	      // in case user uses very old webkit-based browser
	      /* istanbul ignore next */
	      body = document.body;
	      /* istanbul ignore next */
	      if (previous) {
	        body.appendChild(previous);
	        previous.insertAdjacentHTML('afterend', html);
	        body.removeChild(previous);
	      } else {
	        body.appendChild(node);
	        node.insertAdjacentHTML('afterbegin', html);
	        body.removeChild(node);
	      }
	    }
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_getnodes = function (core, map, initMK, util) {
	  var selectAll, boundAll, bound;
	  /**
	  * @private
	  * @summary selectNodes selects nodes match to custom selectors such as :sandbox and :bound(KEY)
	  */
	  function selectNodes(object, selectors) {
	    var objectData = map.get(object), $ = core.$, result = $(), execResult, $bound, node, selector, i, j, random, subSelector, key, selected;
	    if (!object || typeof object != 'object' || !objectData)
	      return result;
	    // replacing :sandbox to :bound(sandbox)
	    selectors = selectors.split(',');
	    for (i = 0; i < selectors.length; i++) {
	      selector = selectors[i];
	      if (execResult = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*|\s*:sandbox\s*([\S\s]*)\s*/.exec(selector)) {
	        key = execResult[3] !== undefined ? 'sandbox' : execResult[1];
	        subSelector = execResult[3] !== undefined ? execResult[3] : execResult[2];
	        // getting KEY from :bound(KEY)
	        $bound = objectData.special[key] && objectData.special[key].$nodes;
	        if (!$bound || !$bound.length) {
	          continue;
	        }
	        // if native selector passed after :bound(KEY) is not empty string
	        // for example ":bound(KEY) .my-selector"
	        if (subSelector) {
	          // if native selector contains children selector
	          // for example ":bound(KEY) > .my-selector"
	          if (subSelector.indexOf('>') === 0) {
	            // selecting children
	            for (j = 0; j < $bound.length; j++) {
	              node = $bound[j];
	              random = 'm' + core.randomString();
	              node.setAttribute(random, random);
	              selected = node.querySelectorAll('[' + random + '="' + random + '"]' + subSelector);
	              result = result.add(util.toArray(selected));
	              node.removeAttribute(random);
	            }
	          } else {
	            // if native selector doesn't contain children selector
	            result = result.add($bound.find(subSelector));
	          }
	        } else {
	          // if native selector is empty string
	          result = result.add($bound);
	        }  // if it's native selector
	      } else {
	        result = result.add(selector);
	      }
	    }
	    return result;
	  }
	  selectAll = core.selectAll = function (object, s) {
	    var $sandbox, objectData = map.get(object);
	    if (!objectData || typeof s != 'string')
	      return core.$();
	    if (/:sandbox|:bound\(([^(]*)\)/.test(s)) {
	      return selectNodes(object, s);
	    } else {
	      $sandbox = objectData.special;
	      $sandbox = $sandbox && $sandbox.sandbox && $sandbox.sandbox.$nodes;
	      return $sandbox && $sandbox.find(s);
	    }
	  }, core.select = function (object, s) {
	    var sandbox, objectData = map.get(object);
	    if (!objectData || typeof s != 'string')
	      return null;
	    if (/:sandbox|:bound\(([^(]*)\)/.test(s)) {
	      return selectNodes(object, s)[0] || null;
	    } else {
	      sandbox = objectData.special;
	      sandbox = sandbox && sandbox.sandbox && sandbox.sandbox.$nodes && sandbox.sandbox.$nodes[0];
	      return sandbox && sandbox.querySelector(s);
	    }
	  };
	  boundAll = core.boundAll = function (object, key) {
	    var $ = core.$, objectData = map.get(object), special, keys, $nodes, i;
	    if (!objectData)
	      return $();
	    if (key && ~key.indexOf('.')) {
	      keys = key.split('.');
	      key = keys.splice(-1)[0];
	      return boundAll(util.deepFind(object, keys), key);
	    }
	    initMK(object);
	    special = objectData.special, key = !key ? 'sandbox' : key;
	    keys = typeof key == 'string' ? key.split(/\s+/) : key;
	    if (keys.length <= 1) {
	      return keys[0] in special ? special[keys[0]].$nodes : $();
	    } else {
	      $nodes = $();
	      for (i = 0; i < keys.length; i++) {
	        $nodes = $nodes.add(special[keys[i]].$nodes);
	      }
	      return $nodes;
	    }
	  };
	  core.$bound = function (object, key) {
	    return boundAll(object, key);
	  };
	  bound = core.bound = function (object, key) {
	    var objectData = map.get(object), special, keys, i;
	    if (!objectData)
	      return null;
	    if (key && ~key.indexOf('.')) {
	      keys = key.split('.');
	      key = keys.splice(-1)[0];
	      return bound(util.deepFind(object, keys), key);
	    }
	    initMK(object);
	    special = objectData.special;
	    key = !key ? 'sandbox' : key;
	    keys = typeof key == 'string' ? key.split(/\s+/) : key;
	    if (keys.length <= 1) {
	      return keys[0] in special ? special[keys[0]].$nodes[0] || null : null;
	    } else {
	      for (i = 0; i < keys.length; i++) {
	        if (keys[i] in special && special[keys[i]].$nodes.length) {
	          return special[keys[i]].$nodes[0];
	        }
	      }
	    }
	    return null;
	  };
	  core._getNodes = function (object, s) {
	    return typeof s == 'string' && !/</.test(s) && /:sandbox|:bound\(([^(]*)\)/.test(s) ? selectNodes(object, s) : core.$(s);
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_var_domevtreg = /([^\:\:]+)(::([^\(\)]+)?(\((.*)\))?)?/;
	matreshka_dir_core_events_trigger = function (core, map, utils, domEvtReg) {
	  var triggerDOMEvent = function (el, name, args) {
	    var doc = document, event;
	    if (doc.createEvent) {
	      /* istanbul ignore next */
	      event = doc.createEvent('Event');
	      event.initEvent(name, true, true);
	      event.mkArgs = args;
	      el.dispatchEvent(event);
	    } else if (typeof Event != 'undefined') {
	      event = new Event(name, {
	        bubbles: true,
	        cancelable: true
	      });
	      event.mkArgs = args;
	      el.dispatchEvent(event);
	    } else {
	      /* istanbul ignore next */
	      throw Error('Cannot trigger DOM event');
	    }
	    return event;
	  };
	  core.trigger = function (object, names) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), allEvents = objectData && objectData.events, args, i, j, l, events, ev, name, executed, nodes, _nodes, selector;
	    if (names && allEvents) {
	      args = utils.toArray(arguments, 2);
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i];
	        if (~name.indexOf('::')) {
	          executed = domEvtReg.exec(name);
	          nodes = objectData.special[executed[3] || 'sandbox'];
	          nodes = nodes && nodes.$nodes;
	          _nodes = core.$();
	          selector = executed[5];
	          if (selector) {
	            for (j = 0; j < nodes.length; j++) {
	              _nodes = _nodes.add(nodes.find(selector));
	            }
	          } else {
	            _nodes = nodes;
	          }
	          for (j = 0; j < _nodes.length; j++) {
	            triggerDOMEvent(_nodes[i], executed[1], args);
	          }
	        } else {
	          events = allEvents[name];
	          if (events) {
	            j = -1, l = events.length;
	            while (++j < l)
	              (ev = events[j]).callback.apply(ev.ctx, args);
	          }
	        }
	      }
	    }
	    return object;
	  };
	  core._fastTrigger = function (object, name, evt) {
	    var events = map.get(object).events[name], i, l, ev;
	    if (events) {
	      i = -1, l = events.length;
	      while (++i < l)
	        (ev = events[i]).callback.call(ev.ctx, evt);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_util_common, matreshka_dir_core_var_domevtreg);
	matreshka_dir_core_events_on = function (core, initMK, util) {
	  var on = core.on = function (object, names, callback, triggerOnInit, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var t, i, name, path, lastIndexOfET;
	    // if event-callback object is passed to the function
	    if (typeof names == 'object' && !(names instanceof Array)) {
	      for (i in names) {
	        if (names.hasOwnProperty(i)) {
	          on(object, i, names[i], callback, triggerOnInit);
	        }
	      }
	      return object;
	    }
	    // callback is required
	    if (!callback)
	      throw Error('callback is not a function for event(s) "' + names + '"');
	    names = names instanceof Array ? names : util.trim(names).replace(/\s+/g, ' ')  // single spaces only
	.split(/\s(?![^(]*\))/g)  // split by spaces
	;
	    // allow to flip triggerOnInit and context
	    if (typeof triggerOnInit != 'boolean' && typeof triggerOnInit != 'undefined') {
	      t = context;
	      context = triggerOnInit;
	      triggerOnInit = t;
	    }
	    for (i = 0; i < names.length; i++) {
	      name = names[i];
	      // index of @
	      lastIndexOfET = name.lastIndexOf('@');
	      if (~lastIndexOfET) {
	        path = name.slice(0, lastIndexOfET);
	        // fallback for older apps
	        if (!path) {
	          path = '*';
	        } else if (~path.indexOf('@')) {
	          path = path.replace(/([^@]*)@/g, function ($0, key) {
	            return (key || '*') + '.';
	          }).replace(/\.$/, '.*') || '*';
	        }
	        name = name.slice(lastIndexOfET + 1);
	        core._delegateListener(object, path, name, callback, context || object, evtData);
	      } else {
	        core._addListener(object, name, callback, context, evtData);
	      }
	    }
	    // trigger after event is initialized
	    if (triggerOnInit === true) {
	      callback.call(context || object, { triggeredOnInit: true });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_events_off = function (core, initMK, util, map) {
	  var off = core.off = function (object, names, callback, context) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), i, path, lastIndexOfET, name;
	    if (!objectData)
	      return object;
	    // if event-callback object is passed to the function
	    if (typeof names == 'object' && !(names instanceof Array)) {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          off(object, i, names[i], callback);
	        }
	      return object;
	    }
	    if (!names && !callback && !context) {
	      objectData.events = {};
	      return object;
	    }
	    names = util.trim(names).replace(/\s+/g, ' ')  // single spaces only
	.split(/\s(?![^(]*\))/g);
	    if (typeof object != 'object') {
	      return object;
	    }
	    for (i = 0; i < names.length; i++) {
	      name = names[i];
	      // index of @
	      lastIndexOfET = name.lastIndexOf('@');
	      if (~lastIndexOfET) {
	        path = name.slice(0, lastIndexOfET);
	        name = name.slice(lastIndexOfET + 1).replace(/@/g, '.');
	        core._undelegateListener(object, path, name, callback, context);
	      } else {
	        core._removeListener(object, name, callback, context);
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common, matreshka_dir_core_var_map);
	matreshka_dir_core_var_specialevtreg = /_rundependencies:|_runbindings:|change:/;
	matreshka_dir_core_events_addlistener = function (core, initMK, map, specialEvtReg, domEvtReg) {
	  var _addListener;
	  core._fastAddListener = function (object, name, callback, context, evtData) {
	    var allEvents = map.get(object).events, events = allEvents[name] || (allEvents[name] = []);
	    events.push({
	      callback: callback,
	      context: context,
	      ctx: context || object,
	      name: name,
	      node: evtData && evtData.node
	    });
	    if (specialEvtReg.test(name)) {
	      // define needed accessors for KEY
	      core._defineSpecial(object, name.replace(specialEvtReg, ''));
	    }
	    return object;
	  };
	  _addListener = core._addListener = function (object, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return false;
	    initMK(object);
	    var ctx = context || object, allEvents = map.get(object).events, events = allEvents[name] || (allEvents[name] = []), l = events.length, defaultEvtData = {
	        callback: callback,
	        //_callback: callback._callback || callback,
	        context: context,
	        ctx: ctx,
	        //howToRemove: null,
	        name: name
	      }, i, ev, _evtData, executed;
	    for (i = 0; i < l; i++) {
	      ev = events[i];
	      if ((ev.callback == callback || ev.callback == callback._callback) && ev.context == context) {
	        return false;
	      }
	    }
	    if (evtData) {
	      _evtData = {};
	      for (i in evtData) {
	        _evtData[i] = evtData[i];
	      }
	      for (i in defaultEvtData) {
	        _evtData[i] = defaultEvtData[i];
	      }
	    } else {
	      _evtData = defaultEvtData;
	    }
	    events.push(_evtData);
	    executed = domEvtReg.exec(name);
	    if (executed && executed[2]) {
	      core._addDOMListener(object, executed[3] || 'sandbox', executed[1], executed[5], callback, ctx, _evtData);
	    } else if (specialEvtReg.test(name)) {
	      // define needed accessors for KEY
	      core._defineSpecial(object, name.replace(specialEvtReg, ''));
	    }
	    core._fastTrigger(object, 'addevent:' + name, _evtData);
	    core._fastTrigger(object, 'addevent', _evtData);
	    return true;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map, matreshka_dir_core_var_specialevtreg, matreshka_dir_core_var_domevtreg);
	matreshka_dir_core_events_removelistener = function (core, map) {
	  var domEvtNameRegExp = /([^\:\:]+)(::([^\(\)]+)(\((.*)\))?)?/;
	  core._removeListener = function (object, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), j = 0, l, events, retain, evt, i, executed, howToRemove, removeEvtData;
	    if (!objectData)
	      return object;
	    events = objectData.events[name] || [];
	    retain = objectData.events[name] = [];
	    l = events.length;
	    evtData = evtData || {};
	    executed = domEvtNameRegExp.exec(name);
	    if (executed && executed[2]) {
	      core._removeDOMListener(object, executed[3], executed[1], executed[5], callback, context);
	    } else {
	      for (i = 0; i < l; i++) {
	        evt = events[i];
	        howToRemove = evt.howToRemove || evtData.howToRemove;
	        if (howToRemove ? !howToRemove(evt, evtData) : callback && (callback !== evt.callback && callback._callback !== evt.callback) || context && context !== evt.context) {
	          retain[j++] = evt;
	        } else {
	          removeEvtData = {
	            name: name,
	            callback: evt.callback,
	            context: evt.context
	          };
	          core._fastTrigger(object, 'removeevent:' + name, removeEvtData);
	          core._fastTrigger(object, 'removeevent', removeEvtData);
	        }
	      }
	      if (!retain.length) {
	        delete objectData.events[name];
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_delegatelistener = function (core, initMK, map, specialEvtReg) {
	  var _delegateListener = core._delegateListener = function (object, path, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var objectData = map.get(object), executed = /([^\.]+)\.(.*)/.exec(path), f, firstKey = executed ? executed[1] : path, changeKey, obj;
	    path = executed ? executed[2] : '';
	    evtData = evtData || {};
	    if (firstKey) {
	      if (firstKey == '*') {
	        if (object.isMKArray) {
	          f = function (evt) {
	            (evt && evt.added ? evt.added : object).forEach(function (item) {
	              item && _delegateListener(item, path, name, callback, context, evtData);
	            });
	          };
	          f._callback = callback;
	          core._addListener(object, 'add', f, context, evtData);
	          f();
	        } else if (object.isMKObject) {
	          f = function (evt) {
	            var target = object[evt.key];
	            if (target && evt && evt.key in objectData.keys) {
	              _delegateListener(target, path, name, callback, context, evtData);
	            }
	          };
	          object.each(function (item) {
	            _delegateListener(item, path, name, callback, context, evtData);
	          });
	          f._callback = callback;
	          core._addListener(object, 'change', f, context, evtData);
	        }  /* else {
	           	throw Error('"*" events are only allowed for MK.Array and MK.Object');
	           }*/
	      } else {
	        f = function (evt) {
	          if (evt && evt._silent)
	            return;
	          var target = object[firstKey], changeKey, triggerChange = true, i, changeEvents;
	          evtData.path = path;
	          evtData.previousValue = evt && evt.previousValue || evtData.previousValue && evtData.previousValue[firstKey];
	          if (evt && evt.previousValue && map.has(evt.previousValue)) {
	            core._undelegateListener(evt.previousValue, path, name, callback, context, evtData);
	          }
	          if (typeof target == 'object' && target) {
	            _delegateListener(target, path, name, callback, context, evtData);
	          }
	          if (specialEvtReg.test(name)) {
	            changeKey = name.replace(specialEvtReg, '');
	            if (!path && evtData.previousValue && evtData.previousValue[changeKey] !== target[changeKey]) {
	              changeEvents = map.get(evtData.previousValue).events[name];
	              if (changeEvents) {
	                for (i = 0; i < changeEvents.length; i++) {
	                  if (changeEvents[i].path === path) {
	                    triggerChange = false;
	                  }
	                }
	              }
	              if (triggerChange) {
	                core.set(target, changeKey, target[changeKey], {
	                  force: true,
	                  previousValue: evtData.previousValue[changeKey],
	                  previousObject: evtData.previousValue,
	                  _silent: true
	                });
	              }
	            }
	          }
	        };
	        f._callback = callback;
	        core._addListener(object, 'change:' + firstKey, f, context, evtData);
	        f();
	      }
	    } else {
	      core._addListener(object, name, callback, context, evtData);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map, matreshka_dir_core_var_specialevtreg);
	matreshka_dir_core_events_undelegatelistener = function (core, map) {
	  var _undelegateListener = core._undelegateListener = function (object, path, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var executed = /([^\.]+)\.(.*)/.exec(path), firstKey = executed ? executed[1] : path, p = path, objectData = map.get(object), events, i;
	    path = executed ? executed[2] : '';
	    if (firstKey) {
	      if (firstKey == '*') {
	        if (object.isMKArray) {
	          if (callback) {
	            _undelegateListener(object, path, 'add', callback, context, evtData);
	          } else {
	            events = objectData.events.add || [];
	            for (i = 0; i < events.length; i++) {
	              if (events[i].path == p) {
	                _undelegateListener(object, path, 'add', events[i].callback);
	              }
	            }
	          }
	          object.forEach(function (item) {
	            item && _undelegateListener(item, path, name, callback, context);
	          });
	        } else if (object.isMKObject) {
	          if (callback) {
	            _undelegateListener(object, path, 'change', callback, context);
	          } else {
	            events = objectData.events.change || [];
	            for (i = 0; i < events.length; i++) {
	              if (events[i].path == p) {
	                _undelegateListener(object, path, 'change', events[i].callback);
	              }
	            }
	          }
	          object.each(function (item) {
	            item && _undelegateListener(item, path, name, callback, context);
	          });
	        }
	      } else {
	        if (callback) {
	          core._removeListener(object, 'change:' + firstKey, callback, context, evtData);
	        } else {
	          events = objectData.events['change:' + firstKey] || [];
	          for (i = 0; i < events.length; i++) {
	            if (events[i].path == p) {
	              core._removeListener(object, 'change:' + firstKey, events[i].callback);
	            }
	          }
	        }
	        if (typeof object[firstKey] == 'object') {
	          _undelegateListener(object[firstKey], path, name, callback, context, evtData);
	        }
	      }
	    } else {
	      core._removeListener(object, name, callback, context, evtData);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_domevents = function (core, map) {
	  var list = {};
	  /**
	  * @private
	  * @since 0.0.4
	  * @todo optimize
	  * @summary This object is used to map DOM nodes and their DOM events
	  */
	  core.domEvents = {
	    // adds events to the map
	    add: function (o) {
	      var $ = core.$, objectData = map.get(o.instance);
	      if (o.node) {
	        if (typeof o.on == 'function') {
	          o.on.call(o.node, o.handler);
	        } else {
	          $(o.node).on(o.on.split(/\s+/).join('.mk ') + '.mk', o.handler);
	        }
	      }
	      (list[objectData.id] = list[objectData.id] || []).push(o);
	    },
	    // removes events from the map
	    remove: function (o) {
	      var objectData = map.get(o.instance), evts = list[objectData.id], $ = core.$, evt, i;
	      if (!evts)
	        return;
	      for (i = 0; i < evts.length; i++) {
	        evt = evts[i];
	        if (evt.node !== o.node)
	          continue;
	        // remove Matreshka event
	        evt.mkHandler && core._removeListener(o.instance, '_runbindings:' + o.key, evt.mkHandler);
	        // remove DOM event
	        if (typeof evt.on == 'string') {
	          $(o.node).off(evt.on + '.mk', evt.handler);
	        }
	        evt.removed = true;
	        list[objectData.id].splice(i--, 1);
	      }
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_adddomlistener = function (core, initMK, map) {
	  core._addDOMListener = function (object, key, domEvtName, selector, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    selector = selector || null;
	    evtData = evtData || {};
	    var objectData = map.get(object), domEvtHandler = function (domEvt) {
	        var node = this, $ = core.$, $nodes = $(node), mkArgs = domEvt.originalEvent ? domEvt.originalEvent.mkArgs : domEvt.mkArgs, evt = {
	            self: object,
	            node: node,
	            $nodes: $nodes,
	            key: key,
	            domEvent: domEvt,
	            originalEvent: domEvt.originalEvent || domEvt,
	            preventDefault: function () {
	              domEvt.preventDefault();
	            },
	            stopPropagation: function () {
	              domEvt.stopPropagation();
	            },
	            which: domEvt.which,
	            target: domEvt.target
	          }, randomID, is;
	        callback.apply(context, mkArgs ? mkArgs : [evt]);
	      }, fullEvtName = domEvtName + '.' + objectData.id + key, bindHandler = function (evt) {
	        evt && evt.$nodes && evt.$nodes.on(fullEvtName, selector, domEvtHandler);
	      }, unbindHandler = function (evt) {
	        evt && evt.$nodes && evt.$nodes.off(fullEvtName, selector, domEvtHandler);
	      };
	    domEvtHandler._callback = callback;
	    core._defineSpecial(object, key);
	    bindHandler._callback = unbindHandler._callback = callback;
	    if (core._addListener(object, 'bind:' + key, bindHandler, context, evtData) && core._addListener(object, 'unbind:' + key, unbindHandler, context, evtData)) {
	      bindHandler({ $nodes: objectData.special[key] && objectData.special[key].$nodes });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map);
	matreshka_dir_core_events_removedomlistener = function (core, map) {
	  core._removeDOMListener = function (object, key, domEvtName, selector, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object);
	    if (!objectData)
	      return object;
	    selector = selector || null;
	    evtData = evtData || {};
	    if (key && objectData.special[key]) {
	      objectData.special[key].$nodes.off(domEvtName + '.' + objectData.id + key, selector, callback);
	      core._removeListener(object, 'bind:' + key, callback, context, evtData);
	      core._removeListener(object, 'unbind:' + key, callback, context, evtData);
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_once = function (core, initMK) {
	  var once = core.once = function (object, names, callback, context, evtData) {
	    var i;
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    if (typeof names == 'object') {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          once(object, i, names[i], callback, context);
	        }
	      return object;
	    }
	    if (!callback)
	      throw Error('callback is not function for event "' + names + '"');
	    initMK(object);
	    names = names.split(/\s+/);
	    for (i = 0; i < names.length; i++) {
	      (function (name) {
	        var once = function (func) {
	          var ran = false, memo;
	          return function () {
	            if (ran)
	              return memo;
	            ran = true;
	            memo = func.apply(this, arguments);
	            func = null;
	            return memo;
	          };
	        }(callback);
	        once._callback = callback;
	        core.on(object, name, once, context);
	      }(names[i]));
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_events_ondebounce = function (core, initMK, util) {
	  var onDebounce = core.onDebounce = function (object, names, callback, debounceDelay, triggerOnInit, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var cbc, i;
	    if (typeof names == 'object') {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          onDebounce(object, i, names[i], callback, debounceDelay, triggerOnInit, context);
	        }
	      return object;
	    }
	    // flip args
	    if (typeof debounceDelay != 'number') {
	      evtData = context;
	      context = triggerOnInit;
	      triggerOnInit = debounceDelay;
	      debounceDelay = 0;
	    }
	    cbc = util.debounce(callback, debounceDelay);
	    // set reference to real callback for .off method
	    cbc._callback = callback;
	    return core.on(object, names, cbc, triggerOnInit, context, evtData);
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_matreshka_magic = function (core, map) {
	  core.map = map;
	  return core;
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_dynamic = function (magic, map) {
	  /*
	  
	  	This is the list of methods that inherited from magic. We need a way how to
	  	inherit them dynamically. method.apply is slow	*/
	  return {
	    isMK: true,
	    on: function (names, callback, triggerOnInit, context, evtData) {
	      return magic.on(this, names, callback, triggerOnInit, context, evtData);
	    },
	    onDebounce: function (names, callback, debounceDelay, triggerOnInit, context, evtData) {
	      return magic.onDebounce(this, names, callback, debounceDelay, triggerOnInit, context, evtData);
	    },
	    once: function (names, callback, context) {
	      return magic.once(this, names, callback, context);
	    },
	    off: function (names, callback, context) {
	      return magic.off(this, names, callback, context);
	    },
	    trigger: function () {
	      var args = magic.toArray(arguments);
	      args.unshift(this);
	      return magic.trigger.apply(magic, args);
	    },
	    bindNode: function (key, node, binder, evt, optional) {
	      return magic.bindNode(this, key, node, binder, evt, optional);
	    },
	    bindOptionalNode: function (key, node, binder, evt) {
	      return magic.bindOptionalNode(this, key, node, binder, evt);
	    },
	    bindSandbox: function (node, evt) {
	      return magic.bindSandbox(this, node, evt);
	    },
	    unbindNode: function (key, node, evt) {
	      return magic.unbindNode(this, key, node, evt);
	    },
	    boundAll: function (key) {
	      return magic.boundAll(this, key);
	    },
	    $bound: function (key) {
	      return magic.boundAll(this, key);
	    },
	    bound: function (key) {
	      return magic.bound(this, key);
	    },
	    selectAll: function (s) {
	      return magic.selectAll(this, s);
	    },
	    $: function (s) {
	      return magic.selectAll(this, s);
	    },
	    select: function (s) {
	      return magic.select(this, s);
	    },
	    defineGetter: function (key, getter) {
	      return magic.defineGetter(this, key, getter);
	    },
	    defineSetter: function (key, setter) {
	      return magic.defineSetter(this, key, setter);
	    },
	    mediate: function (keys, mediator) {
	      return magic.mediate(this, keys, mediator);
	    },
	    setClassFor: function (keys, Class, updateFunction) {
	      return magic.setClassFor(this, keys, Class, updateFunction);
	    },
	    linkProps: function (key, keys, getter, setOnInit) {
	      return magic.linkProps(this, key, keys, getter, setOnInit);
	    },
	    get: function (key) {
	      return this[key];
	    },
	    set: function (key, v, evt) {
	      return magic.set(this, key, v, evt);
	    },
	    remove: function (key, evt) {
	      return magic.remove(this, key, evt);
	    },
	    define: function (key, descriptor) {
	      return magic.define(this, key, descriptor);
	    },
	    delay: function (f, delay, thisArg) {
	      var _this = this;
	      if (typeof delay == 'object') {
	        thisArg = delay;
	        delay = 0;
	      }
	      setTimeout(function () {
	        f.call(thisArg || _this);
	      }, delay || 0);
	      return _this;
	    },
	    parseBindings: function (nodes) {
	      return magic.parseBindings(this, nodes);
	    },
	    _initMK: function () {
	      var _this = this;
	      if (map.has(_this))
	        return _this;
	      magic.initMK(_this);
	      _this.nodes = {};
	      _this.$nodes = {};
	      _this.sandbox = null;
	      _this.$sandbox = magic.$();
	      return _this;
	    },
	    toString: function () {
	      return '[object Matreshka]';
	    },
	    constructor: function Matreshka() {
	      /* istanbul ignore if  */
	      if (!(this instanceof Matreshka)) {
	        throw new TypeError('Cannot call a class as a function');
	      }
	      return this._initMK();
	    }
	  };
	}(matreshka_dir_matreshka_magic, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_static = function (Class) {
	  return {
	    version: 'dev',
	    Class: Class
	  };
	}(matreshka_dir_xclass);
	matreshka_dir_matreshkaclass = function (Class, magic, dynamic, _static) {
	  /* istanbul ignore if  */
	  if (!Class)
	    throw Error('Class function is missing');
	  _static.to = function (data) {
	    var result, i;
	    if (typeof data == 'object') {
	      if ('length' in data) {
	        result = [];
	        for (i = 0; i < data.length; i++) {
	          result[i] = MK.to(data[i]);
	        }
	        result = new MK.Array().recreate(result);
	      } else {
	        result = {};
	        for (i in data) {
	          if (data.hasOwnProperty(i)) {
	            result[i] = MK.to(data[i]);
	          }
	        }
	        result = new MK.Object(result);
	      }
	    } else {
	      result = data;
	    }
	    return result;
	  };
	  var MK = Class(dynamic, _static);
	  MK.setProto = function (proto) {
	    /* jshint proto: true */
	    var __proto__ = '__proto__', prototype = MK.prototype;
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(MK.prototype, proto);
	    } else {
	      if (!(__proto__ in MK.prototype)) {
	        Object.defineProperty(prototype, __proto__, Object.getOwnPropertyDescriptor(Object.prototype, __proto__));
	      }
	      MK.prototype[__proto__] = proto;
	    }
	    return MK;
	  };
	  return magic.extend(MK.Matreshka = MK.prototype.Matreshka = MK, magic);
	}(matreshka_dir_xclass, matreshka_dir_matreshka_magic, matreshka_dir_matreshka_dynamic, matreshka_dir_matreshka_static);
	matreshka_dir_matreshka_object_dynamic = function (map, MK) {
	  return {
	    keys: function () {
	      var _this = this._initMK(), keys = map.get(_this).keys, result = [], p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          result.push(p);
	        }
	      return result;
	    },
	    toObject: function () {
	      var _this = this._initMK(), o = {}, keys = map.get(_this).keys, p;
	      for (p in keys) {
	        if (keys.hasOwnProperty(p)) {
	          o[p] = _this[p];
	        }
	      }
	      return o;
	    },
	    toNative: function () {
	      return this.toObject();
	    },
	    toJSON: function () {
	      var _this = this._initMK(), JSON = {}, keys = map.get(_this).keys, p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          JSON[p] = _this[p] && _this[p].toJSON ? _this[p].toJSON() : _this[p];
	        }
	      return JSON;
	    },
	    keyOf: function (o) {
	      var _this = this._initMK(), keys = map.get(_this).keys, p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          if (o && o.isMK) {
	            if (o.eq(_this[p])) {
	              return p;
	            }
	          } else if (o === _this[p]) {
	            return p;
	          }
	        }
	      return null;
	    },
	    jset: function (key, v, evt) {
	      var _this = this._initMK(), type = typeof key, objectData = map.get(_this), i;
	      if (type == 'undefined')
	        return _this;
	      if (key && type == 'object') {
	        key = key.toJSON ? key.toJSON() : key;
	        for (i in key) {
	          objectData.keys[i] = 1;
	          MK._defineSpecial(_this, i);
	          _this.set(i, key[i], v);
	        }
	        return _this;
	      }
	      objectData.keys[key] = 1;
	      MK._defineSpecial(_this, key);
	      return _this.set(key, v, evt);
	    },
	    addDataKeys: function (keys) {
	      var _this = this._initMK(), objectData = map.get(_this), args = arguments, i;
	      if (!args.length || !keys)
	        return _this;
	      keys = args.length > 1 ? args : keys instanceof Array ? keys : MK.trim(keys).split(/\s+/);
	      for (i = 0; i < keys.length; i++) {
	        if (!objectData.keys[keys[i]]) {
	          objectData.keys[keys[i]] = 1;
	          MK._defineSpecial(_this, keys[i]);
	          MK._fastTrigger(_this, 'modify', {
	            key: keys[i],
	            value: _this[keys[i]]
	          });
	        }
	      }
	      return _this;
	    },
	    removeDataKeys: function (keys) {
	      var _this = this._initMK(), objectData = map.get(_this), args = arguments, i, evt;
	      if (!args.length || !keys)
	        return _this;
	      keys = args.length > 1 ? args : keys instanceof Array ? keys : MK.trim(keys).split(/\s+/);
	      for (i = 0; i < keys.length; i++) {
	        if (objectData.keys[keys[i]]) {
	          delete objectData.keys[keys[i]];
	          evt = {
	            key: keys[i],
	            value: _this[keys[i]]
	          };
	          MK._fastTrigger(_this, 'remove', evt);
	          MK._fastTrigger(_this, 'modify', evt);
	        }
	      }
	      return _this;
	    },
	    each: function (callback, thisArg) {
	      var _this = this._initMK(), objectData = map.get(_this), p;
	      for (p in objectData.keys)
	        if (objectData.keys.hasOwnProperty(p)) {
	          callback.call(thisArg, _this[p], p, _this);
	        }
	      return _this;
	    }
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_object_iterator = function () {
	  var _this = this, keys = _this.keys(), i = 0;
	  return {
	    next: function () {
	      if (i > keys.length - 1) {
	        return { done: true };
	      } else {
	        return {
	          done: false,
	          value: _this[keys[i++]]
	        };
	      }
	    }
	  };
	};
	matreshka_dir_core_var_sym_iterator = typeof Symbol != 'undefined' ? Symbol.iterator : '@@iterator';
	matreshka_dir_matreshka_objectclass = function (MK, dynamic, iterator, symIterator, map) {
	  /* istanbul ignore if  */
	  if (!MK)
	    throw new Error('Matreshka is missing');
	  var i, prototype = {
	      'extends': MK,
	      isMKObject: true,
	      renderer: null,
	      constructor: function MatreshkaObject(object) {
	        /* istanbul ignore if  */
	        if (!(this instanceof MatreshkaObject)) {
	          throw new TypeError('Cannot call a class as a function');
	        }
	        return this.jset(object);
	      },
	      _initMK: function () {
	        var _this = this, objectData, addedEvents;
	        if (map.has(_this))
	          return _this;
	        MK.prototype._initMK.call(_this);
	        objectData = map.get(_this);
	        objectData.keys = {};
	        MK._fastAddListener(_this, 'addevent:modify', function (evt) {
	          if (!addedEvents) {
	            MK._fastAddListener(_this, 'change', function (evt) {
	              if (evt && evt.key in objectData.keys && !evt.silent) {
	                MK._fastTrigger(_this, 'modify', evt);
	              }
	            });
	            MK._fastAddListener(_this, 'delete', function (evt) {
	              if (evt && evt.key in objectData.keys) {
	                delete objectData.keys[evt.key];
	                if (!evt.silent) {
	                  MK._fastTrigger(_this, 'remove', evt);
	                  MK._fastTrigger(_this, 'modify', evt);
	                }
	              }
	            });
	            addedEvents = true;
	          }
	        });
	        return _this;
	      },
	      hasOwnProperty: function (key) {
	        return map.get(this._initMK()).keys.hasOwnProperty(key);
	      }
	    };
	  MK.extend(prototype, dynamic);
	  prototype[symIterator] = iterator;
	  return MK.Object = MK.Class(prototype);
	}(matreshka_dir_matreshkaclass, matreshka_dir_matreshka_object_dynamic, matreshka_dir_matreshka_object_iterator, matreshka_dir_core_var_sym_iterator, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_array_processrendering = function (map, initMK, MK) {
	  var getNode = function (_this, item, evt) {
	    var thisData = map.get(_this), itemData = map.get(item), id = thisData.id, $ = MK.$, arraysNodes = itemData.arraysNodes = itemData.arraysNodes || {}, node = arraysNodes[id], itemRenderer = _this.itemRenderer, renderer = item.renderer, usedRenderer = renderer || itemRenderer, isOwnRenderer = usedRenderer === renderer, rendererContext = isOwnRenderer ? item : _this, knownRendererNode = itemData.rendererNode, rendererHasBindings = itemData.rendererHasBindings, knownItemRendererNode = thisData.itemRendererNode, itemRendererHasBindings = thisData.itemRendererHasBindings, useBindingsParser = _this.useBindingsParser !== false, useCache = true, hasBindings = false, wrapper, sandboxes, i;
	    if (!usedRenderer)
	      return;
	    if (evt.moveSandbox) {
	      if (node = MK.bound(item, ['sandbox'])) {
	        arraysNodes[id] = node;
	      }
	      return node;
	    }
	    if (node) {
	      if (evt.forceRerender) {
	        sandboxes = MK.boundAll(item, ['sandbox']);
	        for (i = 0; i < sandboxes.length; i++) {
	          if (node == sandboxes[i]) {
	            MK.unbindNode(item, 'sandbox', node);
	            break;
	          }
	        }
	        node = arraysNodes[id] = null;
	      } else {
	        return node;
	      }
	    }
	    if (!evt.forceRerender && typeof usedRenderer != 'function') {
	      if (knownRendererNode) {
	        if (rendererHasBindings && useBindingsParser) {
	          node = MK.parseBindings(item, knownRendererNode.cloneNode(true))[0];
	        } else {
	          node = knownRendererNode.cloneNode(true);
	        }
	      }
	      if (knownItemRendererNode) {
	        if (itemRendererHasBindings && useBindingsParser) {
	          node = MK.parseBindings(item, knownItemRendererNode.cloneNode(true))[0];
	        } else {
	          node = knownItemRendererNode.cloneNode(true);
	        }
	      }
	    }
	    if (!node) {
	      if (typeof usedRenderer == 'function') {
	        useCache = false;
	        usedRenderer = usedRenderer.call(rendererContext, item);
	      }
	      if (typeof usedRenderer == 'string') {
	        if (!/</.test(usedRenderer)) {
	          usedRenderer = MK._getNodes(rendererContext, usedRenderer)[0];
	          if (usedRenderer) {
	            usedRenderer = usedRenderer.innerHTML;
	          } else {
	            throw Error('renderer node is missing');
	          }
	        }
	        if (/{{/.test(usedRenderer)) {
	          hasBindings = true;
	        }
	        usedRenderer = $.parseHTML(MK.trim(usedRenderer));
	        if (usedRenderer.length > 1) {
	          wrapper = document.createElement('span');
	          for (i = 0; i < usedRenderer.length; i++) {
	            wrapper.appendChild(usedRenderer[i]);
	          }
	          usedRenderer = wrapper;
	        } else {
	          usedRenderer = usedRenderer[0];
	        }
	      }
	      if (useCache) {
	        if (isOwnRenderer) {
	          itemData.rendererNode = usedRenderer;
	          itemData.rendererHasBindings = hasBindings;
	        } else {
	          thisData.itemRendererNode = usedRenderer;
	          thisData.itemRendererHasBindings = hasBindings;
	        }
	      } else {
	        if (isOwnRenderer) {
	          itemData.rendererNode = null;
	          itemData.rendererHasBindings = false;
	        } else {
	          thisData.itemRendererNode = null;
	          thisData.itemRendererHasBindings = false;
	        }
	      }
	      if (hasBindings && useBindingsParser) {
	        node = MK.parseBindings(item, usedRenderer.cloneNode(true))[0];
	      } else {
	        node = usedRenderer.cloneNode(true);
	      }
	    }
	    return arraysNodes[id] = node;
	  };
	  var renderOne = function (_this, item, evt) {
	    var itemEvt, node, objectData;
	    if (!item || typeof item != 'object' || !_this.renderIfPossible || evt.dontRender)
	      return;
	    initMK(item);
	    objectData = map.get(item);
	    node = getNode(_this, item, evt);
	    if (!node)
	      return;
	    if (item.bindRenderedAsSandbox !== false) {
	      MK.bindSandbox(item, node);
	    }
	    if (!evt.silent) {
	      itemEvt = {
	        node: node,
	        $nodes: MK.$(node),
	        self: item,
	        parentArray: _this
	      };
	      item.onRender && item.onRender(itemEvt);
	      _this.onItemRender && _this.onItemRender(item, itemEvt);
	      MK._fastTrigger(item, 'render', itemEvt);
	      // TODO make this code smarter, don't use setTimeout
	      objectData.events.afterrender && setTimeout(function () {
	        MK._fastTrigger(item, 'afterrender', itemEvt);
	      }, 0);
	    }
	    return node;
	  };
	  return function (_this, evt) {
	    var objectData = map.get(_this), id = objectData.id, l = _this.length, added = evt.added, removed = evt.removed, addedLength = added && added.length, removedLength = removed && removed.length, container = objectData.special.container || objectData.special.sandbox, node, next, i, item, itemData;
	    container = container && container.$nodes;
	    container = container && container[0];
	    if (!container)
	      return _this;
	    switch (evt.method) {
	    case 'push':
	      for (i = l - addedLength; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'unshift':
	      for (i = addedLength - 1; i + 1; i--) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          if (container.firstChild) {
	            container.insertBefore(node, container.firstChild);
	          } else {
	            container.appendChild(node);
	          }
	        }
	      }
	      break;
	    case 'pull':
	    case 'pop':
	    case 'shift':
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      break;
	    case 'sort':
	    case 'reverse':
	      for (i = 0; i < l; i++) {
	        item = _this[i];
	        itemData = map.get(item);
	        if (node = itemData && itemData.arraysNodes[id]) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'rerender':
	      if (evt.forceRerender) {
	        for (i = 0; i < l; i++) {
	          item = _this[i];
	          itemData = map.get(item);
	          node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	          if (node) {
	            container.removeChild(node);
	          }
	        }
	      }
	      for (i = 0; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'recreate':
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      for (i = 0; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'splice':
	      next = _this[evt.args[0] < 0 ? l + evt.args[0] - addedLength + removedLength - 1 : evt.args[0] - 1];
	      next = map.get(next);
	      next = next && next.arraysNodes;
	      next = next && next[id];
	      next = next && next.nextSibling;
	      next = next || container.firstChild;
	      for (i = 0; i < addedLength; i++) {
	        if (node = renderOne(_this, added[i], evt)) {
	          container.insertBefore(node, next);
	        }
	      }
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      break;
	    }
	    return _this;
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_array_triggermodify = function (MK, map, processRendering) {
	  return function (_this, evt, additional) {
	    var added = evt.added, removed = evt.removed, events = map.get(_this).events, method = evt.method, modified = added.length || removed.length || method == 'sort' || method == 'reverse', i;
	    if (!evt.silent) {
	      if (additional) {
	        events[additional] && MK._fastTrigger(_this, additional, evt);
	      }
	      if (added.length) {
	        events.add && MK._fastTrigger(_this, 'add', evt);
	        if (events.addone) {
	          for (i = 0; i < added.length; i++) {
	            MK._fastTrigger(_this, 'addone', {
	              self: _this,
	              added: added[i]
	            });
	          }
	        }
	      }
	      if (removed.length) {
	        events.remove && MK._fastTrigger(_this, 'remove', evt);
	        if (events.removeone) {
	          for (i = 0; i < removed.length; i++) {
	            MK._fastTrigger(_this, 'removeone', {
	              self: _this,
	              removed: removed[i]
	            });
	          }
	        }
	      }
	      if (modified) {
	        events.modify && MK._fastTrigger(_this, 'modify', evt);
	      }
	    }
	    if (modified && !evt.dontRender) {
	      processRendering(_this, evt);
	    }
	  };
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_var_map, matreshka_dir_matreshka_array_processrendering);
	matreshka_dir_matreshka_array_recreate = function (_this, array) {
	  array = array || [];
	  var diff = _this.length - array.length, prepared, i;
	  for (i = 0; i < array.length; i++) {
	    _this[i] = array[i];
	  }
	  for (i = 0; i < diff; i++) {
	    _this.remove(i + array.length, { silent: true });
	  }
	  _this.length = array.length;
	  return _this;
	};
	matreshka_dir_matreshka_array_native_dynamic = function (MK, util, triggerModify, recreate) {
	  var methods = {}, Array_prototype = Array.prototype, toArray = util.toArray;
	  function createMethod(name, hasOptions) {
	    switch (name) {
	    case 'forEach':
	      return function (callback, thisArg) {
	        var _this = this;
	        Array_prototype[name].call(_this, callback, thisArg);
	        return _this;
	      };
	    case 'map':
	    case 'filter':
	    case 'slice':
	      return function (a, b) {
	        var _this = this;
	        return MK.Array.from(Array_prototype[name].call(_this, a, b));
	      };
	    case 'every':
	    case 'some':
	      return function (callback, thisArg) {
	        var _this = this;
	        return Array_prototype[name].call(_this, callback, thisArg);
	      };
	    case 'join':
	      return function (separator) {
	        var _this = this;
	        return Array_prototype[name].call(_this, separator || ',');
	      };
	    case 'indexOf':
	    case 'lastIndexOf':
	      return function (item) {
	        var _this = this;
	        return Array_prototype[name].call(_this, item);
	      };
	    case 'reduce':
	    case 'reduceRight':
	      return function () {
	        var _this = this;
	        return Array_prototype[name].apply(_this, arguments);
	      };
	    case 'sort':
	    case 'reverse':
	      return function (a, b) {
	        if (this.length <= 1)
	          return _this;
	        var _this = this._initMK(), evt, array, returns, i, _evt;
	        evt = hasOptions ? (name == 'sort' && b ? b : a) || {} : {};
	        returns = Array_prototype[name].call(_this, a);
	        _evt = {
	          method: name,
	          self: _this,
	          added: [],
	          removed: []
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return _this;
	      };
	    case 'pop':
	    case 'shift':
	      return function (evtOptions) {
	        if (!this.length)
	          return;
	        var _this = this._initMK(), evt, array, returns, added, removed, i, _evt;
	        evt = hasOptions ? evtOptions || {} : {};
	        returns = Array_prototype[name].call(_this);
	        _evt = {
	          method: name,
	          self: _this,
	          added: added = [],
	          removed: removed = [returns]
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return returns;
	      };
	    case 'push':
	    case 'unshift':
	      return function () {
	        var _this = this._initMK(), _arguments = arguments, args = new Array(_arguments.length), length = _this.length, argsLength = args.length, evt, array, returns, added, removed, i, _evt;
	        for (i = 0; i < argsLength; i++) {
	          args[i] = _arguments[i];
	        }
	        evt = hasOptions ? args[argsLength - 1] || {} : {};
	        if (hasOptions) {
	          args.pop();
	          argsLength--;
	        }
	        if (!argsLength) {
	          return length;
	        }
	        if (!evt.skipMediator && typeof _this._itemMediator == 'function') {
	          for (i = 0; i < argsLength; i++) {
	            args[i] = _this._itemMediator.call(_this, args[i], name == 'push' ? i + length : i);
	          }
	        }
	        if (name == 'push') {
	          for (i = 0; i < argsLength; i++) {
	            _this[length + i] = args[i];
	          }
	        } else if (name == 'unshift') {
	          for (i = length - 1; i >= 0; i--) {
	            _this[argsLength + i] = _this[i];
	          }
	          for (i = 0; i < argsLength; i++) {
	            _this[i] = args[i];
	          }
	        }
	        _this.length = length = length + argsLength;
	        _evt = {
	          method: name,
	          self: _this,
	          added: args,
	          removed: []
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return length;
	      };
	    case 'splice':
	      return function () {
	        var _this = this._initMK(), _arguments = arguments, args = new Array(_arguments.length), length = _this.length, argsLength = args.length, added = [], start, evt, array, returns, removed, i, _evt;
	        for (i = 0; i < argsLength; i++) {
	          args[i] = _arguments[i];
	        }
	        start = args[0];
	        evt = hasOptions ? args[argsLength - 1] || {} : {};
	        start = start < 0 ? length + start : start;
	        if (hasOptions) {
	          args.pop();
	          argsLength--;
	        }
	        if (!evt.skipMediator && typeof _this._itemMediator == 'function') {
	          for (i = 2; i < argsLength; i++) {
	            args[i] = _this._itemMediator.call(_this, args[i], start + i - 2);
	          }
	        }
	        for (i = 2; i < argsLength; i++) {
	          if (i >= 2) {
	            added[i - 2] = args[i];
	          }
	        }
	        returns = Array_prototype[name].apply(_this, args);
	        removed = returns;
	        if (added.length || removed.length) {
	          _evt = {
	            args: args,
	            method: name,
	            self: _this,
	            added: added,
	            removed: removed
	          };
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	          triggerModify(_this, _evt, name);
	        }
	        return MK.Array.from(returns);
	      };
	    }
	  }
	  'push pop unshift shift sort reverse splice map filter slice every some reduce reduceRight forEach join indexOf lastIndexOf'.split(' ').forEach(function (name) {
	    methods[name] = createMethod(name);
	  });
	  'push pop unshift shift sort reverse splice'.split(' ').forEach(function (name) {
	    methods[name + '_'] = createMethod(name, true);
	  });
	  methods.each = methods.forEach;
	  methods.concat = function () {
	    var args = arguments, result = this.toArray(), arg, i, j;
	    for (i = 0; i < args.length; i++) {
	      arg = args[i];
	      if (arg instanceof Array || arg instanceof MK.Array || arg && arg.instanceOf && arg.instanceOf(MK.Array)) {
	        for (j = 0; j < arg.length; j++) {
	          result.push(arg[j]);
	        }
	      }
	    }
	    return MK.Array.from(result);
	  };
	  methods.toString = function () {
	    return this.toArray().join(',');
	  };
	  return methods;
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_util_common, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate);
	matreshka_dir_matreshka_array_native_static = function (MK) {
	  return {
	    of: function () {
	      var result = new MK.Array(), args = arguments, i;
	      result.length = args.length;
	      for (i = 0; i < args.length; i++) {
	        result[i] = args[i];
	      }
	      return result;
	    },
	    // Doesn't work with maps and sets yet
	    from: function (arrayLike, mapFn, thisArg) {
	      var result = new MK.Array(), i;
	      result.length = arrayLike.length;
	      for (i = 0; i < arrayLike.length; i++) {
	        result[i] = mapFn ? mapFn.call(thisArg, arrayLike[i], i, arrayLike) : arrayLike[i];
	      }
	      return result;
	    }
	  };
	}(matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_array_custom_dynamic = function (map, MK, processRendering, triggerModify, recreate, initMK) {
	  return {
	    mediateItem: function (itemMediator) {
	      var _this = this, l = _this.length, i;
	      _this._itemMediator = itemMediator;
	      for (i = 0; i < l; i++) {
	        _this[i] = itemMediator.call(_this, _this[i], i);
	      }
	      return _this;
	    },
	    recreate: function (array, evt) {
	      array = array || [];
	      var _this = this._initMK(), newLength = array.length, oldLength = _this.length, diff = oldLength - newLength, was = _this.toArray(), trackBy = _this.trackBy, prepared, i, j, _evt, trackMap, added, removed, now;
	      evt = evt || {};
	      function update(instance, data) {
	        var i;
	        if (instance.isMKArray) {
	          instance.recreate(data);
	        } else if (instance.isMKObject) {
	          instance.jset(data);
	        } else {
	          for (i in data) {
	            if (data.hasOwnProperty(i)) {
	              instance[i] = data[i];
	            }
	          }
	        }
	        return instance;
	      }
	      if (trackBy) {
	        trackMap = {};
	        if (trackBy == '$index') {
	          for (i = 0; i < newLength; i++) {
	            array[i] = _this[i] ? update(_this[i], array[i]) : array[i];
	          }
	        } else {
	          for (i = 0; i < _this.length; i++) {
	            trackMap[_this[i][trackBy]] = _this[i];
	          }
	          for (i = 0; i < newLength; i++) {
	            if (array[i][trackBy] in trackMap) {
	              array[i] = update(trackMap[array[i][trackBy]], array[i]);
	            }
	          }
	        }
	      }
	      if (_this._itemMediator && !evt.skipMediator) {
	        prepared = [];
	        for (i = 0; i < newLength; i++) {
	          prepared[i] = _this._itemMediator.call(_this, array[i], i);
	        }
	        array = prepared;
	      }
	      for (i = 0; i < newLength; i++) {
	        _this[i] = array[i];
	      }
	      for (i = 0; i < diff; i++) {
	        delete _this[i + newLength];
	        delete map.get(_this).special[i + newLength];
	      }
	      _this.length = newLength;
	      if (evt.silent && evt.dontRender) {
	        return _this;
	      }
	      now = _this.toArray();
	      if (now.length) {
	        if (was.length) {
	          removed = [];
	          j = 0;
	          for (i = 0; i < was.length; i++) {
	            if (!~now.indexOf(was[i])) {
	              removed[j++] = was[i];
	            }
	          }
	        } else {
	          removed = [];
	        }
	      } else {
	        removed = was;
	      }
	      if (was.length) {
	        if (now.length) {
	          added = [];
	          j = 0;
	          for (i = 0; i < now.length; i++) {
	            if (!~was.indexOf(now[i])) {
	              added[j++] = now[i];
	            }
	          }
	        } else {
	          added = [];
	        }
	      } else {
	        added = now;
	      }
	      _evt = {
	        added: added,
	        removed: removed,
	        was: was,
	        now: now,
	        method: 'recreate',
	        self: _this
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      triggerModify(_this, _evt, 'recreate');
	      return _this;
	    },
	    toArray: function () {
	      var _this = this, array = [], l = _this.length, i;
	      array = [];
	      for (i = 0; i < l; i++) {
	        array[i] = _this[i];
	      }
	      return array;
	    },
	    toNative: function () {
	      return this.toArray();
	    },
	    rerender: function (evt) {
	      var _evt = { method: 'rerender' }, i;
	      if (evt && typeof evt == 'object') {
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	      }
	      return processRendering(this, _evt);
	    },
	    toJSON: function () {
	      var _this = this, JSON = [], l = _this.length, i;
	      for (i = 0; i < l; i++) {
	        _this[i] && _this[i].toJSON ? JSON.push(_this[i].toJSON()) : JSON.push(_this[i]);
	      }
	      return JSON;
	    },
	    pull: function (index, evt) {
	      var _this = this._initMK(), array = _this.toArray(), _index = index, type = typeof index, returns, removed, _evt, i;
	      if (type != 'number' && type != 'string') {
	        index = _this.indexOf(index);
	        if (!~index) {
	          return null;
	        }
	      }
	      returns = array.splice(index, 1)[0] || null;
	      if (returns) {
	        recreate(_this, array, evt);
	        _evt = {
	          returns: returns,
	          args: [_index],
	          method: 'pull',
	          self: _this,
	          added: [],
	          removed: removed = returns ? [returns] : []
	        };
	        if (evt) {
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	        }
	        triggerModify(_this, _evt, 'pull');
	      }
	      return returns;
	    },
	    restore: function (selector, evt) {
	      var _this = this._initMK(), objectData = map.get(_this), id = objectData.id, Model = _this.Model, nodes, node, container, i, item, arraysNodes, itemEvt, result;
	      if (selector) {
	        nodes = MK._getNodes(_this, selector);
	      } else {
	        container = objectData.special.container || objectData.special.sandbox;
	        container = container && container.$nodes;
	        container = container && container[0];
	        nodes = container && container.children;
	      }
	      if (nodes && nodes.length) {
	        result = [];
	        for (i = 0; i < nodes.length; i++) {
	          node = nodes[i];
	          item = Model ? new Model() : {};
	          initMK(item);
	          arraysNodes = objectData.arraysNodes = {};
	          arraysNodes[id] = node;
	          if (item.bindRenderedAsSandbox !== false) {
	            MK.bindNode(item, 'sandbox', node);
	          }
	          if (!evt || !evt.silent) {
	            itemEvt = {
	              node: node,
	              $nodes: MK.$(node),
	              self: item,
	              parentArray: _this
	            };
	            item.onRender && item.onRender(itemEvt);
	            _this.onItemRender && _this.onItemRender(item, itemEvt);
	            MK._fastTrigger(item, 'render', itemEvt);
	          }
	          result[i] = item;
	        }
	        _this.recreate(result, evt);
	      }
	      return _this;
	    },
	    orderBy: function (keys, orders, evt) {
	      var _this = this, _evt, i;
	      if (_this.length > 1) {
	        recreate(_this, MK.orderBy(_this, keys, orders));
	        _evt = {
	          method: 'sort',
	          // allows to listen "sort" event
	          self: _this,
	          added: [],
	          removed: []
	        };
	        if (evt) {
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	        }
	        triggerModify(_this, _evt, 'sort');
	      }
	      return _this;
	    }
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_matreshkaclass, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate, matreshka_dir_core_initmk);
	matreshka_dir_matreshka_array_iterator = function () {
	  var _this = this, i = 0;
	  return {
	    next: function () {
	      if (i > _this.length - 1) {
	        return { done: true };
	      } else {
	        return {
	          done: false,
	          value: _this[i++]
	        };
	      }
	    }
	  };
	};
	matreshka_dir_matreshka_arrayclass = function (MK, map, nDynamic, nStatic, cDynamic, triggerModify, processRendering, iterator, symIterator) {
	  /* istanbul ignore if  */
	  if (!MK)
	    throw new Error('Matreshka is missing');
	  var prototype = {
	    'extends': MK,
	    isMKArray: true,
	    length: 0,
	    itemRenderer: null,
	    renderIfPossible: true,
	    Model: null,
	    constructor: function MatreshkaArray(length) {
	      /* istanbul ignore if  */
	      if (!(this instanceof MatreshkaArray)) {
	        throw new TypeError('Cannot call a class as a function');
	      }
	      var _this = this._initMK(), al = arguments.length, i;
	      if (al == 1 && typeof length == 'number') {
	        _this.length = length;
	      } else {
	        for (i = 0; i < al; i++) {
	          _this[i] = arguments[i];
	        }
	        _this.length = al;
	      }
	      return _this;
	    },
	    _initMK: function () {
	      var _this = this, changeModel;
	      if (map.has(_this))
	        return _this;
	      if ('Model' in _this && _this.Model !== null && typeof _this.Model != 'function') {
	        throw Error('Only function or null are valid values for Model, not "' + typeof _this.Model + '"');
	      }
	      changeModel = function () {
	        var Model = _this.Model;
	        if (Model) {
	          _this.mediateItem(function (item, i) {
	            return !item || !(item.instanceOf ? item.instanceOf(Model) : item instanceof Model) ? new Model(item && item.toJSON ? item.toJSON() : item, _this, i) : item;
	          });
	        }
	      };
	      MK.prototype._initMK.call(_this);
	      MK._fastAddListener(_this, 'change:Model', changeModel);
	      MK._fastAddListener(_this, 'change:itemRenderer', function (evt) {
	        _this.rerender({ forceRerender: evt && 'forceRerender' in evt ? evt.forceRerender : true });
	      });
	      changeModel();
	      return _this;
	    },
	    toJSON: function () {
	      var _this = this, JSON = [], l = _this.length, i;
	      for (i = 0; i < l; i++) {
	        _this[i] && _this[i].toJSON ? JSON[i] = _this[i].toJSON() : JSON[i] = _this[i];
	      }
	      return JSON;
	    },
	    hasOwnProperty: function (p) {
	      return p == 'length' || p < this.length && p >= 0;
	    }
	  };
	  MK.extend(prototype, nDynamic, cDynamic);
	  prototype[symIterator] = iterator;
	  MK.Array = MK.Class(prototype, nStatic);
	  return MK.Array;
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_var_map, matreshka_dir_matreshka_array_native_dynamic, matreshka_dir_matreshka_array_native_static, matreshka_dir_matreshka_array_custom_dynamic, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_iterator, matreshka_dir_core_var_sym_iterator);
	matreshka_dir_amd_modules_matreshka = function (MK, MK_Object, MK_Array, MK_binders) {
	  return MK;
	}(matreshka_dir_matreshkaclass, matreshka_dir_matreshka_objectclass, matreshka_dir_matreshka_arrayclass);
	matreshka = function (MK) {
	  return MK;
	}(matreshka_dir_amd_modules_matreshka);
	 matreshka.version="1.7.1";									(function () {
				// hack for systemjs builder
				var d = "define";
				// I don't know how to define modules with no dependencies (since we use AMDClean)
				// so I have to hack it, unfortunatelly
				if (typeof __root != 'undefined') {
					/* global matreshka, balalaika, matreshka_magic, xclass, __root */
					if (true) {
						if (__root[d]) {
							__root[d]('matreshka', function() {
								return matreshka;
							});
							__root[d]('bquery', function() {
								return matreshka.$b;
							});
							__root[d]('balalaika', function() {
								return matreshka.$b;
							});
							__root[d]('xclass', function() {
								return matreshka.Class;
							});
							__root[d]('matreshka-magic', function() {
								return matreshka_magic;
							});
						}
	
						!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
							return matreshka;
						}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if (typeof exports == "object") {
						module.exports = matreshka;
					} else {
						__root.Matreshka = __root.MK = matreshka;
						__root.$b = matreshka.$b;
						__root.Class = matreshka.Class;
					}
				}
			})()								})(typeof window != "undefined" ? window : Function("return this")());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(3), __webpack_require__(16), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MK, SimpleTab, BatchTab, DiffTab) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var Tabs = function (_MK$Object) {
			_inherits(Tabs, _MK$Object);
	
			function Tabs(data, parent) {
				var _this;
	
				_classCallCheck(this, Tabs);
	
				(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, {
					simple: { title: 'Simple' },
					batch: { title: 'Batch' },
					diff: { title: 'Diff' }
				})), _this).bindNode({
					sandbox: 'main',
					container: '.tabs'
				}).setClassFor({
					simple: SimpleTab,
					batch: BatchTab,
					diff: DiffTab
				}).on({
					'*@click::tabHeader': function clickTabHeader(evt) {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;
	
						try {
							for (var _iterator = _this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var tab = _step.value;
	
								tab.active = evt.target.dataset.tab == tab.name;
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					}
				}).on({
					'*@change:active': function changeActive(evt) {
						if (evt.value) {
							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;
	
							try {
								for (var _iterator2 = _this[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var tab = _step2.value;
	
									tab.active = tab === evt.self;
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						}
					}
				}, true);
				return _this;
			}
	
			return Tabs;
		}(MK.Object);
	
		return Tabs;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Tab, CodeMirror) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
	
			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var SimpleTab = function (_Tab) {
			_inherits(SimpleTab, _Tab);
	
			function SimpleTab() {
				var _Object$getPrototypeO;
	
				_classCallCheck(this, SimpleTab);
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SimpleTab)).call.apply(_Object$getPrototypeO, [this].concat(args)));
			}
	
			_createClass(SimpleTab, [{
				key: 'initialize',
				value: function initialize() {
					this.editor = CodeMirror(this.nodes.content, {
						lineNumbers: true,
						mode: "text/html",
						jsonlint: true,
						viewportMargin: Infinity
					});
	
					return this;
				}
			}]);
	
			return SimpleTab;
		}(Tab);
	
		return SimpleTab;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MK) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var className = MK.binders.className;
	
		var Tab = function (_MK$Object) {
			_inherits(Tab, _MK$Object);
	
			function Tab(data, parent, name) {
				var _this;
	
				_classCallCheck(this, Tab);
	
				(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, data)), _this).set({
					parent: parent,
					name: name,
					active: false
				}).bindNode({
					tabHeader: parent.select('.tab-nav [data-tab="' + name + '"]'),
					sandbox: parent.select('#' + name),
					content: ':sandbox .content'
				}).on({
					'change:active': function changeActive(evt) {
						if (!_this.initialized) {
							setTimeout(function () {
								// need little timeout
								_this.initialize();
							}, 300);
	
							_this.initialized = true;
						}
					}
				}).bindNode('active', ':bound(tabHeader), :sandbox', className('active'), {
					assignDefaultValue: true
				});
				return _this;
			}
	
			return Tab;
		}(MK.Object);
	
		return Tab;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(CodeMirror) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(8), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
	  Object.assign(window, __webpack_require__(14));
	  __webpack_require__(15);
	
	  return CodeMirror;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .
	
	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";
	
	  // BROWSER SNIFFING
	
	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;
	
	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);
	
	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var windows = /win/i.test(platform);
	
	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);
	
	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;
	
	  // EDITOR CONSTRUCTOR
	
	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.
	
	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);
	
	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);
	
	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;
	
	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);
	
	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };
	
	    var cm = this;
	
	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);
	
	    registerEventHandlers(this);
	    ensureGlobalHandlers();
	
	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);
	
	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);
	
	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }
	
	  // DISPLAY CONSTRUCTOR
	
	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.
	
	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;
	
	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
	
	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;
	
	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }
	
	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;
	
	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;
	
	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;
	
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	
	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;
	
	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;
	
	    // True when shift is held down.
	    d.shift = false;
	
	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;
	
	    d.activeTouch = null;
	
	    input.init(d);
	  }
	
	  // STATE UPDATES
	
	  // Used to get the editor into a consistent state again when options change.
	
	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }
	
	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }
	
	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }
	
	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;
	
	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }
	
	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }
	
	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }
	
	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }
	
	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }
	
	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }
	
	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }
	
	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }
	
	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }
	
	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }
	
	  // SCROLLBARS
	
	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }
	
	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);
	
	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });
	
	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }
	
	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;
	
	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }
	
	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }
	
	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }
	
	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);
	
	  function NullScrollbars() {}
	
	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);
	
	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};
	
	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }
	
	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }
	
	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }
	
	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);
	
	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"
	
	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }
	
	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;
	
	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }
	
	  // LINE NUMBERS
	
	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter && view[i].gutter)
	        view[i].gutter.style.left = left;
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }
	
	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }
	
	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }
	
	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }
	
	  // DISPLAY DRAWING
	
	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;
	
	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }
	
	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };
	
	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }
	
	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;
	
	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }
	
	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;
	
	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }
	
	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }
	
	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);
	
	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";
	
	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;
	
	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();
	
	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;
	
	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }
	
	    display.updateLineNumbers = null;
	
	    return true;
	  }
	
	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;
	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	    }
	
	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }
	
	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      setDocumentHeight(cm, barMeasure);
	      updateScrollbars(cm, barMeasure);
	      update.finish();
	    }
	  }
	
	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    cm.display.heightForcer.style.top = measure.docHeight + "px";
	    cm.display.gutters.style.height = Math.max(measure.docHeight + cm.display.barHeight + scrollGap(cm),
	                                               measure.clientHeight) + "px";
	  }
	
	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }
	
	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }
	
	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }
	
	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;
	
	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }
	
	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }
	
	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }
	
	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }
	
	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }
	
	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }
	
	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }
	
	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }
	
	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }
	
	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }
	
	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;
	
	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }
	
	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }
	
	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }
	
	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }
	
	  // POSITION OBJECT
	
	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };
	
	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };
	
	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }
	
	  // INPUT HANDLING
	
	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }
	
	  // This will be set to an array of strings when copying, so that,
	  // when pasting, we know what kind of selections the copied text
	  // was made out of.
	  var lastCopied = null;
	
	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;
	
	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null;
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }
	
	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);
	
	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }
	
	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }
	
	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;
	
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }
	
	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }
	
	  function disableBrowserMagic(field) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", "false");
	  }
	
	  // TEXTAREA INPUT STYLE
	
	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";
	
	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };
	
	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }
	
	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;
	
	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);
	
	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";
	
	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });
	
	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return
	
	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });
	
	      function prepareCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);
	
	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });
	
	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });
	
	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },
	
	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);
	
	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }
	
	      return result;
	    },
	
	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },
	
	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },
	
	    getField: function() { return this.textarea; },
	
	    supportsTouch: function() { return false; },
	
	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },
	
	    blur: function() { this.textarea.blur(); },
	
	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },
	
	    receivedFocus: function() { this.slowPoll(); },
	
	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },
	
	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },
	
	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;
	
	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }
	
	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;
	
	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);
	
	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;
	
	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },
	
	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },
	
	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },
	
	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.
	
	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
	
	      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	      input.wrapper.style.cssText = "position: absolute"
	      var wrapperBox = input.wrapper.getBoundingClientRect()
	      te.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - wrapperBox.top - 5) +
	        "px; left: " + (e.clientX - wrapperBox.left - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);
	
	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.cssText = oldWrapperCSS
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
	
	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }
	
	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },
	
	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },
	
	    setUneditable: nothing,
	
	    needsContentAttribute: false
	  }, TextareaInput.prototype);
	
	  // CONTENTEDITABLE INPUT STYLE
	
	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }
	
	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div);
	
	      on(div, "paste", function(e) {
	        if (!signalDOMEvent(cm, e)) handlePaste(e, cm);
	      })
	
	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });
	
	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });
	
	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });
	
	      function onCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = cm.getSelections();
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = ranges.text;
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        // iOS exposes the clipboard API, but seems to discard content inserted into it
	        if (e.clipboardData && !ios) {
	          e.preventDefault();
	          e.clipboardData.clearData();
	          e.clipboardData.setData("text/plain", lastCopied.join("\n"));
	        } else {
	          // Old-fashioned briefly-focus-a-textarea hack
	          var kludge = hiddenTextarea(), te = kludge.firstChild;
	          cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	          te.value = lastCopied.join("\n");
	          var hadFocus = document.activeElement;
	          selectInput(te);
	          setTimeout(function() {
	            cm.display.lineSpace.removeChild(kludge);
	            hadFocus.focus();
	          }, 50);
	        }
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },
	
	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },
	
	    showSelection: function(info) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },
	
	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;
	
	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;
	
	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }
	
	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },
	
	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },
	
	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },
	
	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },
	
	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },
	
	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },
	
	    supportsTouch: function() { return true; },
	
	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });
	
	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },
	
	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },
	
	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },
	
	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;
	
	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }
	
	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }
	
	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;
	
	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);
	
	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },
	
	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },
	
	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },
	
	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },
	
	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },
	
	    onContextMenu: nothing,
	    resetPosition: nothing,
	
	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);
	
	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);
	
	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }
	
	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }
	
	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }
	
	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }
	
	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;
	
	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);
	
	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	  }
	
	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }
	
	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};
	
	  // SELECTION / CURSOR
	
	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }
	
	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };
	
	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }
	
	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };
	
	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }
	
	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }
	
	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }
	
	  // SELECTION UPDATES
	
	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.
	
	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }
	
	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }
	
	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }
	
	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }
	
	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }
	
	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }
	
	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }
	
	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }
	
	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);
	
	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));
	
	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }
	
	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;
	
	    doc.sel = sel;
	
	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }
	
	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }
	
	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }
	
	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;
	
	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft) near = movePos(doc, near, -dir, line);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }
	
	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight) far = movePos(doc, far, dir, line);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }
	
	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }
	
	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }
	
	  // SELECTION DRAWING
	
	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }
	
	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();
	
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }
	
	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);
	
	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
	
	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }
	
	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
	
	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }
	
	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }
	
	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }
	
	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }
	
	    output.appendChild(fragment);
	  }
	
	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }
	
	  // HIGHLIGHT WORKER
	
	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }
	
	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];
	
	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }
	
	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }
	
	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }
	
	  // POSITION MEASUREMENT
	
	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }
	
	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }
	
	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }
	
	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }
	
	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }
	
	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }
	
	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }
	
	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);
	
	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }
	
	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }
	
	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};
	
	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }
	
	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;
	
	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
	          rect = node.parentNode.getBoundingClientRect();
	        } else if (ie && cm.options.lineWrapping) {
	          var rects = range(node, start, end).getClientRects();
	          if (rects.length)
	            rect = rects[bias == "right" ? rects.length - 1 : 0];
	          else
	            rect = nullRect;
	        } else {
	          rect = range(node, start, end).getBoundingClientRect() || nullRect;
	        }
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }
	
	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }
	
	    return result;
	  }
	
	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }
	
	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }
	
	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }
	
	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }
	
	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }
	
	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }
	
	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }
	
	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }
	
	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }
	
	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }
	
	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }
	
	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }
	
	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;
	
	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }
	
	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
	
	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }
	
	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;
	
	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var xDiff = x - (ch == from ? fromX : toX);
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
	                              xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }
	
	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }
	
	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }
	
	  // OPERATIONS
	
	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.
	
	  var operationGroup = null;
	
	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }
	
	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }
	
	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;
	
	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }
	
	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }
	
	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);
	
	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }
	
	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }
	
	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);
	
	    op.barMeasure = measureForScrollbars(cm);
	
	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }
	
	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection();
	  }
	
	  function endOperation_W2(op) {
	    var cm = op.cm;
	
	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }
	
	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);
	
	    if (op.selectionChanged) restartBlink(cm);
	
	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus()))
	      ensureFocus(op.cm);
	  }
	
	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;
	
	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);
	
	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;
	
	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }
	
	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");
	
	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;
	
	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }
	
	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	
	  // VIEW TRACKING
	
	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }
	
	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }
	
	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;
	
	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;
	
	    cm.curOp.viewChanged = true;
	
	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }
	
	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }
	
	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;
	
	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }
	
	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }
	
	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }
	
	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }
	
	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }
	
	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }
	
	  // EVENT HANDLERS
	
	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});
	
	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);
	
	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });
	
	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});
	
	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });
	
	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function() {clearDragCursor(cm);}
	    };
	
	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", bind(onFocus, cm));
	    on(inp, "blur", bind(onBlur, cm));
	  }
	
	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }
	
	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }
	
	  // MOUSE EVENTS
	
	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }
	
	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;
	
	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }
	
	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) return;
	    display.shift = e.shiftKey;
	
	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();
	
	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }
	
	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();
	
	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }
	
	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }
	
	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }
	
	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);
	
	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }
	
	    if (e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }
	
	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }
	
	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;
	
	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }
	
	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;
	
	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }
	
	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }
	
	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }
	
	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);
	
	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();
	
	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;
	
	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }
	
	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }
	
	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;
	
	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;
	
	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey))
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }
	
	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;
	
	    e.dataTransfer.setData("Text", cm.getSelection());
	
	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }
	
	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }
	
	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }
	
	  // SCROLL EVENTS
	
	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }
	
	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.
	
	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;
	
	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };
	
	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
	
	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;
	
	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }
	
	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }
	
	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }
	
	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }
	
	  // KEY EVENTS
	
	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }
	
	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }
	
	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);
	
	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);
	
	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }
	
	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }
	
	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;
	
	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }
	
	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }
	
	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }
	
	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }
	
	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");
	
	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }
	
	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }
	
	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }
	
	  // FOCUS/BLUR EVENTS
	
	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }
	
	  function onFocus(cm) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;
	
	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm) {
	    if (cm.state.delayingBlurEvent) return;
	
	    if (cm.state.focused) {
	      signal(cm, "blur", cm);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }
	
	  // CONTEXT MENU HANDLING
	
	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }
	
	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }
	
	  // UPDATING
	
	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };
	
	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);
	
	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }
	
	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }
	
	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }
	
	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }
	
	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);
	
	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }
	
	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }
	
	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }
	
	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }
	
	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
	
	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];
	
	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }
	
	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits) return;
	
	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;
	
	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;
	
	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }
	
	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;
	
	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");
	
	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }
	
	      antiChanges.push(historyChangeFromChange(doc, change));
	
	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];
	
	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }
	
	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }
	
	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
	
	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;
	
	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }
	
	    change.removed = getBetween(doc, change.from, change.to);
	
	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }
	
	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;
	
	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }
	
	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);
	
	    updateDoc(doc, change, spans, estimateHeight(cm));
	
	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }
	
	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);
	
	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);
	
	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }
	
	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }
	
	  // SCROLLING THINGS INTO VIEW
	
	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;
	
	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }
	
	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }
	
	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }
	
	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }
	
	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }
	
	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }
	
	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }
	
	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }
	
	  // API UTILITIES
	
	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }
	
	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);
	
	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);
	
	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }
	
	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }
	
	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }
	
	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return false
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return false
	      } else ch = next;
	      return true;
	    }
	
	    if (unit == "char") {
	      moveOnce()
	    } else if (unit == "column") {
	      moveOnce(true)
	    } else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }
	
	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!cmp(pos, result)) result.hitSide = true;
	    return result;
	  }
	
	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }
	
	  // EDITOR METHODS
	
	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.
	
	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.
	
	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},
	
	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },
	
	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},
	
	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },
	
	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      this.state.overlays.push({mode: mode, modeSpec: spec, opaque: options && options.opaque});
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),
	
	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),
	
	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },
	
	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },
	
	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },
	
	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },
	
	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },
	
	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },
	
	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },
	
	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },
	
	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },
	
	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },
	
	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },
	
	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },
	
	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),
	
	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),
	
	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },
	
	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},
	
	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },
	
	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,
	
	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },
	
	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),
	
	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },
	
	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),
	
	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),
	
	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },
	
	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),
	
	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },
	
	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
	
	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },
	
	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },
	
	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;
	
	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),
	
	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),
	
	    operation: function(f){return runInOp(this, f);},
	
	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),
	
	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),
	
	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);
	
	  // OPTION DEFAULTS
	
	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};
	
	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }
	
	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};
	
	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);
	
	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);
	
	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);
	
	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);
	
	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);
	
	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);
	
	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });
	
	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);
	
	  // MODE DEFINITION AND QUERYING
	
	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
	
	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };
	
	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };
	
	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };
	
	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];
	
	    return modeObj;
	  };
	
	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");
	
	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };
	
	  // EXTENSIONS
	
	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;
	
	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};
	
	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };
	
	  // MODE STATE HANDLING
	
	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.
	
	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };
	
	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };
	
	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };
	
	  // STANDARD COMMANDS
	
	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };
	
	
	  // STANDARD KEYMAPS
	
	  var keyMap = CodeMirror.keyMap = {};
	
	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
	
	  // KEYMAP DISPATCH
	
	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }
	
	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }
	
	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };
	
	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";
	
	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };
	
	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };
	
	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };
	
	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }
	
	  // FROMTEXTAREA
	
	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }
	
	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }
	
	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };
	
	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };
	
	  // STRING STREAM
	
	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.
	
	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };
	
	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };
	
	  // TEXTMARKERS
	
	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.
	
	  var nextMarkerId = 0;
	
	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);
	
	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }
	
	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };
	
	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };
	
	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };
	
	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };
	
	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;
	
	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);
	
	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }
	
	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);
	
	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });
	
	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });
	
	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }
	
	  // SHARED TEXTMARKERS
	
	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);
	
	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };
	
	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }
	
	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }
	
	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }
	
	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }
	
	  // TEXTMARKER SPANS
	
	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }
	
	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }
	
	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }
	
	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;
	
	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);
	
	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);
	
	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }
	
	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }
	
	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;
	
	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }
	
	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }
	
	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }
	
	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }
	
	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }
	
	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }
	
	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (cmp(found.to, from) > 0 || (sp.marker.inclusiveRight && marker.inclusiveLeft)) ||
	          fromCmp >= 0 && (cmp(found.from, to) < 0 || (sp.marker.inclusiveLeft && marker.inclusiveRight)))
	        return true;
	    }
	  }
	
	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }
	
	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }
	
	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }
	
	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }
	
	  // LINE WIDGETS
	
	  // Line widgets are block elements displayed above or below a line.
	
	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);
	
	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }
	
	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };
	
	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }
	
	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }
	
	  // LINE DATA STRUCTURE
	
	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };
	
	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }
	
	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }
	
	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }
	
	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }
	
	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }
	
	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }
	
	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }
	
	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 50000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444 characters
	      var pos = Math.min(stream.pos, curStart + 50000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }
	
	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);
	
	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }
	
	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }
	
	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }
	
	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }
	
	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }
	
	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};
	
	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }
	
	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
	
	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }
	
	    // See issue #2901
	    if (webkit && /\bcm-tab\b/.test(builder.content.lastChild.className))
	      builder.content.className = "cm-tab-wrap-hack";
	
	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
	
	    return builder;
	  }
	
	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }
	
	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text;
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }
	
	  function splitSpaces(old) {
	    var out = " ";
	    for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
	    out += " ";
	    return out;
	  }
	
	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }
	
	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	  }
	
	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }
	
	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]
	
	        if (!collapsed || collapsed.from == pos) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	      }
	      if (pos >= len) break;
	
	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }
	
	  // DOCUMENT DATA STRUCTURE
	
	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }
	
	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }
	
	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
	
	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }
	
	    signalLater(doc, "change", doc, change);
	  }
	
	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html
	
	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }
	
	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };
	
	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }
	
	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            while (child.lines.length > 50) {
	              var spilled = child.lines.splice(child.lines.length - 25, 25);
	              var newleaf = new LeafChunk(spilled);
	              child.height -= newleaf.height;
	              this.children.splice(i + 1, 0, newleaf);
	              newleaf.parent = this;
	            }
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	        } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };
	
	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;
	
	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;
	
	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };
	
	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },
	
	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },
	
	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.
	
	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	
	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},
	
	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},
	
	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },
	
	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},
	
	    clipPos: function(pos) {return clipPos(this, pos);},
	
	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},
	
	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),
	
	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),
	
	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},
	
	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},
	
	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },
	
	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },
	
	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),
	
	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },
	
	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(lineNo == from.line && from.ch > span.to ||
	                span.from == null && lineNo != from.line||
	                lineNo == to.line && span.from > to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },
	
	    posFromIndex: function(off) {
	      var ch, lineNo = this.first;
	      this.iter(function(line) {
	        var sz = line.text.length + 1;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + 1;
	      });
	      return index;
	    },
	
	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },
	
	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},
	
	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},
	
	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });
	
	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;
	
	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);
	
	  eventMixin(Doc);
	
	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }
	
	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }
	
	  // LINE UTILITIES
	
	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }
	
	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }
	
	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }
	
	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }
	
	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }
	
	
	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);
	
	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }
	
	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }
	
	  // HISTORY
	
	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }
	
	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }
	
	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }
	
	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }
	
	  // Register a change in the history. Merges changes that are within
	  // a single operation, ore are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;
	
	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;
	
	    if (!last) signal(doc, "historyAdded");
	  }
	
	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }
	
	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;
	
	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);
	
	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }
	
	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }
	
	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }
	
	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }
	
	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }
	
	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }
	
	  // Rebasing/resetting history to deal with externally-sourced changes
	
	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }
	
	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }
	
	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }
	
	  // EVENT UTILITIES
	
	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.
	
	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};
	
	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }
	
	  // EVENT HANDLING
	
	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.
	
	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };
	
	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }
	
	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };
	
	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };
	
	  var orphanDelayedCallbacks = null;
	
	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }
	
	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }
	
	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }
	
	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }
	
	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }
	
	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }
	
	  // MISC UTILITIES
	
	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;
	
	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};
	
	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};
	
	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };
	
	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };
	
	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }
	
	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }
	
	  function lst(arr) { return arr[arr.length-1]; }
	
	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };
	
	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }
	
	  function nothing() {}
	
	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };
	
	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }
	
	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }
	
	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }
	
	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }
	
	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }
	
	  // DOM UTILITIES
	
	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }
	
	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };
	
	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }
	
	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }
	
	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };
	
	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };
	
	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }
	
	  // WINDOW-WIDE EVENTS
	
	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.
	
	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }
	
	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }
	
	  // FEATURE DETECTION
	
	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();
	
	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }
	
	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    return badBidiRects = (r1.right - r0.right < 3);
	  }
	
	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};
	
	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };
	
	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();
	
	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }
	
	  // KEY NAMES
	
	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();
	
	  // BIDI HELPERS
	
	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }
	
	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }
	
	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }
	
	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }
	
	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }
	
	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }
	
	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);
	
	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }
	
	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }
	
	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.
	
	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals
	
	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }
	
	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";
	
	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }
	
	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));
	
	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }
	
	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }
	
	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }
	
	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }
	
	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }
	
	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }
	
	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));
	
	      return order;
	    };
	  })();
	
	  // THE END
	
	  CodeMirror.version = "5.12.0";
	
	  return CodeMirror;
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(CodeMirror) {/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		__webpack_require__(1);
	
		__webpack_require__(14);
	
		__webpack_require__(15);
	
		__webpack_require__(18);
	
		__webpack_require__(19);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _balajs = __webpack_require__(2);
		
		var _balajs2 = _interopRequireDefault(_balajs);
		
		var _object = __webpack_require__(3);
		
		var _object2 = _interopRequireDefault(_object);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		CodeMirror.defineOption('jsonlint', false, function (editor, value) {
			var initialized = editor._jsonlint;
			//if(!value && !editor._jsonlint)
			if (value && !initialized) {
				var wrapper = editor.display.wrapper,
				    _validateButton = (0, _object2.default)(wrapper.appendChild(_balajs2.default.one('<div>')), {
					className: 'lint-button'
				}),
				    _notifierBlock = wrapper.appendChild((0, _object2.default)(_balajs2.default.one('<div>'), {
					className: 'lint-notifier'
				}));
		
				(0, _object2.default)(editor, { _notifierBlock: _notifierBlock, _validateButton: _validateButton });
		
				editor.on('change', function () {
					editor.highlightErrorLine(null);
					editor.notify(null);
				});
		
				_validateButton.addEventListener('click', function (evt) {
					editor.validate();
				});
		
				editor._jsonlint = true;
			} else if (!value && !initialized) {
				return;
			} else if (!value && initialized) {
				editor._notifierBlock.style.display = editor._validateButton.style.display = 'none';
			} else if (value && initialized) {
				editor._notifierBlock.style.display = editor._validateButton.style.display = '';
			}
		});
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
			$ = (function(document, s_addEventListener, s_querySelectorAll) {
				function $(s, context, bala) {
					bala = Object.create($.fn);
		
					s && bala.push.apply(bala, // if s is truly then push the following
						s[s_addEventListener] // if arg is node or window,
							? [s] // then pass [s]
							: "" + s === s // else if arg is a string
								? /</.test(s) // if the string contains "<" (if HTML code is passed)
									// then parse it and return node.children
									// use 'addEventListener' (HTMLUnknownElement) if content is not presented
									? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
										, context.children)
									: context // else if context is truly
										? ((context = $(context)[0]) // if context element is found
											? context[s_querySelectorAll](s) // then select element from context
											: bala) // else pass [] (context isn't found)
										: document[s_querySelectorAll](s) // else select elements globally
								: typeof s == 'function' // else if function is passed
									// if DOM is ready
									// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
									? document.readyState[7]
										? s() // then run given function
										: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
									: s); // else guessing that s variable is array-like Object
		
					return bala;
				}
		
				$.fn = [];
		
				$.one = function(s, context) {
					return $(s, context)[0] || null;
				};
		
				return $;
			})(document, 'addEventListener', 'querySelectorAll');
		
		
			if (true) {
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
					return $;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else if (typeof module == 'object' && module.exports) {
				module.exports = $;
			} else {
				root.$ = $;
			}
		})(this);
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var defineProperties = __webpack_require__(4);
		
		var implementation = __webpack_require__(8);
		var getPolyfill = __webpack_require__(12);
		var shim = __webpack_require__(13);
		
		defineProperties(implementation, {
			implementation: implementation,
			getPolyfill: getPolyfill,
			shim: shim
		});
		
		module.exports = implementation;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var keys = __webpack_require__(5);
		var foreach = __webpack_require__(7);
		var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
		
		var toStr = Object.prototype.toString;
		
		var isFunction = function (fn) {
			return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
		};
		
		var arePropertyDescriptorsSupported = function () {
			var obj = {};
			try {
				Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
		        /* eslint-disable no-unused-vars, no-restricted-syntax */
		        for (var _ in obj) { return false; }
		        /* eslint-enable no-unused-vars, no-restricted-syntax */
				return obj.x === obj;
			} catch (e) { /* this is IE 8. */
				return false;
			}
		};
		var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
		
		var defineProperty = function (object, name, value, predicate) {
			if (name in object && (!isFunction(predicate) || !predicate())) {
				return;
			}
			if (supportsDescriptors) {
				Object.defineProperty(object, name, {
					configurable: true,
					enumerable: false,
					value: value,
					writable: true
				});
			} else {
				object[name] = value;
			}
		};
		
		var defineProperties = function (object, map) {
			var predicates = arguments.length > 2 ? arguments[2] : {};
			var props = keys(map);
			if (hasSymbols) {
				props = props.concat(Object.getOwnPropertySymbols(map));
			}
			foreach(props, function (name) {
				defineProperty(object, name, map[name], predicates[name]);
			});
		};
		
		defineProperties.supportsDescriptors = !!supportsDescriptors;
		
		module.exports = defineProperties;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var slice = Array.prototype.slice;
		var isArgs = __webpack_require__(6);
		var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
		var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var blacklistedKeys = {
			$console: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$parent: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};
		
		var keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];
		
			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}
		
			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}
		
			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}
		
			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
		
				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
		
		keysShim.shim = function shimObjectKeys() {
			if (Object.keys) {
				var keysWorksWithArguments = (function () {
					// Safari 5.0 bug
					return (Object.keys(arguments) || '').length === 2;
				}(1, 2));
				if (!keysWorksWithArguments) {
					var originalKeys = Object.keys;
					Object.keys = function keys(object) {
						if (isArgs(object)) {
							return originalKeys(slice.call(object));
						} else {
							return originalKeys(object);
						}
					};
				}
			} else {
				Object.keys = keysShim;
			}
			return Object.keys || keysShim;
		};
		
		module.exports = keysShim;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
		
		var toStr = Object.prototype.toString;
		
		module.exports = function isArguments(value) {
			var str = toStr.call(value);
			var isArgs = str === '[object Arguments]';
			if (!isArgs) {
				isArgs = str !== '[object Array]' &&
					value !== null &&
					typeof value === 'object' &&
					typeof value.length === 'number' &&
					value.length >= 0 &&
					toStr.call(value.callee) === '[object Function]';
			}
			return isArgs;
		};
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		
		var hasOwn = Object.prototype.hasOwnProperty;
		var toString = Object.prototype.toString;
		
		module.exports = function forEach (obj, fn, ctx) {
		    if (toString.call(fn) !== '[object Function]') {
		        throw new TypeError('iterator must be a function');
		    }
		    var l = obj.length;
		    if (l === +l) {
		        for (var i = 0; i < l; i++) {
		            fn.call(ctx, obj[i], i, obj);
		        }
		    } else {
		        for (var k in obj) {
		            if (hasOwn.call(obj, k)) {
		                fn.call(ctx, obj[k], k, obj);
		            }
		        }
		    }
		};
		
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		// modified from https://github.com/es-shims/es6-shim
		var keys = __webpack_require__(5);
		var bind = __webpack_require__(9);
		var canBeObject = function (obj) {
			return typeof obj !== 'undefined' && obj !== null;
		};
		var hasSymbols = __webpack_require__(11)();
		var toObject = Object;
		var push = bind.call(Function.call, Array.prototype.push);
		var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
		
		module.exports = function assign(target, source1) {
			if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
			var objTarget = toObject(target);
			var s, source, i, props, syms, value, key;
			for (s = 1; s < arguments.length; ++s) {
				source = toObject(arguments[s]);
				props = keys(source);
				if (hasSymbols && Object.getOwnPropertySymbols) {
					syms = Object.getOwnPropertySymbols(source);
					for (i = 0; i < syms.length; ++i) {
						key = syms[i];
						if (propIsEnumerable(source, key)) {
							push(props, key);
						}
					}
				}
				for (i = 0; i < props.length; ++i) {
					key = props[i];
					value = source[key];
					if (propIsEnumerable(source, key)) {
						objTarget[key] = value;
					}
				}
			}
			return objTarget;
		};
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		var implementation = __webpack_require__(10);
		
		module.exports = Function.prototype.bind || implementation;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
		var slice = Array.prototype.slice;
		var toStr = Object.prototype.toString;
		var funcType = '[object Function]';
		
		module.exports = function bind(that) {
		    var target = this;
		    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
		        throw new TypeError(ERROR_MESSAGE + target);
		    }
		    var args = slice.call(arguments, 1);
		
		    var bound;
		    var binder = function () {
		        if (this instanceof bound) {
		            var result = target.apply(
		                this,
		                args.concat(slice.call(arguments))
		            );
		            if (Object(result) === result) {
		                return result;
		            }
		            return this;
		        } else {
		            return target.apply(
		                that,
		                args.concat(slice.call(arguments))
		            );
		        }
		    };
		
		    var boundLength = Math.max(0, target.length - args.length);
		    var boundArgs = [];
		    for (var i = 0; i < boundLength; i++) {
		        boundArgs.push('$' + i);
		    }
		
		    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
		
		    if (target.prototype) {
		        var Empty = function Empty() {};
		        Empty.prototype = target.prototype;
		        bound.prototype = new Empty();
		        Empty.prototype = null;
		    }
		
		    return bound;
		};
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var keys = __webpack_require__(5);
		
		module.exports = function hasSymbols() {
			if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
			if (typeof Symbol.iterator === 'symbol') { return true; }
		
			var obj = {};
			var sym = Symbol('test');
			if (typeof sym === 'string') { return false; }
		
			// temp disabled per https://github.com/ljharb/object.assign/issues/17
			// if (sym instanceof Symbol) { return false; }
			// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
			// if (!(Object(sym) instanceof Symbol)) { return false; }
		
			var symVal = 42;
			obj[sym] = symVal;
			for (sym in obj) { return false; }
			if (keys(obj).length !== 0) { return false; }
			if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }
		
			if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }
		
			var syms = Object.getOwnPropertySymbols(obj);
			if (syms.length !== 1 || syms[0] !== sym) { return false; }
		
			if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }
		
			if (typeof Object.getOwnPropertyDescriptor === 'function') {
				var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
				if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
			}
		
			return true;
		};
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var implementation = __webpack_require__(8);
		
		var lacksProperEnumerationOrder = function () {
			if (!Object.assign) {
				return false;
			}
			// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
			// note: this does not detect the bug unless there's 20 characters
			var str = 'abcdefghijklmnopqrst';
			var letters = str.split('');
			var map = {};
			for (var i = 0; i < letters.length; ++i) {
				map[letters[i]] = letters[i];
			}
			var obj = Object.assign({}, map);
			var actual = '';
			for (var k in obj) {
				actual += k;
			}
			return str !== actual;
		};
		
		var assignHasPendingExceptions = function () {
			if (!Object.assign || !Object.preventExtensions) {
				return false;
			}
			// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
			// which is 72% slower than our shim, and Firefox 40's native implementation.
			var thrower = Object.preventExtensions({ 1: 2 });
			try {
				Object.assign(thrower, 'xy');
			} catch (e) {
				return thrower[1] === 'y';
			}
		};
		
		module.exports = function getPolyfill() {
			if (!Object.assign) {
				return implementation;
			}
			if (lacksProperEnumerationOrder()) {
				return implementation;
			}
			if (assignHasPendingExceptions()) {
				return implementation;
			}
			return Object.assign;
		};
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var define = __webpack_require__(4);
		var getPolyfill = __webpack_require__(12);
		
		module.exports = function shimAssign() {
			var polyfill = getPolyfill();
			define(
				Object,
				{ assign: polyfill },
				{ assign: function () { return Object.assign !== polyfill; } }
			);
			return polyfill;
		};
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _balajs = __webpack_require__(2);
		
		var _balajs2 = _interopRequireDefault(_balajs);
		
		var _object = __webpack_require__(3);
		
		var _object2 = _interopRequireDefault(_object);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		CodeMirror.defineExtension('notify', function (state, message) {
			var _notifierBlock = this._notifierBlock;
			var _validateButton = this._validateButton;
		
		
			if (!_notifierBlock || !_validateButton) return;
		
			switch (state) {
				case 'SUCCESS':
					_notifierBlock.classList.remove('shown');
					_validateButton.classList.add('success');
					break;
				case 'ERROR':
					_notifierBlock.innerHTML = message;
					_notifierBlock.classList.add('shown');
					_validateButton.classList.remove('success');
					break;
				default:
					_notifierBlock.classList.remove('shown');
					_validateButton.classList.remove('success');
			}
		});
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _jsonlint = __webpack_require__(16);
		
		var _jsonlint2 = _interopRequireDefault(_jsonlint);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		CodeMirror.defineExtension('validate', function (editor) {
			var code = this.getValue(),
			    lineMatches = undefined;
		
			try {
				JSON.parse(code);
				this.notify('SUCCESS', 'Valid JSON');
			} catch (_e) {
				try {
					_jsonlint2.default.parse(code);
					this.notify('SUCCESS', 'Valid JSON');
				} catch (e) {
					// retrieve line number from error
					lineMatches = e.message.match(/line ([0-9]*)/);
		
					if (lineMatches && lineMatches.length > 1) {
						this.highlightErrorLine(+lineMatches[1] - 1);
					}
		
					this.notify('ERROR', e);
				}
			}
		});
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(process) {var jsonlint=function(){var a=!0,b=!1,c={},d=function(){var a={trace:function(){},yy:{},symbols_:{error:2,JSONString:3,STRING:4,JSONNumber:5,NUMBER:6,JSONNullLiteral:7,NULL:8,JSONBooleanLiteral:9,TRUE:10,FALSE:11,JSONText:12,JSONValue:13,EOF:14,JSONObject:15,JSONArray:16,"{":17,"}":18,JSONMemberList:19,JSONMember:20,":":21,",":22,"[":23,"]":24,JSONElementList:25,$accept:0,$end:1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function(b,c,d,e,f,g,h){var i=g.length-1;switch(f){case 1:this.$=b.replace(/\\(\\|")/g,"$1").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"	").replace(/\\v/g,"").replace(/\\f/g,"\f").replace(/\\b/g,"\b");break;case 2:this.$=Number(b);break;case 3:this.$=null;break;case 4:this.$=!0;break;case 5:this.$=!1;break;case 6:return this.$=g[i-1];case 13:this.$={};break;case 14:this.$=g[i-1];break;case 15:this.$=[g[i-2],g[i]];break;case 16:this.$={},this.$[g[i][0]]=g[i][1];break;case 17:this.$=g[i-2],g[i-2][g[i][0]]=g[i][1];break;case 18:this.$=[];break;case 19:this.$=g[i-1];break;case 20:this.$=[g[i]];break;case 21:this.$=g[i-2],g[i-2].push(g[i])}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function(b,c){throw new Error(b)},parse:function(b){function o(a){d.length=d.length-2*a,e.length=e.length-a,f.length=f.length-a}function p(){var a;return a=c.lexer.lex()||1,typeof a!="number"&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0,l=2,m=1;this.lexer.setInput(b),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var n=this.lexer.yylloc;f.push(n),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var q,r,s,t,u,v,w={},x,y,z,A;for(;;){s=d[d.length-1],this.defaultActions[s]?t=this.defaultActions[s]:(q==null&&(q=p()),t=g[s]&&g[s][q]);if(typeof t=="undefined"||!t.length||!t[0]){if(!k){A=[];for(x in g[s])this.terminals_[x]&&x>2&&A.push("'"+this.terminals_[x]+"'");var B="";this.lexer.showPosition?B="Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+A.join(", ")+", got '"+this.terminals_[q]+"'":B="Parse error on line "+(i+1)+": Unexpected "+(q==1?"end of input":"'"+(this.terminals_[q]||q)+"'"),this.parseError(B,{text:this.lexer.match,token:this.terminals_[q]||q,line:this.lexer.yylineno,loc:n,expected:A})}if(k==3){if(q==m)throw new Error(B||"Parsing halted.");j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,q=p()}for(;;){if(l.toString()in g[s])break;if(s==0)throw new Error(B||"Parsing halted.");o(1),s=d[d.length-1]}r=q,q=l,s=d[d.length-1],t=g[s]&&g[s][l],k=3}if(t[0]instanceof Array&&t.length>1)throw new Error("Parse Error: multiple actions possible at state: "+s+", token: "+q);switch(t[0]){case 1:d.push(q),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(t[1]),q=null,r?(q=r,r=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,n=this.lexer.yylloc,k>0&&k--);break;case 2:y=this.productions_[t[1]][1],w.$=e[e.length-y],w._$={first_line:f[f.length-(y||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(y||1)].first_column,last_column:f[f.length-1].last_column},v=this.performAction.call(w,h,j,i,this.yy,t[1],e,f);if(typeof v!="undefined")return v;y&&(d=d.slice(0,-1*y*2),e=e.slice(0,-1*y),f=f.slice(0,-1*y)),d.push(this.productions_[t[1]][0]),e.push(w.$),f.push(w._$),z=g[d[d.length-2]][d[d.length-1]],d.push(z);break;case 3:return!0}}return!0}},b=function(){var a={EOF:1,parseError:function(b,c){if(!this.yy.parseError)throw new Error(b);this.yy.parseError(b,c)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.match+=a,this.matched+=a;var b=a.match(/\n/);return b&&this.yylineno++,this._input=this._input.slice(1),a},unput:function(a){return this._input=a+this._input,this},more:function(){return this._more=!0,this},less:function(a){this._input=this.match.slice(a)+this._input},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=(new Array(a.length+1)).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e,f;this._more||(this.yytext="",this.match="");var g=this._currentRules();for(var h=0;h<g.length;h++){c=this._input.match(this.rules[g[h]]);if(c&&(!b||c[0].length>b[0].length)){b=c,d=h;if(!this.options.flex)break}}if(b){f=b[0].match(/\n.*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-1:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,g[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1);if(a)return a;return}if(this._input==="")return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var b=this.next();return typeof b!="undefined"?b:this.lex()},begin:function(b){this.conditionStack.push(b)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(b){this.begin(b)}};return a.options={},a.performAction=function(b,c,d,e){var f=e;switch(d){case 0:break;case 1:return 6;case 2:return c.yytext=c.yytext.substr(1,c.yyleng-2),4;case 3:return 17;case 4:return 18;case 5:return 23;case 6:return 24;case 7:return 22;case 8:return 21;case 9:return 10;case 10:return 11;case 11:return 8;case 12:return 14;case 13:return"INVALID"}},a.rules=[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/],a.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],inclusive:!0}},a}();return a.lexer=b,a}();return typeof a!="undefined"&&typeof c!="undefined"&&(c.parser=d,c.parse=function(){return d.parse.apply(d,arguments)},c.main=function(d){if(!d[1])throw new Error("Usage: "+d[0]+" FILE");if(typeof process!="undefined")var e=a("fs").readFileSync(a("path").join(process.cwd(),d[1]),"utf8");else var f=a("file").path(a("file").cwd()),e=f.join(d[1]).read({charset:"utf-8"});return c.parser.parse(e)},typeof b!="undefined"&&a.main===b&&c.main(typeof process!="undefined"?process.argv.slice(1):a("system").args)),c}();
		
		/*** EXPORTS FROM exports-loader ***/
		module.exports = jsonlint;
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		// shim for using process in browser
		
		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
		
		function cleanUpNextTick() {
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
		
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = setTimeout(cleanUpNextTick);
		    draining = true;
		
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    clearTimeout(timeout);
		}
		
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        setTimeout(drainQueue, 0);
		    }
		};
		
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
		
		function noop() {}
		
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
		
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		'use strict';
		
		CodeMirror.defineExtension('highlightErrorLine', function (line) {
			if (typeof line == 'number') {
				this._errorLine = this.addLineClass(line, 'background', 'lint-line-error');
			} else if (this._errorLine) {
				this.removeLineClass(this._errorLine, 'background', 'lint-line-error');
				this._errorLine = null;
			}
		});
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(20);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(22)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(21)();
		// imports
		
		
		// module
		exports.push([module.id, ".CodeMirror .lint-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransition: color .5s ease-out;\n\tz-index: 3;\n}\n\n.CodeMirror .lint-button::before {\n\tcontent: 'Validate';\n}\n\n.CodeMirror .lint-button.success {\n\tcolor: green;\n}\n\n.CodeMirror .lint-notifier {\n\tposition: absolute;\n\tbottom: 10px;\n\tz-index: 3;\n\tleft: 40px;\n\topacity: 0;\n\tpointer-events: none;\n\ttransition: opacity .5s ease-out;\n}\n\n.CodeMirror .lint-notifier.shown {\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n.CodeMirror .lint-line-error {\n    background-color: #FBE3E4;\n}\n", ""]);
		
		// exports
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];
		
			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};
		
			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];
		
		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}
		
			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();
		
			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
		
			var styles = listToStyles(list);
			addStylesToDom(styles, options);
		
			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}
		
		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}
		
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
		
		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}
		
		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}
		
		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}
		
		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}
		
		function addStyle(obj, options) {
			var styleElement, update, remove;
		
			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}
		
			update(obj);
		
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}
		
		var replaceText = (function () {
			var textStore = [];
		
			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();
		
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
		
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
		
		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;
		
			if(media) {
				styleElement.setAttribute("media", media)
			}
		
			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}
		
		function updateLink(linkElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;
		
			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}
		
			var blob = new Blob([css], { type: "text/css" });
		
			var oldSrc = linkElement.href;
		
			linkElement.href = URL.createObjectURL(blob);
		
			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}
	
	
	/***/ }
	/******/ ]);
	//# sourceMappingURL=codemirror-jsonlint-addon.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./../../../postcss-loader/index.js!./merge.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./../../../postcss-loader/index.js!./merge.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".CodeMirror-merge {\n  position: relative;\n  border: 1px solid #ddd;\n  white-space: pre;\n}\n\n.CodeMirror-merge, .CodeMirror-merge .CodeMirror {\n  height: 350px;\n}\n\n.CodeMirror-merge-2pane .CodeMirror-merge-pane { width: 47%; }\n.CodeMirror-merge-2pane .CodeMirror-merge-gap { width: 6%; }\n.CodeMirror-merge-3pane .CodeMirror-merge-pane { width: 31%; }\n.CodeMirror-merge-3pane .CodeMirror-merge-gap { width: 3.5%; }\n\n.CodeMirror-merge-pane {\n  display: inline-block;\n  white-space: normal;\n  vertical-align: top;\n}\n.CodeMirror-merge-pane-rightmost {\n  position: absolute;\n  right: 0px;\n  z-index: 1;\n}\n\n.CodeMirror-merge-gap {\n  z-index: 2;\n  display: inline-block;\n  height: 100%;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  position: relative;\n  background: #f8f8f8;\n}\n\n.CodeMirror-merge-scrolllock-wrap {\n  position: absolute;\n  bottom: 0; left: 50%;\n}\n.CodeMirror-merge-scrolllock {\n  position: relative;\n  left: -50%;\n  cursor: pointer;\n  color: #555;\n  line-height: 1;\n}\n\n.CodeMirror-merge-copybuttons-left, .CodeMirror-merge-copybuttons-right {\n  position: absolute;\n  left: 0; top: 0;\n  right: 0; bottom: 0;\n  line-height: 1;\n}\n\n.CodeMirror-merge-copy {\n  position: absolute;\n  cursor: pointer;\n  color: #44c;\n  z-index: 3;\n}\n\n.CodeMirror-merge-copy-reverse {\n  position: absolute;\n  cursor: pointer;\n  color: #44c;\n}\n\n.CodeMirror-merge-copybuttons-left .CodeMirror-merge-copy { left: 2px; }\n.CodeMirror-merge-copybuttons-right .CodeMirror-merge-copy { right: 2px; }\n\n.CodeMirror-merge-r-inserted, .CodeMirror-merge-l-inserted {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAGUlEQVQI12MwuCXy3+CWyH8GBgYGJgYkAABZbAQ9ELXurwAAAABJRU5ErkJggg==);\n  background-position: bottom left;\n  background-repeat: repeat-x;\n}\n\n.CodeMirror-merge-r-deleted, .CodeMirror-merge-l-deleted {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAGUlEQVQI12M4Kyb2/6yY2H8GBgYGJgYkAABURgPz6Ks7wQAAAABJRU5ErkJggg==);\n  background-position: bottom left;\n  background-repeat: repeat-x;\n}\n\n.CodeMirror-merge-r-chunk { background: #ffffe0; }\n.CodeMirror-merge-r-chunk-start { border-top: 1px solid #ee8; }\n.CodeMirror-merge-r-chunk-end { border-bottom: 1px solid #ee8; }\n.CodeMirror-merge-r-connect { fill: #ffffe0; stroke: #ee8; stroke-width: 1px; }\n\n.CodeMirror-merge-l-chunk { background: #eef; }\n.CodeMirror-merge-l-chunk-start { border-top: 1px solid #88e; }\n.CodeMirror-merge-l-chunk-end { border-bottom: 1px solid #88e; }\n.CodeMirror-merge-l-connect { fill: #eef; stroke: #88e; stroke-width: 1px; }\n\n.CodeMirror-merge-l-chunk.CodeMirror-merge-r-chunk { background: #dfd; }\n.CodeMirror-merge-l-chunk-start.CodeMirror-merge-r-chunk-start { border-top: 1px solid #4e4; }\n.CodeMirror-merge-l-chunk-end.CodeMirror-merge-r-chunk-end { border-bottom: 1px solid #4e4; }\n\n.CodeMirror-merge-collapsed-widget:before {\n  content: \"(...)\";\n}\n.CodeMirror-merge-collapsed-widget {\n  cursor: pointer;\n  color: #88b;\n  background: #eef;\n  border: 1px solid #ddf;\n  font-size: 90%;\n  padding: 0 3px;\n  border-radius: 4px;\n}\n.CodeMirror-merge-collapsed-line .CodeMirror-gutter-elt { display: none; }\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../postcss-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../postcss-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor { position: absolute; }\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict'
	
	/**
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * @fileoverview Computes the difference between two texts to create a patch.
	 * Applies the patch onto another text, allowing for errors.
	 * @author fraser@google.com (Neil Fraser)
	 */
	
	/**
	 * Class containing the diff, match and patch methods.
	 * @constructor
	 */
	function diff_match_patch() {
	
	  // Defaults.
	  // Redefine these in your program to override the defaults.
	
	  // Number of seconds to map a diff before giving up (0 for infinity).
	  this.Diff_Timeout = 1.0;
	  // Cost of an empty edit operation in terms of edit characters.
	  this.Diff_EditCost = 4;
	  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
	  this.Match_Threshold = 0.5;
	  // How far to search for a match (0 = exact location, 1000+ = broad match).
	  // A match this many characters away from the expected location will add
	  // 1.0 to the score (0.0 is a perfect match).
	  this.Match_Distance = 1000;
	  // When deleting a large block of text (over ~64 characters), how close do
	  // the contents have to be to match the expected contents. (0.0 = perfection,
	  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
	  // end points of a delete need to match.
	  this.Patch_DeleteThreshold = 0.5;
	  // Chunk size for context length.
	  this.Patch_Margin = 4;
	
	  // The number of bits in an int.
	  this.Match_MaxBits = 32;
	}
	
	
	//  DIFF FUNCTIONS
	
	
	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;
	
	/** @typedef {{0: number, 1: string}} */
	diff_match_patch.Diff;
	
	
	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
	 *     then don't run a line-level diff first to identify the changed areas.
	 *     Defaults to true, which does a faster, slightly less optimal diff.
	 * @param {number} opt_deadline Optional time when the diff should be complete
	 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
	 *     instead.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
	    opt_deadline) {
	  // Set a deadline by which time the diff must be complete.
	  if (typeof opt_deadline == 'undefined') {
	    if (this.Diff_Timeout <= 0) {
	      opt_deadline = Number.MAX_VALUE;
	    } else {
	      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
	    }
	  }
	  var deadline = opt_deadline;
	
	  // Check for null inputs.
	  if (text1 == null || text2 == null) {
	    throw new Error('Null input. (diff_main)');
	  }
	
	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [[DIFF_EQUAL, text1]];
	    }
	    return [];
	  }
	
	  if (typeof opt_checklines == 'undefined') {
	    opt_checklines = true;
	  }
	  var checklines = opt_checklines;
	
	  // Trim off common prefix (speedup).
	  var commonlength = this.diff_commonPrefix(text1, text2);
	  var commonprefix = text1.substring(0, commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);
	
	  // Trim off common suffix (speedup).
	  commonlength = this.diff_commonSuffix(text1, text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0, text1.length - commonlength);
	  text2 = text2.substring(0, text2.length - commonlength);
	
	  // Compute the diff on the middle block.
	  var diffs = this.diff_compute_(text1, text2, checklines, deadline);
	
	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift([DIFF_EQUAL, commonprefix]);
	  }
	  if (commonsuffix) {
	    diffs.push([DIFF_EQUAL, commonsuffix]);
	  }
	  this.diff_cleanupMerge(diffs);
	  return diffs;
	};
	
	
	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {boolean} checklines Speedup flag.  If false, then don't run a
	 *     line-level diff first to identify the changed areas.
	 *     If true, then run a faster, slightly less optimal diff.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
	    deadline) {
	  var diffs;
	
	  if (!text1) {
	    // Just add some text (speedup).
	    return [[DIFF_INSERT, text2]];
	  }
	
	  if (!text2) {
	    // Just delete some text (speedup).
	    return [[DIFF_DELETE, text1]];
	  }
	
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
	             [DIFF_EQUAL, shorttext],
	             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }
	
	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedup, the character can't be an equality.
	    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	  }
	
	  // Check to see if the problem can be split in two.
	  var hm = this.diff_halfMatch_(text1, text2);
	  if (hm) {
	    // A half-match was found, sort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
	    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
	    // Merge the results.
	    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
	  }
	
	  if (checklines && text1.length > 100 && text2.length > 100) {
	    return this.diff_lineMode_(text1, text2, deadline);
	  }
	
	  return this.diff_bisect_(text1, text2, deadline);
	};
	
	
	/**
	 * Do a quick line-level diff on both strings, then rediff the parts for
	 * greater accuracy.
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time when the diff should be complete by.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
	  // Scan the text on a line-by-line basis first.
	  var a = this.diff_linesToChars_(text1, text2);
	  text1 = a.chars1;
	  text2 = a.chars2;
	  var linearray = a.lineArray;
	
	  var diffs = this.diff_main(text1, text2, false, deadline);
	
	  // Convert the diff back to original text.
	  this.diff_charsToLines_(diffs, linearray);
	  // Eliminate freak matches (e.g. blank lines)
	  this.diff_cleanupSemantic(diffs);
	
	  // Rediff any replacement blocks, this time character-by-character.
	  // Add a dummy entry at the end.
	  diffs.push([DIFF_EQUAL, '']);
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete >= 1 && count_insert >= 1) {
	          // Delete the offending records and add the merged ones.
	          diffs.splice(pointer - count_delete - count_insert,
	                       count_delete + count_insert);
	          pointer = pointer - count_delete - count_insert;
	          var a = this.diff_main(text_delete, text_insert, false, deadline);
	          for (var j = a.length - 1; j >= 0; j--) {
	            diffs.splice(pointer, 0, a[j]);
	          }
	          pointer = pointer + a.length;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	    pointer++;
	  }
	  diffs.pop();  // Remove the dummy entry at the end.
	
	  return diffs;
	};
	
	
	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is odd, then the front path will collide
	  // with the reverse path.
	  var front = (delta % 2 != 0);
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Bail out if deadline is reached.
	    if ((new Date()).getTime() > deadline) {
	      break;
	    }
	
	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length &&
	             text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	
	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length &&
	             text1.charAt(text1_length - x2 - 1) ==
	             text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of characters, no commonality at all.
	  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	};
	
	
	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @param {number} deadline Time at which to bail if not yet complete.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @private
	 */
	diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
	    deadline) {
	  var text1a = text1.substring(0, x);
	  var text2a = text2.substring(0, y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);
	
	  // Compute both diffs serially.
	  var diffs = this.diff_main(text1a, text2a, false, deadline);
	  var diffsb = this.diff_main(text1b, text2b, false, deadline);
	
	  return diffs.concat(diffsb);
	};
	
	
	/**
	 * Split two texts into an array of strings.  Reduce the texts to a string of
	 * hashes where each Unicode character represents one line.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
	 *     An object containing the encoded text1, the encoded text2 and
	 *     the array of unique strings.
	 *     The zeroth element of the array of unique strings is intentionally blank.
	 * @private
	 */
	diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
	  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
	  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4
	
	  // '\x00' is a valid character, but various debuggers don't like it.
	  // So we'll insert a junk entry to avoid generating a null character.
	  lineArray[0] = '';
	
	  /**
	   * Split a text into an array of strings.  Reduce the texts to a string of
	   * hashes where each Unicode character represents one line.
	   * Modifies linearray and linehash through being a closure.
	   * @param {string} text String to encode.
	   * @return {string} Encoded string.
	   * @private
	   */
	  function diff_linesToCharsMunge_(text) {
	    var chars = '';
	    // Walk the text, pulling out a substring for each line.
	    // text.split('\n') would would temporarily double our memory footprint.
	    // Modifying text would create many large strings to garbage collect.
	    var lineStart = 0;
	    var lineEnd = -1;
	    // Keeping our own length variable is faster than looking it up.
	    var lineArrayLength = lineArray.length;
	    while (lineEnd < text.length - 1) {
	      lineEnd = text.indexOf('\n', lineStart);
	      if (lineEnd == -1) {
	        lineEnd = text.length - 1;
	      }
	      var line = text.substring(lineStart, lineEnd + 1);
	      lineStart = lineEnd + 1;
	
	      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
	          (lineHash[line] !== undefined)) {
	        chars += String.fromCharCode(lineHash[line]);
	      } else {
	        chars += String.fromCharCode(lineArrayLength);
	        lineHash[line] = lineArrayLength;
	        lineArray[lineArrayLength++] = line;
	      }
	    }
	    return chars;
	  }
	
	  var chars1 = diff_linesToCharsMunge_(text1);
	  var chars2 = diff_linesToCharsMunge_(text2);
	  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
	};
	
	
	/**
	 * Rehydrate the text in a diff from a string of line hashes to real lines of
	 * text.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {!Array.<string>} lineArray Array of unique strings.
	 * @private
	 */
	diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
	  for (var x = 0; x < diffs.length; x++) {
	    var chars = diffs[x][1];
	    var text = [];
	    for (var y = 0; y < chars.length; y++) {
	      text[y] = lineArray[chars.charCodeAt(y)];
	    }
	    diffs[x][1] = text.join('');
	  }
	};
	
	
	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstart, pointermid) ==
	        text2.substring(pointerstart, pointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};
	
	
	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 ||
	      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
	        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};
	
	
	/**
	 * Determine if the suffix of one string is the prefix of another.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of the first
	 *     string and the start of the second string.
	 * @private
	 */
	diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  // Eliminate the null case.
	  if (text1_length == 0 || text2_length == 0) {
	    return 0;
	  }
	  // Truncate the longer string.
	  if (text1_length > text2_length) {
	    text1 = text1.substring(text1_length - text2_length);
	  } else if (text1_length < text2_length) {
	    text2 = text2.substring(0, text1_length);
	  }
	  var text_length = Math.min(text1_length, text2_length);
	  // Quick check for the worst case.
	  if (text1 == text2) {
	    return text_length;
	  }
	
	  // Start by looking for a single character match
	  // and increase length until no match is found.
	  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
	  var best = 0;
	  var length = 1;
	  while (true) {
	    var pattern = text1.substring(text_length - length);
	    var found = text2.indexOf(pattern);
	    if (found == -1) {
	      return best;
	    }
	    length += found;
	    if (found == 0 || text1.substring(text_length - length) ==
	        text2.substring(0, length)) {
	      best = length;
	      length++;
	    }
	  }
	};
	
	
	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 * @private
	 */
	diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
	  if (this.Diff_Timeout <= 0) {
	    // Don't risk returning a non-optimal diff if we have unlimited time.
	    return null;
	  }
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null;  // Pointless.
	  }
	  var dmp = this;  // 'this' becomes 'window' in a closure.
	
	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closure, but does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtext, shorttext, i) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
	    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
	      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
	                                               shorttext.substring(j));
	      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
	                                               shorttext.substring(0, j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLength, j) +
	            shorttext.substring(j, j + prefixLength);
	        best_longtext_a = longtext.substring(0, i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0, j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_a, best_longtext_b,
	              best_shorttext_a, best_shorttext_b, best_common];
	    } else {
	      return null;
	    }
	  }
	
	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtext, shorttext,
	                             Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }
	
	  // A half-match was found, sort out the return data.
	  var text1_a, text1_b, text2_a, text2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_a, text1_b, text2_a, text2_b, mid_common];
	};
	
	
	/**
	 * Reduce the number of edits by eliminating semantically trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastequality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Number of characters that changed prior to the equality.
	  var length_insertions1 = 0;
	  var length_deletions1 = 0;
	  // Number of characters that changed after the equality.
	  var length_insertions2 = 0;
	  var length_deletions2 = 0;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      equalities[equalitiesLength++] = pointer;
	      length_insertions1 = length_insertions2;
	      length_deletions1 = length_deletions2;
	      length_insertions2 = 0;
	      length_deletions2 = 0;
	      lastequality = diffs[pointer][1];
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_INSERT) {
	        length_insertions2 += diffs[pointer][1].length;
	      } else {
	        length_deletions2 += diffs[pointer][1].length;
	      }
	      // Eliminate an equality that is smaller or equal to the edits on both
	      // sides of it.
	      if (lastequality && (lastequality.length <=
	          Math.max(length_insertions1, length_deletions1)) &&
	          (lastequality.length <= Math.max(length_insertions2,
	                                           length_deletions2))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        // Throw away the equality we just deleted.
	        equalitiesLength--;
	        // Throw away the previous equality (it needs to be reevaluated).
	        equalitiesLength--;
	        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
	        length_insertions1 = 0;  // Reset the counters.
	        length_deletions1 = 0;
	        length_insertions2 = 0;
	        length_deletions2 = 0;
	        lastequality = null;
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	
	  // Normalize the diff.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	  this.diff_cleanupSemanticLossless(diffs);
	
	  // Find any overlaps between deletions and insertions.
	  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
	  //   -> <del>abc</del>xxx<ins>def</ins>
	  // e.g: <del>xxxabc</del><ins>defxxx</ins>
	  //   -> <ins>def</ins>xxx<del>abc</del>
	  // Only extract an overlap if it is as big as the edit ahead or behind it.
	  pointer = 1;
	  while (pointer < diffs.length) {
	    if (diffs[pointer - 1][0] == DIFF_DELETE &&
	        diffs[pointer][0] == DIFF_INSERT) {
	      var deletion = diffs[pointer - 1][1];
	      var insertion = diffs[pointer][1];
	      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
	      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
	      if (overlap_length1 >= overlap_length2) {
	        if (overlap_length1 >= deletion.length / 2 ||
	            overlap_length1 >= insertion.length / 2) {
	          // Overlap found.  Insert an equality and trim the surrounding edits.
	          diffs.splice(pointer, 0,
	              [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
	          diffs[pointer - 1][1] =
	              deletion.substring(0, deletion.length - overlap_length1);
	          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
	          pointer++;
	        }
	      } else {
	        if (overlap_length2 >= deletion.length / 2 ||
	            overlap_length2 >= insertion.length / 2) {
	          // Reverse overlap found.
	          // Insert an equality and swap and trim the surrounding edits.
	          diffs.splice(pointer, 0,
	              [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
	          diffs[pointer - 1][0] = DIFF_INSERT;
	          diffs[pointer - 1][1] =
	              insertion.substring(0, insertion.length - overlap_length2);
	          diffs[pointer + 1][0] = DIFF_DELETE;
	          diffs[pointer + 1][1] =
	              deletion.substring(overlap_length2);
	          pointer++;
	        }
	      }
	      pointer++;
	    }
	    pointer++;
	  }
	};
	
	
	/**
	 * Look for single edits surrounded on both sides by equalities
	 * which can be shifted sideways to align the edit to a word boundary.
	 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
	  /**
	   * Given two strings, compute a score representing whether the internal
	   * boundary falls on logical boundaries.
	   * Scores range from 6 (best) to 0 (worst).
	   * Closure, but does not reference any external variables.
	   * @param {string} one First string.
	   * @param {string} two Second string.
	   * @return {number} The score.
	   * @private
	   */
	  function diff_cleanupSemanticScore_(one, two) {
	    if (!one || !two) {
	      // Edges are the best.
	      return 6;
	    }
	
	    // Each port of this function behaves slightly differently due to
	    // subtle differences in each language's definition of things like
	    // 'whitespace'.  Since this function's purpose is largely cosmetic,
	    // the choice has been made to use each language's native features
	    // rather than force total conformity.
	    var char1 = one.charAt(one.length - 1);
	    var char2 = two.charAt(0);
	    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
	    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
	    var whitespace1 = nonAlphaNumeric1 &&
	        char1.match(diff_match_patch.whitespaceRegex_);
	    var whitespace2 = nonAlphaNumeric2 &&
	        char2.match(diff_match_patch.whitespaceRegex_);
	    var lineBreak1 = whitespace1 &&
	        char1.match(diff_match_patch.linebreakRegex_);
	    var lineBreak2 = whitespace2 &&
	        char2.match(diff_match_patch.linebreakRegex_);
	    var blankLine1 = lineBreak1 &&
	        one.match(diff_match_patch.blanklineEndRegex_);
	    var blankLine2 = lineBreak2 &&
	        two.match(diff_match_patch.blanklineStartRegex_);
	
	    if (blankLine1 || blankLine2) {
	      // Five points for blank lines.
	      return 5;
	    } else if (lineBreak1 || lineBreak2) {
	      // Four points for line breaks.
	      return 4;
	    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
	      // Three points for end of sentences.
	      return 3;
	    } else if (whitespace1 || whitespace2) {
	      // Two points for whitespace.
	      return 2;
	    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
	      // One point for non-alphanumeric.
	      return 1;
	    }
	    return 0;
	  }
	
	  var pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      var equality1 = diffs[pointer - 1][1];
	      var edit = diffs[pointer][1];
	      var equality2 = diffs[pointer + 1][1];
	
	      // First, shift the edit as far left as possible.
	      var commonOffset = this.diff_commonSuffix(equality1, edit);
	      if (commonOffset) {
	        var commonString = edit.substring(edit.length - commonOffset);
	        equality1 = equality1.substring(0, equality1.length - commonOffset);
	        edit = commonString + edit.substring(0, edit.length - commonOffset);
	        equality2 = commonString + equality2;
	      }
	
	      // Second, step character by character right, looking for the best fit.
	      var bestEquality1 = equality1;
	      var bestEdit = edit;
	      var bestEquality2 = equality2;
	      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
	          diff_cleanupSemanticScore_(edit, equality2);
	      while (edit.charAt(0) === equality2.charAt(0)) {
	        equality1 += edit.charAt(0);
	        edit = edit.substring(1) + equality2.charAt(0);
	        equality2 = equality2.substring(1);
	        var score = diff_cleanupSemanticScore_(equality1, edit) +
	            diff_cleanupSemanticScore_(edit, equality2);
	        // The >= encourages trailing rather than leading whitespace on edits.
	        if (score >= bestScore) {
	          bestScore = score;
	          bestEquality1 = equality1;
	          bestEdit = edit;
	          bestEquality2 = equality2;
	        }
	      }
	
	      if (diffs[pointer - 1][1] != bestEquality1) {
	        // We have an improvement, save it back to the diff.
	        if (bestEquality1) {
	          diffs[pointer - 1][1] = bestEquality1;
	        } else {
	          diffs.splice(pointer - 1, 1);
	          pointer--;
	        }
	        diffs[pointer][1] = bestEdit;
	        if (bestEquality2) {
	          diffs[pointer + 1][1] = bestEquality2;
	        } else {
	          diffs.splice(pointer + 1, 1);
	          pointer--;
	        }
	      }
	    }
	    pointer++;
	  }
	};
	
	// Define some regex patterns for matching boundaries.
	diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
	diff_match_patch.whitespaceRegex_ = /\s/;
	diff_match_patch.linebreakRegex_ = /[\r\n]/;
	diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
	diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
	
	/**
	 * Reduce the number of edits by eliminating operationally trivial equalities.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
	  var changes = false;
	  var equalities = [];  // Stack of indices where equalities are found.
	  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
	  /** @type {?string} */
	  var lastequality = null;
	  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
	  var pointer = 0;  // Index of current position.
	  // Is there an insertion operation before the last equality.
	  var pre_ins = false;
	  // Is there a deletion operation before the last equality.
	  var pre_del = false;
	  // Is there an insertion operation after the last equality.
	  var post_ins = false;
	  // Is there a deletion operation after the last equality.
	  var post_del = false;
	  while (pointer < diffs.length) {
	    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
	      if (diffs[pointer][1].length < this.Diff_EditCost &&
	          (post_ins || post_del)) {
	        // Candidate found.
	        equalities[equalitiesLength++] = pointer;
	        pre_ins = post_ins;
	        pre_del = post_del;
	        lastequality = diffs[pointer][1];
	      } else {
	        // Not a candidate, and can never become one.
	        equalitiesLength = 0;
	        lastequality = null;
	      }
	      post_ins = post_del = false;
	    } else {  // An insertion or deletion.
	      if (diffs[pointer][0] == DIFF_DELETE) {
	        post_del = true;
	      } else {
	        post_ins = true;
	      }
	      /*
	       * Five types to be split:
	       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
	       * <ins>A</ins>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<ins>C</ins>
	       * <ins>A</del>X<ins>C</ins><del>D</del>
	       * <ins>A</ins><del>B</del>X<del>C</del>
	       */
	      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
	                           ((lastequality.length < this.Diff_EditCost / 2) &&
	                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
	        // Duplicate record.
	        diffs.splice(equalities[equalitiesLength - 1], 0,
	                     [DIFF_DELETE, lastequality]);
	        // Change second copy to insert.
	        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
	        equalitiesLength--;  // Throw away the equality we just deleted;
	        lastequality = null;
	        if (pre_ins && pre_del) {
	          // No changes made which could affect previous entry, keep going.
	          post_ins = post_del = true;
	          equalitiesLength = 0;
	        } else {
	          equalitiesLength--;  // Throw away the previous equality.
	          pointer = equalitiesLength > 0 ?
	              equalities[equalitiesLength - 1] : -1;
	          post_ins = post_del = false;
	        }
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};
	
	
	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 */
	diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
	  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = this.diff_commonPrefix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              if ((pointer - count_delete - count_insert) > 0 &&
	                  diffs[pointer - count_delete - count_insert - 1][0] ==
	                  DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] +=
	                    text_insert.substring(0, commonlength);
	              } else {
	                diffs.splice(0, 0, [DIFF_EQUAL,
	                                    text_insert.substring(0, commonlength)]);
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = this.diff_commonSuffix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length -
	                  commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0, text_insert.length -
	                  commonlength);
	              text_delete = text_delete.substring(0, text_delete.length -
	                  commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          if (count_delete === 0) {
	            diffs.splice(pointer - count_insert,
	                count_delete + count_insert, [DIFF_INSERT, text_insert]);
	          } else if (count_insert === 0) {
	            diffs.splice(pointer - count_delete,
	                count_delete + count_insert, [DIFF_DELETE, text_delete]);
	          } else {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert, [DIFF_DELETE, text_delete],
	                [DIFF_INSERT, text_insert]);
	          }
	          pointer = pointer - count_delete - count_insert +
	                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer, 1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop();  // Remove the dummy entry at the end.
	  }
	
	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length -
	          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] +
	            diffs[pointer][1].substring(0, diffs[pointer][1].length -
	                                        diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 1, 1);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
	          diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] =
	            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
	            diffs[pointer + 1][1];
	        diffs.splice(pointer + 1, 1);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were made, the diff needs reordering and another shift sweep.
	  if (changes) {
	    this.diff_cleanupMerge(diffs);
	  }
	};
	
	
	/**
	 * loc is a location in text1, compute and return the equivalent location in
	 * text2.
	 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @param {number} loc Location within text1.
	 * @return {number} Location within text2.
	 */
	diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
	  var chars1 = 0;
	  var chars2 = 0;
	  var last_chars1 = 0;
	  var last_chars2 = 0;
	  var x;
	  for (x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
	      chars1 += diffs[x][1].length;
	    }
	    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
	      chars2 += diffs[x][1].length;
	    }
	    if (chars1 > loc) {  // Overshot the location.
	      break;
	    }
	    last_chars1 = chars1;
	    last_chars2 = chars2;
	  }
	  // Was the location was deleted?
	  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
	    return last_chars2;
	  }
	  // Add the remaining character length.
	  return last_chars2 + (loc - last_chars1);
	};
	
	
	/**
	 * Convert a diff array into a pretty HTML report.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} HTML representation.
	 */
	diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
	  var html = [];
	  var pattern_amp = /&/g;
	  var pattern_lt = /</g;
	  var pattern_gt = />/g;
	  var pattern_para = /\n/g;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];    // Operation (insert, delete, equal)
	    var data = diffs[x][1];  // Text of change.
	    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
	        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
	    switch (op) {
	      case DIFF_INSERT:
	        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
	        break;
	      case DIFF_DELETE:
	        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
	        break;
	      case DIFF_EQUAL:
	        html[x] = '<span>' + text + '</span>';
	        break;
	    }
	  }
	  return html.join('');
	};
	
	
	/**
	 * Compute and return the source text (all equalities and deletions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Source text.
	 */
	diff_match_patch.prototype.diff_text1 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_INSERT) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};
	
	
	/**
	 * Compute and return the destination text (all equalities and insertions).
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Destination text.
	 */
	diff_match_patch.prototype.diff_text2 = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    if (diffs[x][0] !== DIFF_DELETE) {
	      text[x] = diffs[x][1];
	    }
	  }
	  return text.join('');
	};
	
	
	/**
	 * Compute the Levenshtein distance; the number of inserted, deleted or
	 * substituted characters.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {number} Number of changes.
	 */
	diff_match_patch.prototype.diff_levenshtein = function(diffs) {
	  var levenshtein = 0;
	  var insertions = 0;
	  var deletions = 0;
	  for (var x = 0; x < diffs.length; x++) {
	    var op = diffs[x][0];
	    var data = diffs[x][1];
	    switch (op) {
	      case DIFF_INSERT:
	        insertions += data.length;
	        break;
	      case DIFF_DELETE:
	        deletions += data.length;
	        break;
	      case DIFF_EQUAL:
	        // A deletion and an insertion is one substitution.
	        levenshtein += Math.max(insertions, deletions);
	        insertions = 0;
	        deletions = 0;
	        break;
	    }
	  }
	  levenshtein += Math.max(insertions, deletions);
	  return levenshtein;
	};
	
	
	/**
	 * Crush the diff into an encoded string which describes the operations
	 * required to transform text1 into text2.
	 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
	 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
	 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
	 * @return {string} Delta text.
	 */
	diff_match_patch.prototype.diff_toDelta = function(diffs) {
	  var text = [];
	  for (var x = 0; x < diffs.length; x++) {
	    switch (diffs[x][0]) {
	      case DIFF_INSERT:
	        text[x] = '+' + encodeURI(diffs[x][1]);
	        break;
	      case DIFF_DELETE:
	        text[x] = '-' + diffs[x][1].length;
	        break;
	      case DIFF_EQUAL:
	        text[x] = '=' + diffs[x][1].length;
	        break;
	    }
	  }
	  return text.join('\t').replace(/%20/g, ' ');
	};
	
	
	/**
	 * Given the original text1, and an encoded string which describes the
	 * operations required to transform text1 into text2, compute the full diff.
	 * @param {string} text1 Source string for the diff.
	 * @param {string} delta Delta text.
	 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
	  var diffs = [];
	  var diffsLength = 0;  // Keeping our own length var is faster in JS.
	  var pointer = 0;  // Cursor in text1
	  var tokens = delta.split(/\t/g);
	  for (var x = 0; x < tokens.length; x++) {
	    // Each token begins with a one character parameter which specifies the
	    // operation of this token (delete, insert, equality).
	    var param = tokens[x].substring(1);
	    switch (tokens[x].charAt(0)) {
	      case '+':
	        try {
	          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
	        } catch (ex) {
	          // Malformed URI sequence.
	          throw new Error('Illegal escape in diff_fromDelta: ' + param);
	        }
	        break;
	      case '-':
	        // Fall through.
	      case '=':
	        var n = parseInt(param, 10);
	        if (isNaN(n) || n < 0) {
	          throw new Error('Invalid number in diff_fromDelta: ' + param);
	        }
	        var text = text1.substring(pointer, pointer += n);
	        if (tokens[x].charAt(0) == '=') {
	          diffs[diffsLength++] = [DIFF_EQUAL, text];
	        } else {
	          diffs[diffsLength++] = [DIFF_DELETE, text];
	        }
	        break;
	      default:
	        // Blank tokens are ok (from a trailing \t).
	        // Anything else is an error.
	        if (tokens[x]) {
	          throw new Error('Invalid diff operation in diff_fromDelta: ' +
	                          tokens[x]);
	        }
	    }
	  }
	  if (pointer != text1.length) {
	    throw new Error('Delta length (' + pointer +
	        ') does not equal source text length (' + text1.length + ').');
	  }
	  return diffs;
	};
	
	
	//  MATCH FUNCTIONS
	
	
	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc'.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 */
	diff_match_patch.prototype.match_main = function(text, pattern, loc) {
	  // Check for null inputs.
	  if (text == null || pattern == null || loc == null) {
	    throw new Error('Null input. (match_main)');
	  }
	
	  loc = Math.max(0, Math.min(loc, text.length));
	  if (text == pattern) {
	    // Shortcut (potentially not guaranteed by the algorithm)
	    return 0;
	  } else if (!text.length) {
	    // Nothing to match.
	    return -1;
	  } else if (text.substring(loc, loc + pattern.length) == pattern) {
	    // Perfect match at the perfect spot!  (Includes case of null pattern)
	    return loc;
	  } else {
	    // Do a fuzzy compare.
	    return this.match_bitap_(text, pattern, loc);
	  }
	};
	
	
	/**
	 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
	 * Bitap algorithm.
	 * @param {string} text The text to search.
	 * @param {string} pattern The pattern to search for.
	 * @param {number} loc The location to search around.
	 * @return {number} Best match index or -1.
	 * @private
	 */
	diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
	  if (pattern.length > this.Match_MaxBits) {
	    throw new Error('Pattern too long for this browser.');
	  }
	
	  // Initialise the alphabet.
	  var s = this.match_alphabet_(pattern);
	
	  var dmp = this;  // 'this' becomes 'window' in a closure.
	
	  /**
	   * Compute and return the score for a match with e errors and x location.
	   * Accesses loc and pattern through being a closure.
	   * @param {number} e Number of errors in match.
	   * @param {number} x Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  function match_bitapScore_(e, x) {
	    var accuracy = e / pattern.length;
	    var proximity = Math.abs(loc - x);
	    if (!dmp.Match_Distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy;
	    }
	    return accuracy + (proximity / dmp.Match_Distance);
	  }
	
	  // Highest score beyond which we give up.
	  var score_threshold = this.Match_Threshold;
	  // Is there a nearby exact match? (speedup)
	  var best_loc = text.indexOf(pattern, loc);
	  if (best_loc != -1) {
	    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    // What about in the other direction? (speedup)
	    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
	    if (best_loc != -1) {
	      score_threshold =
	          Math.min(match_bitapScore_(0, best_loc), score_threshold);
	    }
	  }
	
	  // Initialise the bit arrays.
	  var matchmask = 1 << (pattern.length - 1);
	  best_loc = -1;
	
	  var bin_min, bin_mid;
	  var bin_max = pattern.length + text.length;
	  var last_rd;
	  for (var d = 0; d < pattern.length; d++) {
	    // Scan for the best match; each iteration allows for one more error.
	    // Run a binary search to determine how far from 'loc' we can stray at this
	    // error level.
	    bin_min = 0;
	    bin_mid = bin_max;
	    while (bin_min < bin_mid) {
	      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
	        bin_min = bin_mid;
	      } else {
	        bin_max = bin_mid;
	      }
	      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
	    }
	    // Use the result from this iteration as the maximum for the next.
	    bin_max = bin_mid;
	    var start = Math.max(1, loc - bin_mid + 1);
	    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
	
	    var rd = Array(finish + 2);
	    rd[finish + 1] = (1 << d) - 1;
	    for (var j = finish; j >= start; j--) {
	      // The alphabet (s) is a sparse hash, so the following line generates
	      // warnings.
	      var charMatch = s[text.charAt(j - 1)];
	      if (d === 0) {  // First pass: exact match.
	        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
	      } else {  // Subsequent passes: fuzzy match.
	        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
	                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
	                last_rd[j + 1];
	      }
	      if (rd[j] & matchmask) {
	        var score = match_bitapScore_(d, j - 1);
	        // This match will almost certainly be better than any existing match.
	        // But check anyway.
	        if (score <= score_threshold) {
	          // Told you so.
	          score_threshold = score;
	          best_loc = j - 1;
	          if (best_loc > loc) {
	            // When passing loc, don't exceed our current distance from loc.
	            start = Math.max(1, 2 * loc - best_loc);
	          } else {
	            // Already passed loc, downhill from here on in.
	            break;
	          }
	        }
	      }
	    }
	    // No hope for a (better) match at greater error levels.
	    if (match_bitapScore_(d + 1, loc) > score_threshold) {
	      break;
	    }
	    last_rd = rd;
	  }
	  return best_loc;
	};
	
	
	/**
	 * Initialise the alphabet for the Bitap algorithm.
	 * @param {string} pattern The text to encode.
	 * @return {!Object} Hash of character locations.
	 * @private
	 */
	diff_match_patch.prototype.match_alphabet_ = function(pattern) {
	  var s = {};
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] = 0;
	  }
	  for (var i = 0; i < pattern.length; i++) {
	    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
	  }
	  return s;
	};
	
	
	//  PATCH FUNCTIONS
	
	
	/**
	 * Increase the context until it is unique,
	 * but don't let the pattern expand beyond Match_MaxBits.
	 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
	 * @param {string} text Source text.
	 * @private
	 */
	diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
	  if (text.length == 0) {
	    return;
	  }
	  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
	  var padding = 0;
	
	  // Look for the first and last matches of pattern in text.  If two different
	  // matches are found, increase the pattern length.
	  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
	         pattern.length < this.Match_MaxBits - this.Patch_Margin -
	         this.Patch_Margin) {
	    padding += this.Patch_Margin;
	    pattern = text.substring(patch.start2 - padding,
	                             patch.start2 + patch.length1 + padding);
	  }
	  // Add one chunk for good luck.
	  padding += this.Patch_Margin;
	
	  // Add the prefix.
	  var prefix = text.substring(patch.start2 - padding, patch.start2);
	  if (prefix) {
	    patch.diffs.unshift([DIFF_EQUAL, prefix]);
	  }
	  // Add the suffix.
	  var suffix = text.substring(patch.start2 + patch.length1,
	                              patch.start2 + patch.length1 + padding);
	  if (suffix) {
	    patch.diffs.push([DIFF_EQUAL, suffix]);
	  }
	
	  // Roll back the start points.
	  patch.start1 -= prefix.length;
	  patch.start2 -= prefix.length;
	  // Extend the lengths.
	  patch.length1 += prefix.length + suffix.length;
	  patch.length2 += prefix.length + suffix.length;
	};
	
	
	/**
	 * Compute a list of patches to turn text1 into text2.
	 * Use diffs if provided, otherwise compute it ourselves.
	 * There are four ways to call this function, depending on what data is
	 * available to the caller:
	 * Method 1:
	 * a = text1, b = text2
	 * Method 2:
	 * a = diffs
	 * Method 3 (optimal):
	 * a = text1, b = diffs
	 * Method 4 (deprecated, use method 3):
	 * a = text1, b = text2, c = diffs
	 *
	 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
	 * Array of diff tuples for text1 to text2 (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_b text2 (methods 1,4) or
	 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
	 * @param {string|!Array.<!diff_match_patch.Diff>} opt_c Array of diff tuples
	 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
	  var text1, diffs;
	  if (typeof a == 'string' && typeof opt_b == 'string' &&
	      typeof opt_c == 'undefined') {
	    // Method 1: text1, text2
	    // Compute diffs from text1 and text2.
	    text1 = /** @type {string} */(a);
	    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
	    if (diffs.length > 2) {
	      this.diff_cleanupSemantic(diffs);
	      this.diff_cleanupEfficiency(diffs);
	    }
	  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
	      typeof opt_c == 'undefined') {
	    // Method 2: diffs
	    // Compute text1 from diffs.
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
	    text1 = this.diff_text1(diffs);
	  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
	      typeof opt_c == 'undefined') {
	    // Method 3: text1, diffs
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
	  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
	      opt_c && typeof opt_c == 'object') {
	    // Method 4: text1, text2, diffs
	    // text2 is not used.
	    text1 = /** @type {string} */(a);
	    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
	  } else {
	    throw new Error('Unknown call format to patch_make.');
	  }
	
	  if (diffs.length === 0) {
	    return [];  // Get rid of the null case.
	  }
	  var patches = [];
	  var patch = new diff_match_patch.patch_obj();
	  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
	  var char_count1 = 0;  // Number of characters into the text1 string.
	  var char_count2 = 0;  // Number of characters into the text2 string.
	  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
	  // text2 (postpatch_text).  We recreate the patches one by one to determine
	  // context info.
	  var prepatch_text = text1;
	  var postpatch_text = text1;
	  for (var x = 0; x < diffs.length; x++) {
	    var diff_type = diffs[x][0];
	    var diff_text = diffs[x][1];
	
	    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
	      // A new patch starts here.
	      patch.start1 = char_count1;
	      patch.start2 = char_count2;
	    }
	
	    switch (diff_type) {
	      case DIFF_INSERT:
	        patch.diffs[patchDiffLength++] = diffs[x];
	        patch.length2 += diff_text.length;
	        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
	                         postpatch_text.substring(char_count2);
	        break;
	      case DIFF_DELETE:
	        patch.length1 += diff_text.length;
	        patch.diffs[patchDiffLength++] = diffs[x];
	        postpatch_text = postpatch_text.substring(0, char_count2) +
	                         postpatch_text.substring(char_count2 +
	                             diff_text.length);
	        break;
	      case DIFF_EQUAL:
	        if (diff_text.length <= 2 * this.Patch_Margin &&
	            patchDiffLength && diffs.length != x + 1) {
	          // Small equality inside a patch.
	          patch.diffs[patchDiffLength++] = diffs[x];
	          patch.length1 += diff_text.length;
	          patch.length2 += diff_text.length;
	        } else if (diff_text.length >= 2 * this.Patch_Margin) {
	          // Time for a new patch.
	          if (patchDiffLength) {
	            this.patch_addContext_(patch, prepatch_text);
	            patches.push(patch);
	            patch = new diff_match_patch.patch_obj();
	            patchDiffLength = 0;
	            // Unlike Unidiff, our patch lists have a rolling context.
	            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
	            // Update prepatch text & pos to reflect the application of the
	            // just completed patch.
	            prepatch_text = postpatch_text;
	            char_count1 = char_count2;
	          }
	        }
	        break;
	    }
	
	    // Update the current character count.
	    if (diff_type !== DIFF_INSERT) {
	      char_count1 += diff_text.length;
	    }
	    if (diff_type !== DIFF_DELETE) {
	      char_count2 += diff_text.length;
	    }
	  }
	  // Pick up the leftover patch if not empty.
	  if (patchDiffLength) {
	    this.patch_addContext_(patch, prepatch_text);
	    patches.push(patch);
	  }
	
	  return patches;
	};
	
	
	/**
	 * Given an array of patches, return another array that is identical.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_deepCopy = function(patches) {
	  // Making deep copies is hard in JavaScript.
	  var patchesCopy = [];
	  for (var x = 0; x < patches.length; x++) {
	    var patch = patches[x];
	    var patchCopy = new diff_match_patch.patch_obj();
	    patchCopy.diffs = [];
	    for (var y = 0; y < patch.diffs.length; y++) {
	      patchCopy.diffs[y] = patch.diffs[y].slice();
	    }
	    patchCopy.start1 = patch.start1;
	    patchCopy.start2 = patch.start2;
	    patchCopy.length1 = patch.length1;
	    patchCopy.length2 = patch.length2;
	    patchesCopy[x] = patchCopy;
	  }
	  return patchesCopy;
	};
	
	
	/**
	 * Merge a set of patches onto the text.  Return a patched text, as well
	 * as a list of true/false values indicating which patches were applied.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @param {string} text Old text.
	 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
	 *      new text and an array of boolean values.
	 */
	diff_match_patch.prototype.patch_apply = function(patches, text) {
	  if (patches.length == 0) {
	    return [text, []];
	  }
	
	  // Deep copy the patches so that no changes are made to originals.
	  patches = this.patch_deepCopy(patches);
	
	  var nullPadding = this.patch_addPadding(patches);
	  text = nullPadding + text + nullPadding;
	
	  this.patch_splitMax(patches);
	  // delta keeps track of the offset between the expected and actual location
	  // of the previous patch.  If there are patches expected at positions 10 and
	  // 20, but the first patch was found at 12, delta is 2 and the second patch
	  // has an effective expected position of 22.
	  var delta = 0;
	  var results = [];
	  for (var x = 0; x < patches.length; x++) {
	    var expected_loc = patches[x].start2 + delta;
	    var text1 = this.diff_text1(patches[x].diffs);
	    var start_loc;
	    var end_loc = -1;
	    if (text1.length > this.Match_MaxBits) {
	      // patch_splitMax will only provide an oversized pattern in the case of
	      // a monster delete.
	      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
	                                  expected_loc);
	      if (start_loc != -1) {
	        end_loc = this.match_main(text,
	            text1.substring(text1.length - this.Match_MaxBits),
	            expected_loc + text1.length - this.Match_MaxBits);
	        if (end_loc == -1 || start_loc >= end_loc) {
	          // Can't find valid trailing context.  Drop this patch.
	          start_loc = -1;
	        }
	      }
	    } else {
	      start_loc = this.match_main(text, text1, expected_loc);
	    }
	    if (start_loc == -1) {
	      // No match found.  :(
	      results[x] = false;
	      // Subtract the delta for this failed patch from subsequent patches.
	      delta -= patches[x].length2 - patches[x].length1;
	    } else {
	      // Found a match.  :)
	      results[x] = true;
	      delta = start_loc - expected_loc;
	      var text2;
	      if (end_loc == -1) {
	        text2 = text.substring(start_loc, start_loc + text1.length);
	      } else {
	        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
	      }
	      if (text1 == text2) {
	        // Perfect match, just shove the replacement text in.
	        text = text.substring(0, start_loc) +
	               this.diff_text2(patches[x].diffs) +
	               text.substring(start_loc + text1.length);
	      } else {
	        // Imperfect match.  Run a diff to get a framework of equivalent
	        // indices.
	        var diffs = this.diff_main(text1, text2, false);
	        if (text1.length > this.Match_MaxBits &&
	            this.diff_levenshtein(diffs) / text1.length >
	            this.Patch_DeleteThreshold) {
	          // The end points match, but the content is unacceptably bad.
	          results[x] = false;
	        } else {
	          this.diff_cleanupSemanticLossless(diffs);
	          var index1 = 0;
	          var index2;
	          for (var y = 0; y < patches[x].diffs.length; y++) {
	            var mod = patches[x].diffs[y];
	            if (mod[0] !== DIFF_EQUAL) {
	              index2 = this.diff_xIndex(diffs, index1);
	            }
	            if (mod[0] === DIFF_INSERT) {  // Insertion
	              text = text.substring(0, start_loc + index2) + mod[1] +
	                     text.substring(start_loc + index2);
	            } else if (mod[0] === DIFF_DELETE) {  // Deletion
	              text = text.substring(0, start_loc + index2) +
	                     text.substring(start_loc + this.diff_xIndex(diffs,
	                         index1 + mod[1].length));
	            }
	            if (mod[0] !== DIFF_DELETE) {
	              index1 += mod[1].length;
	            }
	          }
	        }
	      }
	    }
	  }
	  // Strip the padding off.
	  text = text.substring(nullPadding.length, text.length - nullPadding.length);
	  return [text, results];
	};
	
	
	/**
	 * Add some padding on text start and end so that edges can match something.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} The padding string added to each side.
	 */
	diff_match_patch.prototype.patch_addPadding = function(patches) {
	  var paddingLength = this.Patch_Margin;
	  var nullPadding = '';
	  for (var x = 1; x <= paddingLength; x++) {
	    nullPadding += String.fromCharCode(x);
	  }
	
	  // Bump all the patches forward.
	  for (var x = 0; x < patches.length; x++) {
	    patches[x].start1 += paddingLength;
	    patches[x].start2 += paddingLength;
	  }
	
	  // Add some padding on start of first diff.
	  var patch = patches[0];
	  var diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.unshift([DIFF_EQUAL, nullPadding]);
	    patch.start1 -= paddingLength;  // Should be 0.
	    patch.start2 -= paddingLength;  // Should be 0.
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[0][1].length) {
	    // Grow first equality.
	    var extraLength = paddingLength - diffs[0][1].length;
	    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
	    patch.start1 -= extraLength;
	    patch.start2 -= extraLength;
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }
	
	  // Add some padding on end of last diff.
	  patch = patches[patches.length - 1];
	  diffs = patch.diffs;
	  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
	    // Add nullPadding equality.
	    diffs.push([DIFF_EQUAL, nullPadding]);
	    patch.length1 += paddingLength;
	    patch.length2 += paddingLength;
	  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
	    // Grow last equality.
	    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
	    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
	    patch.length1 += extraLength;
	    patch.length2 += extraLength;
	  }
	
	  return nullPadding;
	};
	
	
	/**
	 * Look through the patches and break up any which are longer than the maximum
	 * limit of the match algorithm.
	 * Intended to be called only from within patch_apply.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 */
	diff_match_patch.prototype.patch_splitMax = function(patches) {
	  var patch_size = this.Match_MaxBits;
	  for (var x = 0; x < patches.length; x++) {
	    if (patches[x].length1 <= patch_size) {
	      continue;
	    }
	    var bigpatch = patches[x];
	    // Remove the big old patch.
	    patches.splice(x--, 1);
	    var start1 = bigpatch.start1;
	    var start2 = bigpatch.start2;
	    var precontext = '';
	    while (bigpatch.diffs.length !== 0) {
	      // Create one of several smaller patches.
	      var patch = new diff_match_patch.patch_obj();
	      var empty = true;
	      patch.start1 = start1 - precontext.length;
	      patch.start2 = start2 - precontext.length;
	      if (precontext !== '') {
	        patch.length1 = patch.length2 = precontext.length;
	        patch.diffs.push([DIFF_EQUAL, precontext]);
	      }
	      while (bigpatch.diffs.length !== 0 &&
	             patch.length1 < patch_size - this.Patch_Margin) {
	        var diff_type = bigpatch.diffs[0][0];
	        var diff_text = bigpatch.diffs[0][1];
	        if (diff_type === DIFF_INSERT) {
	          // Insertions are harmless.
	          patch.length2 += diff_text.length;
	          start2 += diff_text.length;
	          patch.diffs.push(bigpatch.diffs.shift());
	          empty = false;
	        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
	                   patch.diffs[0][0] == DIFF_EQUAL &&
	                   diff_text.length > 2 * patch_size) {
	          // This is a large deletion.  Let it pass in one chunk.
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          empty = false;
	          patch.diffs.push([diff_type, diff_text]);
	          bigpatch.diffs.shift();
	        } else {
	          // Deletion or equality.  Only take as much as we can stomach.
	          diff_text = diff_text.substring(0,
	              patch_size - patch.length1 - this.Patch_Margin);
	          patch.length1 += diff_text.length;
	          start1 += diff_text.length;
	          if (diff_type === DIFF_EQUAL) {
	            patch.length2 += diff_text.length;
	            start2 += diff_text.length;
	          } else {
	            empty = false;
	          }
	          patch.diffs.push([diff_type, diff_text]);
	          if (diff_text == bigpatch.diffs[0][1]) {
	            bigpatch.diffs.shift();
	          } else {
	            bigpatch.diffs[0][1] =
	                bigpatch.diffs[0][1].substring(diff_text.length);
	          }
	        }
	      }
	      // Compute the head context for the next patch.
	      precontext = this.diff_text2(patch.diffs);
	      precontext =
	          precontext.substring(precontext.length - this.Patch_Margin);
	      // Append the end context for this patch.
	      var postcontext = this.diff_text1(bigpatch.diffs)
	                            .substring(0, this.Patch_Margin);
	      if (postcontext !== '') {
	        patch.length1 += postcontext.length;
	        patch.length2 += postcontext.length;
	        if (patch.diffs.length !== 0 &&
	            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
	          patch.diffs[patch.diffs.length - 1][1] += postcontext;
	        } else {
	          patch.diffs.push([DIFF_EQUAL, postcontext]);
	        }
	      }
	      if (!empty) {
	        patches.splice(++x, 0, patch);
	      }
	    }
	  }
	};
	
	
	/**
	 * Take a list of patches and return a textual representation.
	 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
	 * @return {string} Text representation of patches.
	 */
	diff_match_patch.prototype.patch_toText = function(patches) {
	  var text = [];
	  for (var x = 0; x < patches.length; x++) {
	    text[x] = patches[x];
	  }
	  return text.join('');
	};
	
	
	/**
	 * Parse a textual representation of patches and return a list of Patch objects.
	 * @param {string} textline Text representation of patches.
	 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
	 * @throws {!Error} If invalid input.
	 */
	diff_match_patch.prototype.patch_fromText = function(textline) {
	  var patches = [];
	  if (!textline) {
	    return patches;
	  }
	  var text = textline.split('\n');
	  var textPointer = 0;
	  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
	  while (textPointer < text.length) {
	    var m = text[textPointer].match(patchHeader);
	    if (!m) {
	      throw new Error('Invalid patch string: ' + text[textPointer]);
	    }
	    var patch = new diff_match_patch.patch_obj();
	    patches.push(patch);
	    patch.start1 = parseInt(m[1], 10);
	    if (m[2] === '') {
	      patch.start1--;
	      patch.length1 = 1;
	    } else if (m[2] == '0') {
	      patch.length1 = 0;
	    } else {
	      patch.start1--;
	      patch.length1 = parseInt(m[2], 10);
	    }
	
	    patch.start2 = parseInt(m[3], 10);
	    if (m[4] === '') {
	      patch.start2--;
	      patch.length2 = 1;
	    } else if (m[4] == '0') {
	      patch.length2 = 0;
	    } else {
	      patch.start2--;
	      patch.length2 = parseInt(m[4], 10);
	    }
	    textPointer++;
	
	    while (textPointer < text.length) {
	      var sign = text[textPointer].charAt(0);
	      try {
	        var line = decodeURI(text[textPointer].substring(1));
	      } catch (ex) {
	        // Malformed URI sequence.
	        throw new Error('Illegal escape in patch_fromText: ' + line);
	      }
	      if (sign == '-') {
	        // Deletion.
	        patch.diffs.push([DIFF_DELETE, line]);
	      } else if (sign == '+') {
	        // Insertion.
	        patch.diffs.push([DIFF_INSERT, line]);
	      } else if (sign == ' ') {
	        // Minor equality.
	        patch.diffs.push([DIFF_EQUAL, line]);
	      } else if (sign == '@') {
	        // Start of next patch.
	        break;
	      } else if (sign === '') {
	        // Blank line?  Whatever.
	      } else {
	        // WTF?
	        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
	      }
	      textPointer++;
	    }
	  }
	  return patches;
	};
	
	
	/**
	 * Class representing one patch operation.
	 * @constructor
	 */
	diff_match_patch.patch_obj = function() {
	  /** @type {!Array.<!diff_match_patch.Diff>} */
	  this.diffs = [];
	  /** @type {?number} */
	  this.start1 = null;
	  /** @type {?number} */
	  this.start2 = null;
	  /** @type {number} */
	  this.length1 = 0;
	  /** @type {number} */
	  this.length2 = 0;
	};
	
	
	/**
	 * Emmulate GNU diff's format.
	 * Header: @@ -382,8 +481,9 @@
	 * Indicies are printed as 1-based, not 0-based.
	 * @return {string} The GNU diff string.
	 */
	diff_match_patch.patch_obj.prototype.toString = function() {
	  var coords1, coords2;
	  if (this.length1 === 0) {
	    coords1 = this.start1 + ',0';
	  } else if (this.length1 == 1) {
	    coords1 = this.start1 + 1;
	  } else {
	    coords1 = (this.start1 + 1) + ',' + this.length1;
	  }
	  if (this.length2 === 0) {
	    coords2 = this.start2 + ',0';
	  } else if (this.length2 == 1) {
	    coords2 = this.start2 + 1;
	  } else {
	    coords2 = (this.start2 + 1) + ',' + this.length2;
	  }
	  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
	  var op;
	  // Escape the body of the patch with %xx notation.
	  for (var x = 0; x < this.diffs.length; x++) {
	    switch (this.diffs[x][0]) {
	      case DIFF_INSERT:
	        op = '+';
	        break;
	      case DIFF_DELETE:
	        op = '-';
	        break;
	      case DIFF_EQUAL:
	        op = ' ';
	        break;
	    }
	    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
	  }
	  return text.join('').replace(/%20/g, ' ');
	};
	
	
	// The following export code was added by @ForbesLindesay
	module.exports = diff_match_patch;
	module.exports['diff_match_patch'] = diff_match_patch;
	module.exports['DIFF_DELETE'] = DIFF_DELETE;
	module.exports['DIFF_INSERT'] = DIFF_INSERT;
	module.exports['DIFF_EQUAL'] = DIFF_EQUAL;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	// declare global: diff_match_patch, DIFF_INSERT, DIFF_DELETE, DIFF_EQUAL
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(6)); // Note non-packaged dependency diff_match_patch
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "diff_match_patch"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";
	  var Pos = CodeMirror.Pos;
	  var svgNS = "http://www.w3.org/2000/svg";
	
	  function DiffView(mv, type) {
	    this.mv = mv;
	    this.type = type;
	    this.classes = type == "left"
	      ? {chunk: "CodeMirror-merge-l-chunk",
	         start: "CodeMirror-merge-l-chunk-start",
	         end: "CodeMirror-merge-l-chunk-end",
	         insert: "CodeMirror-merge-l-inserted",
	         del: "CodeMirror-merge-l-deleted",
	         connect: "CodeMirror-merge-l-connect"}
	      : {chunk: "CodeMirror-merge-r-chunk",
	         start: "CodeMirror-merge-r-chunk-start",
	         end: "CodeMirror-merge-r-chunk-end",
	         insert: "CodeMirror-merge-r-inserted",
	         del: "CodeMirror-merge-r-deleted",
	         connect: "CodeMirror-merge-r-connect"};
	  }
	
	  DiffView.prototype = {
	    constructor: DiffView,
	    init: function(pane, orig, options) {
	      this.edit = this.mv.edit;
	      (this.edit.state.diffViews || (this.edit.state.diffViews = [])).push(this);
	      this.orig = CodeMirror(pane, copyObj({value: orig, readOnly: !this.mv.options.allowEditingOriginals}, copyObj(options)));
	      this.orig.state.diffViews = [this];
	
	      this.diff = getDiff(asString(orig), asString(options.value));
	      this.chunks = getChunks(this.diff);
	      this.diffOutOfDate = this.dealigned = false;
	
	      this.showDifferences = options.showDifferences !== false;
	      this.forceUpdate = registerUpdate(this);
	      setScrollLock(this, true, false);
	      registerScroll(this);
	    },
	    setShowDifferences: function(val) {
	      val = val !== false;
	      if (val != this.showDifferences) {
	        this.showDifferences = val;
	        this.forceUpdate("full");
	      }
	    }
	  };
	
	  function ensureDiff(dv) {
	    if (dv.diffOutOfDate) {
	      dv.diff = getDiff(dv.orig.getValue(), dv.edit.getValue());
	      dv.chunks = getChunks(dv.diff);
	      dv.diffOutOfDate = false;
	      CodeMirror.signal(dv.edit, "updateDiff", dv.diff);
	    }
	  }
	
	  var updating = false;
	  function registerUpdate(dv) {
	    var edit = {from: 0, to: 0, marked: []};
	    var orig = {from: 0, to: 0, marked: []};
	    var debounceChange, updatingFast = false;
	    function update(mode) {
	      updating = true;
	      updatingFast = false;
	      if (mode == "full") {
	        if (dv.svg) clear(dv.svg);
	        if (dv.copyButtons) clear(dv.copyButtons);
	        clearMarks(dv.edit, edit.marked, dv.classes);
	        clearMarks(dv.orig, orig.marked, dv.classes);
	        edit.from = edit.to = orig.from = orig.to = 0;
	      }
	      ensureDiff(dv);
	      if (dv.showDifferences) {
	        updateMarks(dv.edit, dv.diff, edit, DIFF_INSERT, dv.classes);
	        updateMarks(dv.orig, dv.diff, orig, DIFF_DELETE, dv.classes);
	      }
	      makeConnections(dv);
	
	      if (dv.mv.options.connect == "align")
	        alignChunks(dv);
	      updating = false;
	    }
	    function setDealign(fast) {
	      if (updating) return;
	      dv.dealigned = true;
	      set(fast);
	    }
	    function set(fast) {
	      if (updating || updatingFast) return;
	      clearTimeout(debounceChange);
	      if (fast === true) updatingFast = true;
	      debounceChange = setTimeout(update, fast === true ? 20 : 250);
	    }
	    function change(_cm, change) {
	      if (!dv.diffOutOfDate) {
	        dv.diffOutOfDate = true;
	        edit.from = edit.to = orig.from = orig.to = 0;
	      }
	      // Update faster when a line was added/removed
	      setDealign(change.text.length - 1 != change.to.line - change.from.line);
	    }
	    dv.edit.on("change", change);
	    dv.orig.on("change", change);
	    dv.edit.on("markerAdded", setDealign);
	    dv.edit.on("markerCleared", setDealign);
	    dv.orig.on("markerAdded", setDealign);
	    dv.orig.on("markerCleared", setDealign);
	    dv.edit.on("viewportChange", function() { set(false); });
	    dv.orig.on("viewportChange", function() { set(false); });
	    update();
	    return update;
	  }
	
	  function registerScroll(dv) {
	    dv.edit.on("scroll", function() {
	      syncScroll(dv, DIFF_INSERT) && makeConnections(dv);
	    });
	    dv.orig.on("scroll", function() {
	      syncScroll(dv, DIFF_DELETE) && makeConnections(dv);
	    });
	  }
	
	  function syncScroll(dv, type) {
	    // Change handler will do a refresh after a timeout when diff is out of date
	    if (dv.diffOutOfDate) return false;
	    if (!dv.lockScroll) return true;
	    var editor, other, now = +new Date;
	    if (type == DIFF_INSERT) { editor = dv.edit; other = dv.orig; }
	    else { editor = dv.orig; other = dv.edit; }
	    // Don't take action if the position of this editor was recently set
	    // (to prevent feedback loops)
	    if (editor.state.scrollSetBy == dv && (editor.state.scrollSetAt || 0) + 50 > now) return false;
	
	    var sInfo = editor.getScrollInfo();
	    if (dv.mv.options.connect == "align") {
	      targetPos = sInfo.top;
	    } else {
	      var halfScreen = .5 * sInfo.clientHeight, midY = sInfo.top + halfScreen;
	      var mid = editor.lineAtHeight(midY, "local");
	      var around = chunkBoundariesAround(dv.chunks, mid, type == DIFF_INSERT);
	      var off = getOffsets(editor, type == DIFF_INSERT ? around.edit : around.orig);
	      var offOther = getOffsets(other, type == DIFF_INSERT ? around.orig : around.edit);
	      var ratio = (midY - off.top) / (off.bot - off.top);
	      var targetPos = (offOther.top - halfScreen) + ratio * (offOther.bot - offOther.top);
	
	      var botDist, mix;
	      // Some careful tweaking to make sure no space is left out of view
	      // when scrolling to top or bottom.
	      if (targetPos > sInfo.top && (mix = sInfo.top / halfScreen) < 1) {
	        targetPos = targetPos * mix + sInfo.top * (1 - mix);
	      } else if ((botDist = sInfo.height - sInfo.clientHeight - sInfo.top) < halfScreen) {
	        var otherInfo = other.getScrollInfo();
	        var botDistOther = otherInfo.height - otherInfo.clientHeight - targetPos;
	        if (botDistOther > botDist && (mix = botDist / halfScreen) < 1)
	          targetPos = targetPos * mix + (otherInfo.height - otherInfo.clientHeight - botDist) * (1 - mix);
	      }
	    }
	
	    other.scrollTo(sInfo.left, targetPos);
	    other.state.scrollSetAt = now;
	    other.state.scrollSetBy = dv;
	    return true;
	  }
	
	  function getOffsets(editor, around) {
	    var bot = around.after;
	    if (bot == null) bot = editor.lastLine() + 1;
	    return {top: editor.heightAtLine(around.before || 0, "local"),
	            bot: editor.heightAtLine(bot, "local")};
	  }
	
	  function setScrollLock(dv, val, action) {
	    dv.lockScroll = val;
	    if (val && action != false) syncScroll(dv, DIFF_INSERT) && makeConnections(dv);
	    dv.lockButton.innerHTML = val ? "\u21db\u21da" : "\u21db&nbsp;&nbsp;\u21da";
	  }
	
	  // Updating the marks for editor content
	
	  function clearMarks(editor, arr, classes) {
	    for (var i = 0; i < arr.length; ++i) {
	      var mark = arr[i];
	      if (mark instanceof CodeMirror.TextMarker) {
	        mark.clear();
	      } else if (mark.parent) {
	        editor.removeLineClass(mark, "background", classes.chunk);
	        editor.removeLineClass(mark, "background", classes.start);
	        editor.removeLineClass(mark, "background", classes.end);
	      }
	    }
	    arr.length = 0;
	  }
	
	  // FIXME maybe add a margin around viewport to prevent too many updates
	  function updateMarks(editor, diff, state, type, classes) {
	    var vp = editor.getViewport();
	    editor.operation(function() {
	      if (state.from == state.to || vp.from - state.to > 20 || state.from - vp.to > 20) {
	        clearMarks(editor, state.marked, classes);
	        markChanges(editor, diff, type, state.marked, vp.from, vp.to, classes);
	        state.from = vp.from; state.to = vp.to;
	      } else {
	        if (vp.from < state.from) {
	          markChanges(editor, diff, type, state.marked, vp.from, state.from, classes);
	          state.from = vp.from;
	        }
	        if (vp.to > state.to) {
	          markChanges(editor, diff, type, state.marked, state.to, vp.to, classes);
	          state.to = vp.to;
	        }
	      }
	    });
	  }
	
	  function markChanges(editor, diff, type, marks, from, to, classes) {
	    var pos = Pos(0, 0);
	    var top = Pos(from, 0), bot = editor.clipPos(Pos(to - 1));
	    var cls = type == DIFF_DELETE ? classes.del : classes.insert;
	    function markChunk(start, end) {
	      var bfrom = Math.max(from, start), bto = Math.min(to, end);
	      for (var i = bfrom; i < bto; ++i) {
	        var line = editor.addLineClass(i, "background", classes.chunk);
	        if (i == start) editor.addLineClass(line, "background", classes.start);
	        if (i == end - 1) editor.addLineClass(line, "background", classes.end);
	        marks.push(line);
	      }
	      // When the chunk is empty, make sure a horizontal line shows up
	      if (start == end && bfrom == end && bto == end) {
	        if (bfrom)
	          marks.push(editor.addLineClass(bfrom - 1, "background", classes.end));
	        else
	          marks.push(editor.addLineClass(bfrom, "background", classes.start));
	      }
	    }
	
	    var chunkStart = 0;
	    for (var i = 0; i < diff.length; ++i) {
	      var part = diff[i], tp = part[0], str = part[1];
	      if (tp == DIFF_EQUAL) {
	        var cleanFrom = pos.line + (startOfLineClean(diff, i) ? 0 : 1);
	        moveOver(pos, str);
	        var cleanTo = pos.line + (endOfLineClean(diff, i) ? 1 : 0);
	        if (cleanTo > cleanFrom) {
	          if (i) markChunk(chunkStart, cleanFrom);
	          chunkStart = cleanTo;
	        }
	      } else {
	        if (tp == type) {
	          var end = moveOver(pos, str, true);
	          var a = posMax(top, pos), b = posMin(bot, end);
	          if (!posEq(a, b))
	            marks.push(editor.markText(a, b, {className: cls}));
	          pos = end;
	        }
	      }
	    }
	    if (chunkStart <= pos.line) markChunk(chunkStart, pos.line + 1);
	  }
	
	  // Updating the gap between editor and original
	
	  function makeConnections(dv) {
	    if (!dv.showDifferences) return;
	
	    if (dv.svg) {
	      clear(dv.svg);
	      var w = dv.gap.offsetWidth;
	      attrs(dv.svg, "width", w, "height", dv.gap.offsetHeight);
	    }
	    if (dv.copyButtons) clear(dv.copyButtons);
	
	    var vpEdit = dv.edit.getViewport(), vpOrig = dv.orig.getViewport();
	    var sTopEdit = dv.edit.getScrollInfo().top, sTopOrig = dv.orig.getScrollInfo().top;
	    for (var i = 0; i < dv.chunks.length; i++) {
	      var ch = dv.chunks[i];
	      if (ch.editFrom <= vpEdit.to && ch.editTo >= vpEdit.from &&
	          ch.origFrom <= vpOrig.to && ch.origTo >= vpOrig.from)
	        drawConnectorsForChunk(dv, ch, sTopOrig, sTopEdit, w);
	    }
	  }
	
	  function getMatchingOrigLine(editLine, chunks) {
	    var editStart = 0, origStart = 0;
	    for (var i = 0; i < chunks.length; i++) {
	      var chunk = chunks[i];
	      if (chunk.editTo > editLine && chunk.editFrom <= editLine) return null;
	      if (chunk.editFrom > editLine) break;
	      editStart = chunk.editTo;
	      origStart = chunk.origTo;
	    }
	    return origStart + (editLine - editStart);
	  }
	
	  function findAlignedLines(dv, other) {
	    var linesToAlign = [];
	    for (var i = 0; i < dv.chunks.length; i++) {
	      var chunk = dv.chunks[i];
	      linesToAlign.push([chunk.origTo, chunk.editTo, other ? getMatchingOrigLine(chunk.editTo, other.chunks) : null]);
	    }
	    if (other) {
	      for (var i = 0; i < other.chunks.length; i++) {
	        var chunk = other.chunks[i];
	        for (var j = 0; j < linesToAlign.length; j++) {
	          var align = linesToAlign[j];
	          if (align[1] == chunk.editTo) {
	            j = -1;
	            break;
	          } else if (align[1] > chunk.editTo) {
	            break;
	          }
	        }
	        if (j > -1)
	          linesToAlign.splice(j - 1, 0, [getMatchingOrigLine(chunk.editTo, dv.chunks), chunk.editTo, chunk.origTo]);
	      }
	    }
	    return linesToAlign;
	  }
	
	  function alignChunks(dv, force) {
	    if (!dv.dealigned && !force) return;
	    if (!dv.orig.curOp) return dv.orig.operation(function() {
	      alignChunks(dv, force);
	    });
	
	    dv.dealigned = false;
	    var other = dv.mv.left == dv ? dv.mv.right : dv.mv.left;
	    if (other) {
	      ensureDiff(other);
	      other.dealigned = false;
	    }
	    var linesToAlign = findAlignedLines(dv, other);
	
	    // Clear old aligners
	    var aligners = dv.mv.aligners;
	    for (var i = 0; i < aligners.length; i++)
	      aligners[i].clear();
	    aligners.length = 0;
	
	    var cm = [dv.orig, dv.edit], scroll = [];
	    if (other) cm.push(other.orig);
	    for (var i = 0; i < cm.length; i++)
	      scroll.push(cm[i].getScrollInfo().top);
	
	    for (var ln = 0; ln < linesToAlign.length; ln++)
	      alignLines(cm, linesToAlign[ln], aligners);
	
	    for (var i = 0; i < cm.length; i++)
	      cm[i].scrollTo(null, scroll[i]);
	  }
	
	  function alignLines(cm, lines, aligners) {
	    var maxOffset = 0, offset = [];
	    for (var i = 0; i < cm.length; i++) if (lines[i] != null) {
	      var off = cm[i].heightAtLine(lines[i], "local");
	      offset[i] = off;
	      maxOffset = Math.max(maxOffset, off);
	    }
	    for (var i = 0; i < cm.length; i++) if (lines[i] != null) {
	      var diff = maxOffset - offset[i];
	      if (diff > 1)
	        aligners.push(padAbove(cm[i], lines[i], diff));
	    }
	  }
	
	  function padAbove(cm, line, size) {
	    var above = true;
	    if (line > cm.lastLine()) {
	      line--;
	      above = false;
	    }
	    var elt = document.createElement("div");
	    elt.className = "CodeMirror-merge-spacer";
	    elt.style.height = size + "px"; elt.style.minWidth = "1px";
	    return cm.addLineWidget(line, elt, {height: size, above: above});
	  }
	
	  function drawConnectorsForChunk(dv, chunk, sTopOrig, sTopEdit, w) {
	    var flip = dv.type == "left";
	    var top = dv.orig.heightAtLine(chunk.origFrom, "local") - sTopOrig;
	    if (dv.svg) {
	      var topLpx = top;
	      var topRpx = dv.edit.heightAtLine(chunk.editFrom, "local") - sTopEdit;
	      if (flip) { var tmp = topLpx; topLpx = topRpx; topRpx = tmp; }
	      var botLpx = dv.orig.heightAtLine(chunk.origTo, "local") - sTopOrig;
	      var botRpx = dv.edit.heightAtLine(chunk.editTo, "local") - sTopEdit;
	      if (flip) { var tmp = botLpx; botLpx = botRpx; botRpx = tmp; }
	      var curveTop = " C " + w/2 + " " + topRpx + " " + w/2 + " " + topLpx + " " + (w + 2) + " " + topLpx;
	      var curveBot = " C " + w/2 + " " + botLpx + " " + w/2 + " " + botRpx + " -1 " + botRpx;
	      attrs(dv.svg.appendChild(document.createElementNS(svgNS, "path")),
	            "d", "M -1 " + topRpx + curveTop + " L " + (w + 2) + " " + botLpx + curveBot + " z",
	            "class", dv.classes.connect);
	    }
	    if (dv.copyButtons) {
	      var copy = dv.copyButtons.appendChild(elt("div", dv.type == "left" ? "\u21dd" : "\u21dc",
	                                                "CodeMirror-merge-copy"));
	      var editOriginals = dv.mv.options.allowEditingOriginals;
	      copy.title = editOriginals ? "Push to left" : "Revert chunk";
	      copy.chunk = chunk;
	      copy.style.top = top + "px";
	
	      if (editOriginals) {
	        var topReverse = dv.orig.heightAtLine(chunk.editFrom, "local") - sTopEdit;
	        var copyReverse = dv.copyButtons.appendChild(elt("div", dv.type == "right" ? "\u21dd" : "\u21dc",
	                                                         "CodeMirror-merge-copy-reverse"));
	        copyReverse.title = "Push to right";
	        copyReverse.chunk = {editFrom: chunk.origFrom, editTo: chunk.origTo,
	                             origFrom: chunk.editFrom, origTo: chunk.editTo};
	        copyReverse.style.top = topReverse + "px";
	        dv.type == "right" ? copyReverse.style.left = "2px" : copyReverse.style.right = "2px";
	      }
	    }
	  }
	
	  function copyChunk(dv, to, from, chunk) {
	    if (dv.diffOutOfDate) return;
	    var start = chunk.editTo > to.lastLine() ? Pos(chunk.editFrom - 1) : Pos(chunk.editFrom, 0)
	    to.replaceRange(from.getRange(Pos(chunk.origFrom, 0), Pos(chunk.origTo, 0)),
	                    start, Pos(chunk.editTo, 0));
	  }
	
	  // Merge view, containing 0, 1, or 2 diff views.
	
	  var MergeView = CodeMirror.MergeView = function(node, options) {
	    if (!(this instanceof MergeView)) return new MergeView(node, options);
	
	    this.options = options;
	    var origLeft = options.origLeft, origRight = options.origRight == null ? options.orig : options.origRight;
	
	    var hasLeft = origLeft != null, hasRight = origRight != null;
	    var panes = 1 + (hasLeft ? 1 : 0) + (hasRight ? 1 : 0);
	    var wrap = [], left = this.left = null, right = this.right = null;
	    var self = this;
	
	    if (hasLeft) {
	      left = this.left = new DiffView(this, "left");
	      var leftPane = elt("div", null, "CodeMirror-merge-pane");
	      wrap.push(leftPane);
	      wrap.push(buildGap(left));
	    }
	
	    var editPane = elt("div", null, "CodeMirror-merge-pane");
	    wrap.push(editPane);
	
	    if (hasRight) {
	      right = this.right = new DiffView(this, "right");
	      wrap.push(buildGap(right));
	      var rightPane = elt("div", null, "CodeMirror-merge-pane");
	      wrap.push(rightPane);
	    }
	
	    (hasRight ? rightPane : editPane).className += " CodeMirror-merge-pane-rightmost";
	
	    wrap.push(elt("div", null, null, "height: 0; clear: both;"));
	
	    var wrapElt = this.wrap = node.appendChild(elt("div", wrap, "CodeMirror-merge CodeMirror-merge-" + panes + "pane"));
	    this.edit = CodeMirror(editPane, copyObj(options));
	
	    if (left) left.init(leftPane, origLeft, options);
	    if (right) right.init(rightPane, origRight, options);
	
	    if (options.collapseIdentical)
	      this.editor().operation(function() {
	        collapseIdenticalStretches(self, options.collapseIdentical);
	      });
	    if (options.connect == "align") {
	      this.aligners = [];
	      alignChunks(this.left || this.right, true);
	    }
	
	    var onResize = function() {
	      if (left) makeConnections(left);
	      if (right) makeConnections(right);
	    };
	    CodeMirror.on(window, "resize", onResize);
	    var resizeInterval = setInterval(function() {
	      for (var p = wrapElt.parentNode; p && p != document.body; p = p.parentNode) {}
	      if (!p) { clearInterval(resizeInterval); CodeMirror.off(window, "resize", onResize); }
	    }, 5000);
	  };
	
	  function buildGap(dv) {
	    var lock = dv.lockButton = elt("div", null, "CodeMirror-merge-scrolllock");
	    lock.title = "Toggle locked scrolling";
	    var lockWrap = elt("div", [lock], "CodeMirror-merge-scrolllock-wrap");
	    CodeMirror.on(lock, "click", function() { setScrollLock(dv, !dv.lockScroll); });
	    var gapElts = [lockWrap];
	    if (dv.mv.options.revertButtons !== false) {
	      dv.copyButtons = elt("div", null, "CodeMirror-merge-copybuttons-" + dv.type);
	      CodeMirror.on(dv.copyButtons, "click", function(e) {
	        var node = e.target || e.srcElement;
	        if (!node.chunk) return;
	        if (node.className == "CodeMirror-merge-copy-reverse") {
	          copyChunk(dv, dv.orig, dv.edit, node.chunk);
	          return;
	        }
	        copyChunk(dv, dv.edit, dv.orig, node.chunk);
	      });
	      gapElts.unshift(dv.copyButtons);
	    }
	    if (dv.mv.options.connect != "align") {
	      var svg = document.createElementNS && document.createElementNS(svgNS, "svg");
	      if (svg && !svg.createSVGRect) svg = null;
	      dv.svg = svg;
	      if (svg) gapElts.push(svg);
	    }
	
	    return dv.gap = elt("div", gapElts, "CodeMirror-merge-gap");
	  }
	
	  MergeView.prototype = {
	    constuctor: MergeView,
	    editor: function() { return this.edit; },
	    rightOriginal: function() { return this.right && this.right.orig; },
	    leftOriginal: function() { return this.left && this.left.orig; },
	    setShowDifferences: function(val) {
	      if (this.right) this.right.setShowDifferences(val);
	      if (this.left) this.left.setShowDifferences(val);
	    },
	    rightChunks: function() {
	      if (this.right) { ensureDiff(this.right); return this.right.chunks; }
	    },
	    leftChunks: function() {
	      if (this.left) { ensureDiff(this.left); return this.left.chunks; }
	    }
	  };
	
	  function asString(obj) {
	    if (typeof obj == "string") return obj;
	    else return obj.getValue();
	  }
	
	  // Operations on diffs
	
	  var dmp = new diff_match_patch();
	  function getDiff(a, b) {
	    var diff = dmp.diff_main(a, b);
	    dmp.diff_cleanupSemantic(diff);
	    // The library sometimes leaves in empty parts, which confuse the algorithm
	    for (var i = 0; i < diff.length; ++i) {
	      var part = diff[i];
	      if (!part[1]) {
	        diff.splice(i--, 1);
	      } else if (i && diff[i - 1][0] == part[0]) {
	        diff.splice(i--, 1);
	        diff[i][1] += part[1];
	      }
	    }
	    return diff;
	  }
	
	  function getChunks(diff) {
	    var chunks = [];
	    var startEdit = 0, startOrig = 0;
	    var edit = Pos(0, 0), orig = Pos(0, 0);
	    for (var i = 0; i < diff.length; ++i) {
	      var part = diff[i], tp = part[0];
	      if (tp == DIFF_EQUAL) {
	        var startOff = startOfLineClean(diff, i) ? 0 : 1;
	        var cleanFromEdit = edit.line + startOff, cleanFromOrig = orig.line + startOff;
	        moveOver(edit, part[1], null, orig);
	        var endOff = endOfLineClean(diff, i) ? 1 : 0;
	        var cleanToEdit = edit.line + endOff, cleanToOrig = orig.line + endOff;
	        if (cleanToEdit > cleanFromEdit) {
	          if (i) chunks.push({origFrom: startOrig, origTo: cleanFromOrig,
	                              editFrom: startEdit, editTo: cleanFromEdit});
	          startEdit = cleanToEdit; startOrig = cleanToOrig;
	        }
	      } else {
	        moveOver(tp == DIFF_INSERT ? edit : orig, part[1]);
	      }
	    }
	    if (startEdit <= edit.line || startOrig <= orig.line)
	      chunks.push({origFrom: startOrig, origTo: orig.line + 1,
	                   editFrom: startEdit, editTo: edit.line + 1});
	    return chunks;
	  }
	
	  function endOfLineClean(diff, i) {
	    if (i == diff.length - 1) return true;
	    var next = diff[i + 1][1];
	    if (next.length == 1 || next.charCodeAt(0) != 10) return false;
	    if (i == diff.length - 2) return true;
	    next = diff[i + 2][1];
	    return next.length > 1 && next.charCodeAt(0) == 10;
	  }
	
	  function startOfLineClean(diff, i) {
	    if (i == 0) return true;
	    var last = diff[i - 1][1];
	    if (last.charCodeAt(last.length - 1) != 10) return false;
	    if (i == 1) return true;
	    last = diff[i - 2][1];
	    return last.charCodeAt(last.length - 1) == 10;
	  }
	
	  function chunkBoundariesAround(chunks, n, nInEdit) {
	    var beforeE, afterE, beforeO, afterO;
	    for (var i = 0; i < chunks.length; i++) {
	      var chunk = chunks[i];
	      var fromLocal = nInEdit ? chunk.editFrom : chunk.origFrom;
	      var toLocal = nInEdit ? chunk.editTo : chunk.origTo;
	      if (afterE == null) {
	        if (fromLocal > n) { afterE = chunk.editFrom; afterO = chunk.origFrom; }
	        else if (toLocal > n) { afterE = chunk.editTo; afterO = chunk.origTo; }
	      }
	      if (toLocal <= n) { beforeE = chunk.editTo; beforeO = chunk.origTo; }
	      else if (fromLocal <= n) { beforeE = chunk.editFrom; beforeO = chunk.origFrom; }
	    }
	    return {edit: {before: beforeE, after: afterE}, orig: {before: beforeO, after: afterO}};
	  }
	
	  function collapseSingle(cm, from, to) {
	    cm.addLineClass(from, "wrap", "CodeMirror-merge-collapsed-line");
	    var widget = document.createElement("span");
	    widget.className = "CodeMirror-merge-collapsed-widget";
	    widget.title = "Identical text collapsed. Click to expand.";
	    var mark = cm.markText(Pos(from, 0), Pos(to - 1), {
	      inclusiveLeft: true,
	      inclusiveRight: true,
	      replacedWith: widget,
	      clearOnEnter: true
	    });
	    function clear() {
	      mark.clear();
	      cm.removeLineClass(from, "wrap", "CodeMirror-merge-collapsed-line");
	    }
	    CodeMirror.on(widget, "click", clear);
	    return {mark: mark, clear: clear};
	  }
	
	  function collapseStretch(size, editors) {
	    var marks = [];
	    function clear() {
	      for (var i = 0; i < marks.length; i++) marks[i].clear();
	    }
	    for (var i = 0; i < editors.length; i++) {
	      var editor = editors[i];
	      var mark = collapseSingle(editor.cm, editor.line, editor.line + size);
	      marks.push(mark);
	      mark.mark.on("clear", clear);
	    }
	    return marks[0].mark;
	  }
	
	  function unclearNearChunks(dv, margin, off, clear) {
	    for (var i = 0; i < dv.chunks.length; i++) {
	      var chunk = dv.chunks[i];
	      for (var l = chunk.editFrom - margin; l < chunk.editTo + margin; l++) {
	        var pos = l + off;
	        if (pos >= 0 && pos < clear.length) clear[pos] = false;
	      }
	    }
	  }
	
	  function collapseIdenticalStretches(mv, margin) {
	    if (typeof margin != "number") margin = 2;
	    var clear = [], edit = mv.editor(), off = edit.firstLine();
	    for (var l = off, e = edit.lastLine(); l <= e; l++) clear.push(true);
	    if (mv.left) unclearNearChunks(mv.left, margin, off, clear);
	    if (mv.right) unclearNearChunks(mv.right, margin, off, clear);
	
	    for (var i = 0; i < clear.length; i++) {
	      if (clear[i]) {
	        var line = i + off;
	        for (var size = 1; i < clear.length - 1 && clear[i + 1]; i++, size++) {}
	        if (size > margin) {
	          var editors = [{line: line, cm: edit}];
	          if (mv.left) editors.push({line: getMatchingOrigLine(line, mv.left.chunks), cm: mv.left.orig});
	          if (mv.right) editors.push({line: getMatchingOrigLine(line, mv.right.chunks), cm: mv.right.orig});
	          var mark = collapseStretch(size, editors);
	          if (mv.options.onCollapse) mv.options.onCollapse(mv, line, size, mark);
	        }
	      }
	    }
	  }
	
	  // General utilities
	
	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }
	
	  function clear(node) {
	    for (var count = node.childNodes.length; count > 0; --count)
	      node.removeChild(node.firstChild);
	  }
	
	  function attrs(elt) {
	    for (var i = 1; i < arguments.length; i += 2)
	      elt.setAttribute(arguments[i], arguments[i+1]);
	  }
	
	  function copyObj(obj, target) {
	    if (!target) target = {};
	    for (var prop in obj) if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
	    return target;
	  }
	
	  function moveOver(pos, str, copy, other) {
	    var out = copy ? Pos(pos.line, pos.ch) : pos, at = 0;
	    for (;;) {
	      var nl = str.indexOf("\n", at);
	      if (nl == -1) break;
	      ++out.line;
	      if (other) ++other.line;
	      at = nl + 1;
	    }
	    out.ch = (at ? 0 : out.ch) + (str.length - at);
	    if (other) other.ch = (at ? 0 : other.ch) + (str.length - at);
	    return out;
	  }
	
	  function posMin(a, b) { return (a.line - b.line || a.ch - b.ch) < 0 ? a : b; }
	  function posMax(a, b) { return (a.line - b.line || a.ch - b.ch) > 0 ? a : b; }
	  function posEq(a, b) { return a.line == b.line && a.ch == b.ch; }
	
	  function findPrevDiff(chunks, start, isOrig) {
	    for (var i = chunks.length - 1; i >= 0; i--) {
	      var chunk = chunks[i];
	      var to = (isOrig ? chunk.origTo : chunk.editTo) - 1;
	      if (to < start) return to;
	    }
	  }
	
	  function findNextDiff(chunks, start, isOrig) {
	    for (var i = 0; i < chunks.length; i++) {
	      var chunk = chunks[i];
	      var from = (isOrig ? chunk.origFrom : chunk.editFrom);
	      if (from > start) return from;
	    }
	  }
	
	  function goNearbyDiff(cm, dir) {
	    var found = null, views = cm.state.diffViews, line = cm.getCursor().line;
	    if (views) for (var i = 0; i < views.length; i++) {
	      var dv = views[i], isOrig = cm == dv.orig;
	      ensureDiff(dv);
	      var pos = dir < 0 ? findPrevDiff(dv.chunks, line, isOrig) : findNextDiff(dv.chunks, line, isOrig);
	      if (pos != null && (found == null || (dir < 0 ? pos > found : pos < found)))
	        found = pos;
	    }
	    if (found != null)
	      cm.setCursor(found, 0);
	    else
	      return CodeMirror.Pass;
	  }
	
	  CodeMirror.commands.goNextDiff = function(cm) {
	    return goNearbyDiff(cm, 1);
	  };
	  CodeMirror.commands.goPrevDiff = function(cm) {
	    return goNearbyDiff(cm, -1);
	  };
	});


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(1), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Tab, MK, Batch) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
	
			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var $ = MK.$b;
	
		var BatchTab = function (_Tab) {
			_inherits(BatchTab, _Tab);
	
			function BatchTab() {
				var _Object$getPrototypeO;
	
				var _this;
	
				_classCallCheck(this, BatchTab);
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				(_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BatchTab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this).set('batch', [{}, {}]).setClassFor({
					batch: Batch
				});
				return _this;
			}
	
			_createClass(BatchTab, [{
				key: 'initialize',
				value: function initialize() {
					this.batch.rerender();
	
					return this;
				}
			}]);
	
			return BatchTab;
		}(Tab);
	
		return BatchTab;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(CodeMirror) {'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MK) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
	
			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var BatchItem = function (_MK$Object) {
			_inherits(BatchItem, _MK$Object);
	
			function BatchItem(data) {
				_classCallCheck(this, BatchItem);
	
				return _possibleConstructorReturn(this, Object.getPrototypeOf(BatchItem).call(this, data));
			}
	
			_createClass(BatchItem, [{
				key: 'onRender',
				value: function onRender() {
					var _this2 = this;
	
					setTimeout(function () {
						_this2.editor = CodeMirror(_this2.sandbox, {
							lineNumbers: true,
							mode: "text/html",
							jsonlint: true,
							viewportMargin: Infinity
						});
	
						_this2.bindNode('deleteButton', '<span class="delete-editor">\n\t\t\t\t\tDelete\n\t\t\t\t</span>').appendNode('deleteButton', ':sandbox .CodeMirror');
					});
				}
			}]);
	
			return BatchItem;
		}(MK.Object);
	
		return BatchItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Tab, CodeMirror) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
	
			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var DiffTab = function (_Tab) {
			_inherits(DiffTab, _Tab);
	
			function DiffTab() {
				var _Object$getPrototypeO;
	
				_classCallCheck(this, DiffTab);
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DiffTab)).call.apply(_Object$getPrototypeO, [this].concat(args)));
			}
	
			_createClass(DiffTab, [{
				key: 'initialize',
				value: function initialize() {
					this.editor = CodeMirror.MergeView(this.nodes.content, {
						value: 'yopanm',
						origLeft: null,
						orig: 'ozozo',
						lineNumbers: true,
						mode: "text/html",
						highlightDifferences: true,
						collapseIdentical: false,
						allowEditingOriginals: true,
						jsonlint: true,
						viewportMargin: Infinity
					});
	
					return this;
				}
			}]);
	
			return DiffTab;
		}(Tab);
	
		return DiffTab;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MK, BatchItem) {
		function _toConsumableArray(arr) {
			if (Array.isArray(arr)) {
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
				return arr2;
			} else {
				return Array.from(arr);
			}
		}
	
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}
	
		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
	
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			}
	
			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
	
		var BatchTab = function (_MK$Array) {
			_inherits(BatchTab, _MK$Array);
	
			function BatchTab(data, parent) {
				var _Object$getPrototypeO;
	
				var _temp, _this;
	
				_classCallCheck(this, BatchTab);
	
				(_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BatchTab)).call.apply(_Object$getPrototypeO, [this].concat(_toConsumableArray(data)))), _this), _this.Model = BatchItem, _this.itemRenderer = ':sandbox .renderer', _temp).bindNode({
					sandbox: parent.nodes.sandbox,
					container: parent.nodes.content
				}).recreate(data, {
					dontRender: true
				}).on({
					'click::(.add)': function clickAdd(evt) {
						_this.push({});
					},
					'*@click::deleteButton': function clickDeleteButton(evt) {
						_this.pull(evt.self);
					}
				});
				return _this;
			}
	
			return BatchTab;
		}(MK.Array);
	
		return BatchTab;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map