import MK from 'matreshka';

const { className } = MK.binders;

export default class Tab extends MK.Object {
    constructor(data, parent, name) {
        super(data)
            .set({
                parent,
                name,
                active: false
            })
            .bindNode({
                tabHeader: parent.select(`.tab-nav [data-tab="${name}"]`),
                sandbox: parent.select(`#${name}`),
                content: ':sandbox .content'
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
                }
            })
            .bindNode('active', ':bound(tabHeader), :sandbox', className('active'), {
                assignDefaultValue: true
            });
    }
}
