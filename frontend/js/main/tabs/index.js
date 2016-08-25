import Matreshka from 'matreshka';
import getSandbox from './components/sandbox';
import SimpleTab from './simple';

export default class Tabs extends Matreshka.Object {
    constructor() {
        super()
            .setClassFor({
                simple: SimpleTab
            })
            .bindSandbox(getSandbox(this))
    }
}
