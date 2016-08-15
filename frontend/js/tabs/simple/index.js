import Tab from '../tab';
import CodeMirror from 'codemirror';
import MK from 'matreshka';
import LintEditor from '../../linteditor';
import style from './simple.css';

export default class SimpleTab extends Tab {
    constructor(...args) {
        super(...args)
            .jset({ value: '' })
            .on({
                tabfocus: () => {
                    this.editor.focus();
                }
            })
            .bindNode({
                sandbox: <div class={style.simpleTab}>
                    <div class={`${style.flexContent} tab-content`}></div>
                </div>,
                content: ':sandbox .tab-content'
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
