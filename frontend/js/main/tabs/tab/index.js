import Matreshka from 'matreshka';
import getNavItem from './components/navitem';

export default class Tab extends Matreshka.Object {
    constructor(data, parent) {
        super(data)
            .set({ parent })
            .bindNode('navItem', getNavItem(this))
            .onDebounce('change:isActive', () => {
                if(!this.initialized) {
                    this.initialize();
                    this.initialized = true;
                }
            });
    }

    onNavClick() {
        this.parent.onNavItemClick(this);
    }
}
