import MatreshkaArray from 'matreshka/array';
import BatchItem from './batch-item';
import Sandbox from './components/sandbox';

export default class BatchItems extends MatreshkaArray {
    Model = BatchItem;

    constructor(data) {
        super(...data)
            .bindSandbox(<Sandbox owner={this} />)
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
