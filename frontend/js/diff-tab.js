import Tab from './tab';
import CodeMirror from './codemirror';

export default class DiffTab extends Tab {
	constructor(...args) {
		super(...args);
	}

	initialize() {
		this.editor = CodeMirror.MergeView(this.nodes.content, {
			dragDrop: true,
			value: this.leftValue || '',
			origLeft: null,
			orig: this.rightValue || '',
			highlightDifferences: true,
			collapseIdentical: false,
			allowEditingOriginals: true
		});

		console.log(this.editor);

		return this
			.bindNode({
				leftValue: this.editor.edit.display.wrapper,
				rightValue: this.editor.right.orig.display.wrapper
			});
	}
}
