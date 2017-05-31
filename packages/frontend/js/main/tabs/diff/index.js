import CodeMirror from 'codemirror';
import Sandbox from '../tab/components/sandbox';
import Content from './components/content';
import Tab from '../tab';
import LintEditor from '../../../linteditor';


export default class DiffTab extends Tab {
    constructor(...args) {
        super(...args)
            .setData({
                leftValue: '',
                rightValue: ''
            })
            .on({
                tabfocus: () => {
                    this.leftEditor.focus();
                }
            })
            .bindNode('content', <Content owner={this} />)
            .bindSandbox(<Sandbox owner={this} />);
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
            left: btoa(this.leftValue),
            right: btoa(this.rightValue)
        };
    }

    fromJSON(value) {
        this.leftValue = atob(value.left);
        this.rightValue = atob(value.right);
        return this;
    }
}
