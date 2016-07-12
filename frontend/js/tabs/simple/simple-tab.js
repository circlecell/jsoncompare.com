import Tab from '../tab';
import CodeMirror from 'codemirror';
import MK from 'matreshka';

export default class SimpleTab extends Tab {
	constructor(...args) {
		super(...args).jset({ value: '' });
	}

	initialize() {
		this.editor = new CodeMirror(this.nodes.content);

		return this
			.bindNode('value', this.editor.display.wrapper)
			.bindNode('files', ':sandbox', MK.binders.dropFiles('text'))
			.on({
				'change:files': () => {
					this.value = this.files[0].readerResult;
				},
				// 'change:value': () => this.trigger('modify')
			});
	}

	toJSON() {
		return encodeURIComponent(this.value);
	}

	fromJSON(value) {
		this.value = decodeURIComponent(value);
		return this;
	}
}
