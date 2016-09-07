import Sandbox from '../tab/components/sandbox';
import Content from './components/content';
import Tab from '../tab';
import BatchItems from './batch-items';

export default class BatchTab extends Tab {
    constructor(...args) {
        super(...args)
            .setData({ items: [] })
            .instantiate({
                items: BatchItems
            })
            .bindNode('content', <Content owner={this} />)
            .bindSandbox(<Sandbox owner={this} />)
            .on({
                tabfocus: () => {
                    // this.editor.focus();
                },
                'change:files': () => {
                    this.items.recreate();

                    for (const file of this.files) {
                        this.items.push({
                            value: file.readerResult,
                            lintImmediately: true
                        });
                    }
                },
                'items@modify items.*@modify': () => this.trigger('modify')
            });
    }

    initialize() {
        this.items.rerender();
    }

    onAddButtonClick() {
        this.items.add({});
    }

    toJSON() {
        return this.items.map(item => btoa(item.value));
    }

    fromJSON(value) {
        this.items.recreate(value.map(item => ({
            value: atob(item)
        })));

        return this;
    }
}
