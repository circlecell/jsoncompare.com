import Matreshka from 'matreshka';
import getNavItem from './components/navitem';

export default class Tab extends Matreshka.Object {
    constructor(data, parent, name) {
        super(data)
            .set({ parent, name })
            .bindNode('navItem', getNavItem(this))
            .onDebounce('change:isActive', evt => {
                if(evt.value) {
                    if(!this.initialized) {
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
