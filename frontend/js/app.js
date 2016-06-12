import MK from 'matreshka';
import Tabs from './tabs';
import 'matreshka-router';
import 'babel-polyfill';
import './codemirror-init';
import '../pcss/style.pcss';

const $ = MK.$b;

MK.prototype.appendNode = function(key, selector) {
	var nodes = this.$bound(key),
		container = this.select(selector),
		i = 0;

	for(; i < nodes.length; i++) {
		container.appendChild(nodes[i]);
	}
};

MK.binders.codeMirror = function() {
	return {
		on(cbc) {
			this.CodeMirror.on('change', cbc);
		},

		getValue() {
			return this.CodeMirror.getValue();
		},

		setValue(v) {
			this.CodeMirror.setValue(String(v));
		}
	};
};


MK.defaultBinders.unshift(function() {
	if(this.classList.contains('CodeMirror')) {
		return MK.binders.codeMirror();
	}
});

module.exports = new class App extends MK.Object {
	constructor() {
		const dndPlaceholderAreas = '#simple, #batch';

		super()
			.setClassFor({
				tabs: Tabs
			})
			.initRouter('mode/id')
			.set({
				memo: {},
				mode: this.mode || 'simple'
			})
			.bindNode('sandbox', 'body')
			//.bindNode('dndAreas', '#simple, #batch, #diff .CodeMirror')
			.on({
				'tabs@change:activeTab': evt => {
					this.mode = evt.value.name;
				},
				'dragover::sandbox drop::sandbox': evt => evt.preventDefault()
			})
			.on({
				'change:mode': evt => {
					this.tabs[this.mode].active = true;
				}
			}, true)
			.onDebounce({
				[`dragover::(${dndPlaceholderAreas})`]: evt => {console.log('yomanarofd');
					if(!$.one('.dnd-area', evt.target.closest(dndPlaceholderAreas))) {
						evt.target.closest(dndPlaceholderAreas).appendChild($.create('div', {
							className: 'dnd-area'
						}));
					}
				},
				[`dragleave::(${dndPlaceholderAreas}) drop::(${dndPlaceholderAreas})`]: evt => {
					var area = $.one('.dnd-area', evt.target.closest(dndPlaceholderAreas));
					if(area) {
						area.parentNode.removeChild(area);
					}
				}
			})
			.on({
				'click::(.save)': this.save,
				'change:id': evt => {
					if(this.id) {
						this.restore(this.id);
					}

					console.log('yomanarod');
				}
			});

		if(this.id) {
			this.restore(this.id);
		}
	}

	toJSONString() {
		const {tabs} = this,
			encode = str => str ? encodeURIComponent(str) : '';

		return JSON.stringify({
			simple: encode(tabs.simple.value),
			batch: tabs.batch.items.map(item => encode(item.value)),
			diff: {
				left: encode(tabs.diff.leftValue),
				right: encode(tabs.diff.rightValue)
			}
		});
	}

	fromJSONString(data) {
		const {tabs} = this,
			decode = str => decodeURIComponent(str);

		data = JSON.parse(data);
		tabs.simple.value = decode(data.simple);
		tabs.batch.items.recreate(data.batch ? data.batch.map(item => ({value: decode(item)})) : []);
		tabs.diff.leftValue = decode(data.diff.left);
		tabs.diff.rightValue = decode(data.diff.right);

		return this;
	}

	async save() {
		const body = this.toJSONString();
		const resp = await(
		 	await fetch('/save', {
				method: 'post',
				body
			})
		).json();

		if(!resp.error) {
			this.id = resp.key;
			this.memo[resp.key] = body;
		}
	}

	async restore(id) {
		if(this.memo[id]) {
			this.fromJSONString(this.memo[id]);
		} else {
			let resp = await fetch(`//jsonlintcom.s3.amazonaws.com/${id}.json`);
			resp = await resp.text();
			this.memo[id] = resp;
			this.fromJSONString(resp);
		}

	}
}
