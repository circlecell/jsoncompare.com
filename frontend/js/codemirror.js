import 'codemirror-jsonlint-addon';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';

Object.assign(window, require('diff-match-patch'));
require('codemirror/addon/merge/merge');

Object.assign(CodeMirror.defaults, {
	dragDrop: false,
	lineNumbers: true,
	mode: "text/html",
	jsonlint: true,
	viewportMargin: Infinity
});

export default CodeMirror;
