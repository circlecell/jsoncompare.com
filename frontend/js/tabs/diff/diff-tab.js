import Tab from '../tab';
import CodeMirror from 'codemirror';

export default class DiffTab extends Tab {
	constructor(...args) {
		super(...args).jset({
			leftValue: '',
			rightValue: ''
		});
	}

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

	toJSON() {
		return {
			left: encodeURIComponent(this.leftValue),
			right: encodeURIComponent(this.rightValue)
		};
	}

	fromJSON(value) {
		this.leftValue = decodeURIComponent(value.left);
		this.rightValue = decodeURIComponent(value.right);
		return this;
	}
}
