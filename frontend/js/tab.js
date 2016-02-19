import MK from 'matreshka';

let {className} = MK.binders;

export default class Tab extends MK.Object {
	constructor(data, parent, name) {
		super(data)
			.set({parent, name})
			.bindNode({
				tabHeader: parent.select(`.tab-nav [data-tab="${name}"]`),
				sandbox: parent.select(`#${name}`),
				container: ':sandbox .container'
			})
			.bindNode('active', ':bound(tabHeader), :sandbox', className('active'));
	}
}
