import Matreshka from 'matreshka';
import SimpleTab from './simple';
import BatchTab from './batch';
import DiffTab from './diff';
import getSandbox from './components/sandbox';
import getNav from './components/nav';

export default class Tabs extends Matreshka.Object {
    constructor() {
        super({
            simple: { title: 'Simple' },
            batch: { title: 'Batch' },
            diff: { title: 'Merge' }
        })
        .setClassFor({
            simple: SimpleTab,
            batch: BatchTab,
            diff: DiffTab
        })
        .bindSandbox(getSandbox(this))
        .bindNode('nav', getNav(this))
        .on({
            '*@change:isActive': evt => {
                if (evt.value) {
                    for (const tab of this) {
                        tab.isActive = tab === evt.self;
                    }

                    this.activeTab = evt.self;
                }
            }
        });

        this.simple.isActive = true;
    }

    onNavItemClick(item) {
        for(const tab of this) {
            tab.isActive = item === tab;
        }
    }
}
