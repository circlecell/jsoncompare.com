import SeempleObject from 'seemple/object';
import CodeMirror from 'codemirror';
import Sandbox from './components/sandbox';
import LintEditor from '../../../../../linteditor';

export default class BatchItem extends SeempleObject {
    renderer = (self) => <Sandbox owner={self} />;

    constructor(data, parent) {
        super()
            .set(data)
            .setData({
                value: this.value || ''
            })
            .set({ parent })
            .on('afterrender', this.onAfterRender);
    }

    onAfterRender() {
        this.editor = new LintEditor({
            codeMirror: new CodeMirror(this.nodes.sandbox),
            owner: this,
            ownerCodeProperty: 'value'
        });

        if (this.lintImmediately) {
            this.editor.lint();
        }

        this.trigger('initialize', this);
    }

    onClickDelete() {
        this.parent.onItemClickDelete(this);
    }
}
