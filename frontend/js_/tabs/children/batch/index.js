import Tab from '../tab';
import MK from 'matreshka';
import BatchItems from './batch-list';
import style from './batch.css';
import realDOM from '../../addons/realdom';
const { className } = MK.binders;

export default class BatchTab extends Tab {
    constructor(...args) {
        super(...args)
            .set('items', [])

            .on({
                'change:files': () => {
                    this.items.recreate(this.files.map(file => ({
                        value: file.readerResult
                    })));
                },
                'items@modify': () => this.trigger('modify'),
                //[`click::(.${style.addField})`]: () => this.items.add()
            })
            .bindNode('sandbox',
                <div class={style.batchTab} owner={this} bind={{
                    //file: [foo()), bar()],
                }}>
                    <div class={style.batchButtons}>
                        <h3>Drop files there, open files or add fields manually</h3>

                        <button class={style.addFiles}>
                            <input type="file" multiple />
                            Open files
                        </button>
                        <button
                            class={style.addField}
                            onClick={() => this.items.add()}
                        >Add field</button>
                    </div>
                    <div class="content"></div>
                    <div class="dnd-message">Drop files there</div>
                </div>
            )
            .setClassFor({
                items: BatchItems
            });
    }

    initialize() {
        this.items.rerender();

        return this
            .bindNode('files', ':sandbox', MK.binders.dropFiles('text'))
            .bindNode('files', `:sandbox .${style.addFiles} input`, MK.binders.file('text'))
            .bindNode('dragovered', ':sandbox', MK.binders.dragOver())
            .bindNode('dragovered', ':sandbox', MK.binders.className('dragovered'))
            .bindNode('items.length', ':sandbox', MK.binders.className('has-items'))
            /*.bindNode('active', ':bound(tabHeader), :sandbox', className(style.active), {
                assignDefaultValue: true
            });*/
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
