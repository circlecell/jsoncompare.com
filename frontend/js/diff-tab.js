import Tab from './tab';
import CodeMirror from './codemirror';

export default class DiffTab extends Tab {
	constructor(...args){
		super(...args);
	}

	initialize() {
		this.editor = CodeMirror.MergeView(this.nodes.content, {
			value: '',
			origLeft: null,
			orig: '',
			highlightDifferences: true,
			collapseIdentical: false,
			allowEditingOriginals: true
		});

		return this
			.bindNode({
				leftValue: this.editor.edit.display.wrapper,
				rightValue: this.editor.right.edit.display.wrapper
			});
	}
}
