import MK from 'matreshka';
import Tabs from './tabs';



module.exports = new class App extends MK.Object {
	constructor() {
		super()
			.setClassFor({
				tabs: Tabs
			})
			.bindNode('sandbox', 'body')

	}
}
