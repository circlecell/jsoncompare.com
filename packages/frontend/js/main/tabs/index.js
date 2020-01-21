import SeempleObject from 'seemple/object';
import SimpleTab from './simple';
import BatchTab from './batch';
import DiffTab from './diff';
import Sandbox from './components/sandbox';
import Nav from './components/nav';

export default class Tabs extends SeempleObject {
    constructor() {
        super({
            simple: {
                title: 'Simple',
                description: 'Simple JSON validation'
            },
            batch: {
                title: 'Batch',
                description: 'Validate multiple JSON objects at once'
            },
            diff: {
                title: 'Diff',
                description: 'Compare and merge two JSON objects'
            }
        })
            .instantiate({
                simple: SimpleTab,
                batch: BatchTab,
                diff: DiffTab
            })
            .bindSandbox(<Sandbox owner={this} />)
            .bindNode('nav', <Nav owner={this} />)
            .on({
                '*@change:isActive': (evt) => {
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
        for (const tab of this) {
            tab.isActive = item === tab;
        }
    }
}
