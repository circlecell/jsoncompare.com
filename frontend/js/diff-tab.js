import Tab from './tab';
import CodeMirror from './codemirror';

export default class DiffTab extends Tab {
	constructor(...args){
		super(...args)
			.bindNode('editor', ':bound(container) .editor');

		let dv = CodeMirror.MergeView(this.nodes.editor, {
		    value: 'yopanm',
		    origLeft: null,
		    orig: 'ozozo',
		    lineNumbers: true,
		    mode: "text/html",
		    highlightDifferences: true,
		    collapseIdentical: false,
			allowEditingOriginals: true,
			jsonlint: true
		  });
	}
}
