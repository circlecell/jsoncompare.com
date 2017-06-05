import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/lib/codemirror.css';

// Fold
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';

// Search
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/matchesonscrollbar.css';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/jump-to-line.js';

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
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
});

export default CodeMirror;
