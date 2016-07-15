import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';
import './codemirror-jsonlint-addon';
import CodeMirror from 'codemirror';

Object.assign(window, require('diff-match-patch'));
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
