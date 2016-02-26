import MK from 'matreshka';

export default class BatchItem extends MK.Object {
	constructor(data) {
		super(data)

	}

	onRender() {
		setTimeout(() => {
			this.editor = CodeMirror(this.sandbox);


			this
				.bindNode({
					deleteButton: `<span class="delete-editor"></span>`,
					value: this.editor.display.wrapper
				})
				.appendNode('deleteButton', ':sandbox .CodeMirror');
		});
	}
}
