import MK from 'matreshka';
import BatchItem from './batch-item';

export default class BatchTab extends MK.Array {
    Model = BatchItem;
    itemRenderer = '<div></div>';
    constructor(data, { nodes }) {console.log(nodes);
        super(...data)
            .bindNode({
                sandbox: nodes.sandbox
            })
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
