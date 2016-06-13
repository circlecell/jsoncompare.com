import Tab from '../tab';
import CodeMirror from 'codemirror';

export default class DiffTab extends Tab {
	initialize() {
		this.editor = new CodeMirror.MergeView(this.nodes.content, {
			dragDrop: true,
			value: this.leftValue || '',
			origLeft: null,
			orig: this.rightValue || '',
			highlightDifferences: true,
			collapseIdentical: false,
			allowEditingOriginals: true
		});

		return this
			.bindNode({
				leftValue: this.editor.edit.display.wrapper,
				rightValue: this.editor.right.orig.display.wrapper
			});
	}
}
