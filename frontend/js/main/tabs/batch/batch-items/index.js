import MK from 'matreshka';
import BatchItem from './batch-item';
import getSandbox from './components/sandbox'

export default class BatchTab extends MK.Array {
    Model = BatchItem;
    constructor(data, { nodes }) {
        super(...data)
            .bindSandbox(getSandbox(this))
            .recreate(data, {
                dontRender: true
            })
            .on({
                '*@click::deleteButton': evt => {
                    this.pull(evt.self);
                }
            });
    }

    add() {
        this.push({});
        this[this.length - 1].once('initialize', item => item.editor.focus());
    }
}
