import Tab from './tab';
import CodeMirror from './codemirror';
import MK from 'matreshka';

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
			.bindNode('value', this.editor.display.wrapper)
			.bindNode('files', ':sandbox', MK.binders.dropFiles('text'))
			.on({
				'change:files': evt => {
					this.value = this.files[0].readerResult;
				}
			})
	}
}
