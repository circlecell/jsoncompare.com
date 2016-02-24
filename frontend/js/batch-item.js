import MK from 'matreshka';

export default class BatchItem extends MK.Object {
	constructor(data) {
		super(data)
			
	}

	onRender() {
		setTimeout(() => {
			this.editor = CodeMirror(this.sandbox, {
				lineNumbers: true,
			    mode: "text/html",
				jsonlint: true,
				viewportMargin: Infinity
			});

			this
				.bindNode('deleteButton', `<span class="delete-editor">
					Delete
				</span>`)
				.appendNode('deleteButton', ':sandbox .CodeMirror');
		});
	}
}
