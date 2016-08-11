import Tab from '../tab';
import MK from 'matreshka';
import BatchItems from './batch-list';

export default class BatchTab extends Tab {
    constructor(...args) {
        super(...args)
            .set('items', [])
            .setClassFor({
                items: BatchItems
            })
            .on({
                'change:files': () => {
                    this.items.recreate(this.files.map(file => ({
                        value: file.readerResult
                    })));
                },
                'items@modify': () => this.trigger('modify')
            });
    }

    initialize() {
        this.items.rerender();

        return this
            .bindNode('files', ':sandbox', MK.binders.dropFiles('text'))
            .bindNode('dragovered', ':sandbox', MK.binders.dragOver())
            .bindNode('dragovered', ':sandbox', MK.binders.className('dragovered'));
    }

    toJSON() {
        return this.items.map(item => encodeURIComponent(item.value));
    }

    fromJSON(value) {
        this.items.recreate(value.map(item => ({
            value: decodeURIComponent(item)
        })));

        return this;
    }
}
