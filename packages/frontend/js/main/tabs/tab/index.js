import SeempleObject from 'seemple/object';
import NavItem from './components/navitem';

export default class Tab extends SeempleObject {
    constructor(data, parent, name) {
        super(data)
            .set({ parent, name })
            .bindNode('navItem', <NavItem owner={this} />)
            .onDebounce('change:isActive', (evt) => {
                if (evt.value) {
                    if (!this.initialized) {
                        this.initialize();
                        this.initialized = true;
                    }

                    this.trigger('tabfocus', this);
                }
            });
    }

    onNavClick() {
        this.parent.onNavItemClick(this);
    }
}
