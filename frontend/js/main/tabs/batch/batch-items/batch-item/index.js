import MK from 'matreshka';
import CodeMirror from 'codemirror';
import getRenderer from './components/renderer';

export default class BatchItem extends MK.Object {
    renderer = getRenderer;
    constructor(...args) {
        super(...args);
        this.jset({
            value: this.value || ''
        })
        .on('afterrender', this.onAfterRender);
    }

    onAfterRender() {
        this.editor = new CodeMirror(this.sandbox);

        this
            .bindNode({
                deleteButton: '<span class="delete-editor" title="Delete"></span>',
                value: this.editor.display.wrapper
            })
            .appendNode('deleteButton', ':sandbox .CodeMirror')
            .trigger('initialize', this);
    }
}
