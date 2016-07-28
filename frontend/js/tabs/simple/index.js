import Tab from '../tab';
import CodeMirror from 'codemirror';
import MK from 'matreshka';

export default class SimpleTab extends Tab {
    constructor(...args) {
        super(...args)
            .jset({ value: '' })
            .on({
                tabfocus: () => {
                    this.editor.focus();
                },
                'change:files': () => {
                    const { files } = this;
                    if (files.length) {
                        this.value = files[0].readerResult;
                    }
                }
            });
    }

    initialize() {
        this.editor = new CodeMirror(this.nodes.content);

        this
            .bindNode('value', this.editor.display.wrapper)
            .bindNode('files', ':sandbox', MK.binders.dropFiles('text'));
    }

    toJSON() {
        return encodeURIComponent(this.value);
    }

    fromJSON(value) {
        this.value = decodeURIComponent(value);
        return this;
    }
}
