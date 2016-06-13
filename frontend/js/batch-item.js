import MK from 'matreshka';
import CodeMirror from 'codemirror';

export default class BatchItem extends MK.Object {
	onRender() {
		setTimeout(() => {
			this.editor = new CodeMirror(this.sandbox);

			this
				.bindNode({
					deleteButton: '<span class="delete-editor"></span>',
					value: this.editor.display.wrapper
				})
				.appendNode('deleteButton', ':sandbox .CodeMirror');
		});
	}
}
