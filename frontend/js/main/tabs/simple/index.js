import Matreshka from 'matreshka';
import getSandbox from './components/sandbox';
import getMenuItem from './components/menuitem';

export default class SimpleTab extends Matreshka {
    constructor(data) {
        super(data)
            .bindSandbox(getSandbox(this))
            .bindNode('menuItem', getMenuItem(this))
    }
}
