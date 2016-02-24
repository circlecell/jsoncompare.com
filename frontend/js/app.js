import MK from 'matreshka';
import Tabs from './tabs';

MK.prototype.appendNode = function(key, selector) {
	var nodes = this.$bound(key),
		container = this.select(selector),
		i = 0;

	for(; i < nodes.length; i++) {
		container.appendChild(nodes[i]);
	}
};

module.exports = new class App extends MK.Object {
	constructor() {
		super()
			.setClassFor({
				tabs: Tabs
			})
			.bindNode('sandbox', 'body')

	}
}
