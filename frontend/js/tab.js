import MK from 'matreshka';

let {className} = MK.binders;

export default class Tab extends MK.Object {
	constructor(data, parent, name) {
		super(data)
			.set({
				parent,
				name,
				active: false
			})
			.bindNode({
				tabHeader: parent.select(`.tab-nav [data-tab="${name}"]`),
				sandbox: parent.select(`#${name}`),
				content: ':sandbox .content'
			})
			.on({
				'change:active': evt => {
					if(!this.initialized) {
						setTimeout(() => {
							// need little timeout
							this.initialize();
						}, 300);

						this.initialized = true;
					}
				}
			})
			.bindNode('active', ':bound(tabHeader), :sandbox', className('active'), {
				assignDefaultValue: true
			});
	}
}
