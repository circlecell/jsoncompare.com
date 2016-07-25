import MK from 'matreshka';
import Tabs from './tabs/tabs';
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

    return this;
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
    if (this.classList && this.classList.contains('CodeMirror')) {
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
                mode: this.mode || 'simple',
                defaultView: this.toJSONString(),
                saved: true
            })
            .bindNode({
                sandbox: 'body',
                reformat: ':sandbox .reformat',
                saveButton: ':sandbox .save',
                win: window
            })
            .bindNode('saved', ':bound(saveButton)', MK.binders.className('disabled'))
            .on({
                'tabs@change:activeTab': evt => {
                    this.mode = evt.value.name;
                },
                'dragover::sandbox drop::sandbox': evt => evt.preventDefault(),
                'click::saveButton': this.save,
                'change:id': ({ fromSave }) => {
                    if (this.id && !fromSave) {
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
                },
                'keydown::win': evt => {
                    const S_KEY_CODE = 83;
                    const {domEvent: { ctrlKey, keyCode }} = evt;
                    if(keyCode === S_KEY_CODE && ctrlKey) {
                        evt.preventDefault();
                        if(!this.saved) {
                            this.save();
                        }
                    }
                }
                /* ,

                'codemirror:errorvalidate': editor => {
                    console.log('errora', editor);
                }*/
            })
            .on({
                'change:mode': () => {
                    this.tabs[this.mode].active = true;
                }
            }, true)

            // TODO REFACTOR THIS
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
            })
            .onDebounce({
                'tabs.*@modify': evt => {
                    const currentView = this.toJSONString();
                    this.saved = this.defaultView === currentView || this.memo[this.id] === currentView;
                }
            }, 300);

        if (this.id) {
            this.restore(this.id);
        }
    }

    toJSONString() {
        const data = {};
        this.tabs.each((tab, name) => {
            data[name] = tab.toJSON();
        });

        return JSON.stringify(data);
    }

    fromJSONString(str) {
        const data = JSON.parse(str);

        this.tabs.each((tab, name) => {
            tab.fromJSON(typeof data[name] === 'undefined' ? null : data[name]);
        });

        return this;
    }

    async save() {
        const body = this.toJSONString();
        let foundId;

        for(let [memoId, memoBody] of Object.entries(this.memo)) {
            if(memoBody === body)  {
                foundId = memoId
            }
        }

        if(foundId) {
            this.set('id', foundId, {
                fromSave: true
            });

            this.saved = true;
        } else {
            const resp = await (
                await fetch('/api/save', {
                    method: 'post',
                    body
                })
            ).json();

            if (!resp.error) {
                this.set('id', resp.key, {
                    fromSave: true
                });
                this.memo[resp.key] = body;
                this.saved = true;
            }
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

if (module.hot) {
    module.hot.accept();
}
