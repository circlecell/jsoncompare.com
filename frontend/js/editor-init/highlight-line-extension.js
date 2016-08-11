import CodeMirror from 'codemirror';

CodeMirror.defineExtension('highlightErrorLine', function highlightErrorLine(line) {
    if (typeof line === 'number') {
        this.errorLine = this.addLineClass(line, 'background', 'lint-line-error');
    } else if (this.errorLine) {
        this.removeLineClass(this.errorLine, 'background', 'lint-line-error');
        this.errorLine = null;
    }
});
