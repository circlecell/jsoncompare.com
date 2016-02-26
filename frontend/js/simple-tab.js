import Tab from './tab';
import CodeMirror from './codemirror';

export default class SimpleTab extends Tab {
	constructor(...args) {
		super(...args);


	}

	initialize() {
		this.editor = CodeMirror(this.nodes.content, {
			lineNumbers: true,
		    mode: "text/html",
			jsonlint: true,
			viewportMargin: Infinity
		});

		return this
			.bindNode('value', this.editor.display.wrapper);
	}
}
