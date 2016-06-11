import CodeMirror from 'codemirror';

CodeMirror.defineExtension('highlightErrorLine', function(line) {
	if(typeof line == 'number') {
		this._errorLine = this.addLineClass(line, 'background', 'lint-line-error');
	} else if(this._errorLine) {
		this.removeLineClass(this._errorLine, 'background', 'lint-line-error');
		this._errorLine = null;
	}
});
