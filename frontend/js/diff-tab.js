import Tab from './tab';
import CodeMirror from './codemirror';

export default class DiffTab extends Tab {
	constructor(...args){
		super(...args);
	}

	initialize() {
		this.editor = CodeMirror.MergeView(this.nodes.content, {
			value: 'yopanm',
			origLeft: null,
			orig: 'ozozo',
			lineNumbers: true,
			mode: "text/html",
			highlightDifferences: true,
			collapseIdentical: false,
			allowEditingOriginals: true,
			jsonlint: true,
			viewportMargin: Infinity
		});

		return this;
	}
}
