import jsonlint from 'exports?jsonlint!jsonlint/web/jsonlint';
import CodeMirror from 'codemirror';

CodeMirror.defineExtension('validate', function(editor) {
	let code = this.getValue(),
		lineMatches;

	try {
		JSON.parse(code);
		this.notify('SUCCESS', 'Valid JSON');
	} catch(_e) {
		try {
			jsonlint.parse(code);
			this.notify('SUCCESS', 'Valid JSON');
		} catch (e) {
			// retrieve line number from error
			lineMatches = e.message.match(/line ([0-9]*)/);

			if (lineMatches && lineMatches.length > 1) {
				this.highlightErrorLine(+lineMatches[1]-1);
			}

			this.notify('ERROR', e);
		}
	}
});
