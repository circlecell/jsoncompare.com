import MK from 'matreshka';
import style from './tab.css';

const { className } = MK.binders;

export default class Tab extends MK.Object {
    constructor(data, parent, name) {
        super(data)
            .set({
                parent,
                name,
                active: false
            })
            .on({
                'change:active': () => {
                    if (this.active) {
                        if (!this.initialized) {
                            setTimeout(() => {
                                // need little timeout
                                this.initialize();
                                this.trigger('tabfocus', this);
                            }, 200);

                            this.initialized = true;
                        } else {
                            this.trigger('tabfocus', this);
                        }
                    }
                },
                'bind:sandbox': () => {
                    this.bindNode({
                        tabHeader: parent.select(`.tab-nav [data-tab="${name}"]`)
                    })
                    .bindNode('active', ':sandbox', MK.binders.display())
                    .appendNode('sandbox', parent.nodes.container);
                }
            })

    }
}
