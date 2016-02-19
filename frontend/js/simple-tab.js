import Tab from './tab';
import CodeMirror from './codemirror';

export default class SimpleTab extends Tab {
	constructor(...args) {
		super(...args)
			.bindNode('editor', ':bound(container) .editor');

		CodeMirror(this.nodes.editor, {
			lineNumbers: true,
		    mode: "text/html",
			jsonlint: true
		});
	}
}
