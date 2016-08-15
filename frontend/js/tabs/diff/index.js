import Tab from '../tab';
import CodeMirror from 'codemirror';
import LintEditor from '../../linteditor';
import style from './diff.css';

export default class DiffTab extends Tab {
    constructor(...args) {
        super(...args)
            .jset({
                leftValue: '',
                rightValue: ''
            })
            .on({
                tabfocus: () => {
                    this.leftEditor.focus();
                }
            })
            .bindNode({
                sandbox: <div class={style.diffTab}>
                    <div class={`${style.flexContent} tab-content`}></div>
                </div>,
                content: ':sandbox .tab-content'
            });
    }

    initialize() {
        const mergeView = new CodeMirror.MergeView(this.nodes.content, {
            dragDrop: true,
            value: this.leftValue || '',
            origLeft: null,
            orig: this.rightValue || '',
            highlightDifferences: true,
            collapseIdentical: false,
            allowEditingOriginals: true
        });

        this.set({
            leftEditor: new LintEditor({
                codeMirror: mergeView.edit,
                owner: this,
                ownerCodeProperty: 'leftValue'
            }),
            rightEditor: new LintEditor({
                codeMirror: mergeView.right.orig,
                owner: this,
                ownerCodeProperty: 'rightValue'
            })
        });
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
