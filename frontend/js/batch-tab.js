import Tab from './tab';
import MK from 'matreshka';
import Batch from './batch'

const $ = MK.$b;



export default class BatchTab extends Tab {
	constructor(...args) {
		super(...args)
			.set('batch', [{},{}])
			.setClassFor({
				batch: Batch
			});
	}

	initialize() {
		this.batch.rerender();

		return this;
	}
}
