import Matreshka from 'matreshka';
import SimpleTab from './simple';
import BatchTab from './batch';
import MergeTab from './merge';
import getSandbox from './components/sandbox';
import getNav from './components/nav';

export default class Tabs extends Matreshka.Object {
    constructor() {
        super({
            simple: { title: 'Simple' },
            batch: { title: 'Batch' },
            merge: { title: 'Merge' }
        })
        .setClassFor({
            simple: SimpleTab,
            batch: BatchTab,
            merge: MergeTab
        })
        .bindSandbox(getSandbox(this))
        .bindNode('nav', getNav(this));

        this.simple.isActive = true;
    }

    onNavItemClick(item) {
        for(const tab of this) {
            tab.isActive = item === tab;
        }
    }
}
