import MK from 'matreshka';
import SimpleTab from './simple-tab';
import BatchTab from './batch-tab';
import DiffTab from './diff-tab';

export default class Tabs extends MK.Object {
	constructor(data, parent) {
		super({
			simple: { title: 'Simple' },
			batch: { title: 'Batch' },
			diff: { title: 'Diff' }
		})
		.bindNode({
			sandbox: '.tabs',
			container: '.tab-content'
		})
		.setClassFor({
			simple: SimpleTab,
			batch: BatchTab,
			diff: DiffTab
		})
		.on({
			'@click::tabHeader': evt => {
				for(let tab of this) {
					tab.active = evt.target.dataset.tab == tab.name;
				}
			}
		})
	}
}
