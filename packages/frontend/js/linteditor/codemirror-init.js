import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';

import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';

import assign from 'object.assign';
import CodeMirror from 'codemirror';
import diffMatchPatch from 'diff-match-patch';

assign(window, diffMatchPatch);
require('codemirror/addon/merge/merge');

Object.assign(CodeMirror.defaults, {
    dragDrop: false,
    mode: 'javascript',
    viewportMargin: Infinity,
    lineNumbers: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});

export default CodeMirror;
