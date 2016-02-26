import Tab from './tab';
import MK from 'matreshka';
import Batch from './batch'

const $ = MK.$b;



export default class BatchTab extends Tab {
	constructor(...args) {
		super(...args)
			.set('items', [{},{}])
			.setClassFor({
				items: Batch
			});
	}

	initialize() {
		this.items.rerender();

		return this;
	}
}
