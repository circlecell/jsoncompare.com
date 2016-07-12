import Tab from '../tab';
import MK from 'matreshka';
import Batch from './batch';

export default class BatchTab extends Tab {
	constructor(...args) {
		super(...args)
			.set('items', [])
			.setClassFor({
				items: Batch
			})
			.on({
				'change:files': () => {
					this.items.recreate(this.files.map(file => ({
						value: file.readerResult
					})));
				}
			});
	}

	initialize() {
		this.items.rerender();

		return this
			.bindNode('files', ':sandbox', MK.binders.dropFiles('text'));
	}

	toJSON() {
		return this.items.map(item => encodeURIComponent(item.value));
	}

	fromJSON(value) {
		this.items.recreate(value.map(item => ({
			value: decodeURIComponent(item)
		})));

		return this;
	}
}
