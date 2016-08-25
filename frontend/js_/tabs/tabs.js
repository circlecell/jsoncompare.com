import MK from 'matreshka';
//import SimpleTab from './simple';
//import BatchTab from './batch';
//import DiffTab from './diff';
import style from './tabs.css';
import sandbox from './sandbox'

export default class Tabs extends MK.Object {
    constructor() {
        super({
            //simple: { title: 'Simple' },
            //batch: { title: 'Batch' },
            //diff: { title: 'Diff' }
        })
        .bindNode('sandbox', sandbox(this))
        .appendNode('sandbox', 'body')
        .setClassFor({
            //simple: SimpleTab,
            //batch: BatchTab,
            //diff: DiffTab
        })
        .on({
            '*@click::tabHeader': evt => {
                for (const tab of this) {
                    tab.active = evt.target.dataset.tab === tab.name;
                }
            },
            '*@change:active': evt => {
                if (evt.value) {
                    for (const tab of this) {
                        tab.active = tab === evt.self;
                    }

                    this.activeTab = evt.self;
                }
            }
        });
    }
}
