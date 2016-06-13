import MK from 'matreshka';
import Tabs from './tabs';
import CodeMirror from 'codemirror';
import $ from 'balajs';
import 'matreshka-router';
import 'babel-polyfill';
import './codemirror-init';
import '../pcss/style.pcss';


MK.prototype.appendNode = function (key, selector) {
	const nodes = this.$bound(key),
		container = this.select(selector);

	for (let i = 0; i < nodes.length; i++) {
		container.appendChild(nodes[i]);
	}
};

MK.binders.codeMirror = function () {
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


MK.defaultBinders.unshift(function () {
	if (this.classList.contains('CodeMirror')) {
		return MK.binders.codeMirror();
	}

	return null;
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
			.bindNode({
				sandbox: 'body',
				reformat: ':sandbox .reformat'
			})
			.on({
				'tabs@change:activeTab': evt => {
					this.mode = evt.value.name;
				},
				'dragover::sandbox drop::sandbox': evt => evt.preventDefault(),
				'click::(.save)': this.save,
				'change:id': () => {
					if (this.id) {
						this.restore(this.id);
					}
				},
				addevent: evt => {
					const prefix = 'codemirror:';
					if (evt.name.indexOf(prefix) === 0) {
						CodeMirror.on(CodeMirror, evt.name.replace(prefix, ''), evt.callback);
					}
				},
				'codemirror:validate': editor => {
					if (this.reformat) {
						const value = JSON.parse(editor.getValue());
						if (this.reformat === 'minify') {
							editor.setValue(JSON.stringify(value));
						} else if (this.reformat === 'beautify') {
							editor.setValue(JSON.stringify(value, null, '\t'));
						}
					}
				}/* ,

				'codemirror:errorvalidate': editor => {
					console.log('errora', editor);
				}*/
			})
			.on({
				'change:mode': () => {
					this.tabs[this.mode].active = true;
				}
			}, true)
			// REFACTOR THIS SHIT
			.onDebounce({
				[`dragover::(${dndPlaceholderAreas})`]: evt => {
					if (!$.one('.dnd-area', evt.target.closest(dndPlaceholderAreas))) {
						evt.target.closest(dndPlaceholderAreas).appendChild($.create('div', {
							className: 'dnd-area'
						}));
					}
				},
				[`dragleave::(${dndPlaceholderAreas}) drop::(${dndPlaceholderAreas})`]: evt => {
					const area = $.one('.dnd-area', evt.target.closest(dndPlaceholderAreas));
					if (area) {
						area.parentNode.removeChild(area);
					}
				}
			});

		if (this.id) {
			this.restore(this.id);
		}
	}

	toJSONString() {
		const { tabs } = this,
			encode = str => {
				// fix for linter
				const result = str ? encodeURIComponent(str) : '';
				return result;
			};

		return JSON.stringify({
			simple: encode(tabs.simple.value),
			batch: tabs.batch.items.map(item => encode(item.value)),
			diff: {
				left: encode(tabs.diff.leftValue),
				right: encode(tabs.diff.rightValue)
			}
		});
	}

	fromJSONString(jsonData) {
		const { tabs } = this,
			decode = str => decodeURIComponent(str),
			data = JSON.parse(jsonData);

		tabs.simple.value = decode(data.simple);
		tabs.batch.items.recreate(data.batch ? data.batch.map(item => ({
			value: decode(item)
		})) : []);
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

		if (!resp.error) {
			this.id = resp.key;
			this.memo[resp.key] = body;
		}
	}

	async restore(id) {
		if (this.memo[id]) {
			this.fromJSONString(this.memo[id]);
		} else {
			const resp = await (
				await fetch(`//jsonlintcom.s3.amazonaws.com/${id}.json`)
			).text();

			this.memo[id] = resp;
			this.fromJSONString(resp);
		}
	}
};
