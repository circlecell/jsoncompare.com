import MK from 'matreshka';
import SimpleTab from './simple/simple-tab';
import BatchTab from './batch/batch-tab';
import DiffTab from './diff/diff-tab';

export default class Tabs extends MK.Object {
    constructor() {
        super({
            simple: { title: 'Simple' },
            batch: { title: 'Batch' },
            diff: { title: 'Diff' }
        })
        .bindNode({
            sandbox: 'main',
            container: '.tabs'
        })
        .setClassFor({
            simple: SimpleTab,
            batch: BatchTab,
            diff: DiffTab
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
