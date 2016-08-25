import Matreshka from 'matreshka';
import getSandbox from './components/sandbox'
import Tabs from './tabs';

export default class Main extends Matreshka {
    constructor() {
        super();
        this
            .setClassFor('tabs', Tabs)
            .bindSandbox(getSandbox(this))
            .appendNode('sandbox', 'body');
    }
}
