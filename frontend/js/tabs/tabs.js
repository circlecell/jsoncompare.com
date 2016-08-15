import MK from 'matreshka';
import SimpleTab from './simple';
import BatchTab from './batch';
import DiffTab from './diff';
import style from './tabs.css';

export default class Tabs extends MK.Object {
    constructor() {
        super({
            simple: { title: 'Simple' },
            batch: { title: 'Batch' },
            diff: { title: 'Diff' }
        })
        .bindNode({
            sandbox: `<main>
                <ul class="tab-nav">
                    <li data-tab="simple" class="tab-nav-item">Simple</li>
                    <li data-tab="batch" class="tab-nav-item">Batch</li>
                    <li data-tab="diff" class="tab-nav-item">Merge</li>
                    <li style="flex: 1;">
                        <select class="reformat">
                            <option value="">Keep JSON as is</option>
                            <option value="beautify">Beautify on validate</option>
                            <option value="minify">Minify on validate</option>
                        </select>

                        <button class="save button-primary" style="float:right;" data-save-text="Save" data-saved-text="Saved"></button>
                    </li>
                </ul>

                <div class="${style.tabs}"></div>
            </main>`,
            container: `:sandbox .${style.tabs}`
        })
        .appendNode('sandbox', 'body')
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
