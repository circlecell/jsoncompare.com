/* @flow */

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _interopRequireWildcard = require("babel-runtime/helpers/interop-require-wildcard")["default"];

exports.__esModule = true;

var _babelHelperFunctionName = require("babel-helper-function-name");

var _babelHelperFunctionName2 = _interopRequireDefault(_babelHelperFunctionName);

var _babelTemplate = require("babel-template");

var _babelTemplate2 = _interopRequireDefault(_babelTemplate);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

/*:: import type { NodePath } from "babel-traverse";*/

var buildWrapper = _babelTemplate2["default"]("\n  (function () {\n    var ref = FUNCTION;\n    return function (PARAMS) {\n      return ref.apply(this, arguments);\n    };\n  })\n");

var arrowBuildWrapper = _babelTemplate2["default"]("\n  (() => {\n    var ref = FUNCTION, _this = this;\n    return function(PARAMS) {\n      return ref.apply(_this, arguments);\n    };\n  })\n");

var awaitVisitor = {
  ArrowFunctionExpression: function ArrowFunctionExpression(path) {
    if (!path.node.async) {
      path.arrowFunctionToShadowed();
    }
  },

  AwaitExpression: function AwaitExpression(_ref) {
    var node = _ref.node;

    node.type = "YieldExpression";
  }
};

function classOrObjectMethod(path /*: NodePath*/, callId /*: Object*/) {
  var node = path.node;
  var body = node.body;

  node.async = false;

  var container = t.functionExpression(null, [], t.blockStatement(body.body), true);
  container.shadow = true;
  body.body = [t.returnStatement(t.callExpression(t.callExpression(callId, [container]), []))];
}

function plainFunction(path /*: NodePath*/, callId /*: Object*/) {
  var node = path.node;
  var wrapper = buildWrapper;

  if (path.isArrowFunctionExpression()) {
    path.arrowFunctionToShadowed();
    wrapper = arrowBuildWrapper;
  }

  node.async = false;
  node.generator = true;

  var asyncFnId = node.id;
  node.id = null;

  var isDeclaration = path.isFunctionDeclaration();

  if (isDeclaration) {
    node.type = "FunctionExpression";
  }

  var built = t.callExpression(callId, [node]);
  var container = wrapper({
    FUNCTION: built,
    PARAMS: node.params.map(function () {
      return path.scope.generateUidIdentifier("x");
    })
  }).expression;

  var retFunction = container.body.body[1].argument;

  if (isDeclaration) {
    var declar = t.variableDeclaration("let", [t.variableDeclarator(t.identifier(asyncFnId.name), t.callExpression(container, []))]);
    declar._blockHoist = true;

    retFunction.id = asyncFnId;
    path.replaceWith(declar);
  } else {
    if (asyncFnId && asyncFnId.name) {
      retFunction.id = asyncFnId;
    } else {
      _babelHelperFunctionName2["default"]({
        node: retFunction,
        parent: path.parent,
        scope: path.scope
      });
    }

    if (retFunction.id || node.params.length) {
      // we have an inferred function id or params so we need this wrapper
      path.replaceWith(t.callExpression(container, []));
    } else {
      // we can omit this wrapper as the conditions it protects for do not apply
      path.replaceWith(built);
    }
  }
}

exports["default"] = function (path /*: NodePath*/, callId /*: Object*/) {
  var node = path.node;
  if (node.generator) return;

  path.traverse(awaitVisitor);

  if (path.isClassMethod() || path.isObjectMethod()) {
    return classOrObjectMethod(path, callId);
  } else {
    return plainFunction(path, callId);
  }
};

module.exports = exports["default"];