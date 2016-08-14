import Tab from '../tab';
import CodeMirror from 'codemirror';
import LintEditor from '../../linteditor';

export default class DiffTab extends Tab {
    constructor(...args) {
        super(...args)
            .jset({
                leftValue: '',
                rightValue: ''
            })
            .on({
                tabfocus: () => {
                    this.editor.edit.focus();
                }
            });
    }

    initialize() {
        const cccc = new CodeMirror.MergeView(this.nodes.content, {
            dragDrop: true,
            value: this.leftValue || '',
            origLeft: null,
            orig: this.rightValue || '',
            highlightDifferences: true,
            collapseIdentical: false,
            allowEditingOriginals: true
        });

        this.set({
            leftEditor: new LintEditor(cccc),
            rightEditor: new LintEditor(cccc.right)
        });

        this.leftEditor.linkCode(this, 'leftEditor');
        this.rightEditor.linkCode(this, 'editorValue');
    }

    toJSON() {
        return {
            left: encodeURIComponent(this.leftValue),
            right: encodeURIComponent(this.rightValue)
        };
    }

    fromJSON(value) {
        this.leftValue = decodeURIComponent(value.left);
        this.rightValue = decodeURIComponent(value.right);
        return this;
    }
}
