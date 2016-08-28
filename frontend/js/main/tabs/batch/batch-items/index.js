import MK from 'matreshka';
import BatchItem from './batch-item';
import getSandbox from './components/sandbox'

export default class BatchItems extends MK.Array {
    Model = BatchItem;
    constructor(data, { nodes }) {
        super(...data)
            .bindSandbox(getSandbox(this))
            .recreate(data, {
                dontRender: true
            });
    }

    add() {
        this.push({});
        this[this.length - 1].once('initialize', item => item.editor.focus());
    }

    onItemClickDelete(item) {
        this.pull(item);
    }
}
