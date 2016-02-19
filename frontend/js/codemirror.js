import 'codemirror-jsonlint-addon';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';

Object.assign(window, require('diff-match-patch'));
require('codemirror/addon/merge/merge');

export default CodeMirror;
