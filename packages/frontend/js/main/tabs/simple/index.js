import CodeMirror from 'codemirror';
import Sandbox from '../tab/components/sandbox';
import Content from './components/content';
import Tab from '../tab';
import LintEditor from '../../../linteditor';

export default class SimpleTab extends Tab {
    constructor(...args) {
        super(...args)
            .bindNode('content', <Content owner={this} />)
            .bindSandbox(<Sandbox owner={this} />)
            .addDataKeys('value')
            .setData({ value: '' })
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
        return btoa(this.value);
    }

    fromJSON(value) {
        this.value = atob(value);
        return this;
    }
}
