import Tab from './tab';
import MK from 'matreshka';
import Batch from './batch';

export default class BatchTab extends Tab {
	constructor(...args) {
		super(...args)
			.set('items', [])
			.setClassFor({
				items: Batch
			});
	}

	initialize() {
		this.items.rerender();

		return this
			.bindNode('files', ':sandbox', MK.binders.dropFiles('text'))
			.on({
				'change:files': () => {
					this.items.recreate(this.files.map(file => ({
						value: file.readerResult
					})));
				}
			});
	}
}
