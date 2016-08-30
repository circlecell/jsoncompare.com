import Matreshka from 'matreshka';
import getSandbox from '../tab/components/sandbox';
import getContent from './components/content';
import Tab from '../tab';
import LintEditor from '../../../linteditor';
import CodeMirror from 'codemirror';

export default class SimpleTab extends Tab {
    constructor(...args) {
        super(...args)
            .bindNode('content', getContent(this))
            .bindSandbox(getSandbox(this))
            .jset({ value: '' })
            .on({
                tabfocus: () => {
                    this.editor.focus();
                }
            });
    }

    initialize() {
        this.editor = new LintEditor({
            codeMirror: new CodeMirror(this.nodes.content),
            owner: this,
            ownerCodeProperty: 'value'
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
