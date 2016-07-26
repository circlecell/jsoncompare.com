import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';
import './jsonlint-option';
import './showsize-option';
import './notify-extension';
import './validate-extension';
import './highlight-line-extension';
import './style.pcss';
import assign from 'object.assign';
import CodeMirror from 'codemirror';
import diff_match_patch from 'diff-match-patch';

assign(window, diff_match_patch);
require('codemirror/addon/merge/merge');

Object.assign(CodeMirror.defaults, {
    dragDrop: false,
    lineNumbers: true,
    mode: 'text/html',
    jsonlint: true,
    showSize: true,
    viewportMargin: Infinity
});

export default CodeMirror;
