import Tab from '../tab';
import CodeMirror from 'codemirror';
import MK from 'matreshka';
import LintEditor from '../../linteditor';

export default class SimpleTab extends Tab {
    constructor(...args) {
        super(...args)
            .jset({ value: '' })
            .on({
                tabfocus: () => {
                    this.editor.focus();
                }
            });
    }

    initialize() {
        this.editor = new LintEditor(new CodeMirror(this.nodes.content));
        //this.linkProps('value', [ this.editor, 'code' ]);
        this.editor.linkCode(this, 'value');
    }

    toJSON() {
        return encodeURIComponent(this.value);
    }

    fromJSON(value) {
        this.value = decodeURIComponent(value);
        return this;
    }
}
