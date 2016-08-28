import Matreshka from 'matreshka';
import CodeMirror from 'codemirror';
import getSandbox from './components/sandbox';
import LintEditor from '../../../../../linteditor';

export default class BatchItem extends Matreshka.Object {
    renderer = getSandbox;
    constructor(data, parent) {
        super(data).jset({
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

        this.trigger('initialize', this);
    }

    onClickDelete() {
        this.parent.onItemClickDelete(this);
    }
}
