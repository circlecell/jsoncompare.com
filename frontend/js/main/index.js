import Matreshka from 'matreshka/matreshka';
import initRouter from 'matreshka-router';
import beautify from 'js-beautify/js/lib/beautify';
import minify from 'jsonminify';
import Sandbox from './components/sandbox';
import Tabs from './tabs';
import LintEditor from '../linteditor';

export default class Main extends Matreshka {
    constructor() {
        super();
        initRouter(this, 'mode/id')
            .instantiate('tabs', Tabs)
            .set({
                memo: {},
                mode: this.mode || 'simple',
                defaultView: this.toJSONString(),
                saved: true,
                loading: true
            })
            .bindSandbox(<Sandbox owner={this} />)
            .bindNode('win', window)
            .on({
                'tabs@change:activeTab': evt => {
                    this.mode = evt.value.name;
                },
                'change:id': ({ fromSave }) => {
                    if (this.id && !fromSave) {
                        this.restore(this.id);
                    }
                },
                'keydown::win': evt => {
                    const S_KEY_CODE = 83;
                    const { domEvent: { ctrlKey, keyCode } } = evt;
                    if (keyCode === S_KEY_CODE && ctrlKey) {
                        evt.preventDefault();
                        if (!this.saved) {
                            this.save();
                        }
                    }
                }
            })
            .on('change:mode', () => {
                this.tabs[this.mode].isActive = true;
            }, true)
            .onDebounce({
                'tabs.*@modify': () => {
                    const currentView = this.toJSONString();
                    this.saved = this.defaultView === currentView
                        || this.memo[this.id] === currentView;
                }
            }, 500);

        document.body.appendChild(this.nodes.sandbox);

        if (this.id) {
            this.restore(this.id);
        }

        Matreshka.on(LintEditor, {
            lint: instance => {
                const { reformat } = this;
                let { code } = instance;

                if (reformat === 'minify') {
                    code = minify(code);
                } else if (reformat === 'beautify') {
                    code = beautify.js_beautify(code, {
                        indent_with_tabs: true
                    });
                }

                instance.set({ code }, {
                    fromReformat: true
                });
            },
            lintRemoteStart: () => {
                this.loading = true;
            },
            lintRemoteEnd: () => {
                this.loading = false;
            }
        })

        window.onbeforeunload = this.beforeUnload.bind(this);
    }

    beforeUnload() {
        if (!this.saved) {
            return 'Entered data is not saved. Are you sure want to leave the page?';
        }

        return undefined;
    }
    onClickSave() {
        this.save();
    }

    error(errorText) {
        clearTimeout(this.errorTimeout);
        this.errorText = errorText;
        this.errorTimeout = setTimeout(() => {
            this.errorText = '';
        }, 5000);
    }

    async save() {
        const body = this.toJSONString();
        let foundId;

        this.loading = true;

        for (const [memoId, memoBody] of Object.entries(this.memo)) {
            if (memoBody === body) {
                foundId = memoId;
            }
        }

        if (foundId) {
            this.set('id', foundId, {
                fromSave: true
            });

            this.saved = true;
        } else {
            try {
                const { error, key } = await (
                    await fetch('/api/save', {
                        method: 'post',
                        body
                    })
                ).json();

                if (error) {
                    this.error(error);
                } else {
                    this.set('id', key, {
                        fromSave: true
                    });

                    this.memo[key] = body;
                    this.saved = true;
                }
            } catch(error) {
                this.error(error);
            }
        }

        this.loading = false;
    }

    async restore(id) {
        this.loading = true;

        if (this.memo[id]) {
            this.fromJSONString(this.memo[id]);
        } else {
            const resp = await (
                await fetch(`//jsonlintcom.s3.amazonaws.com/${id}.json`)
            ).text();

            this.memo[id] = resp;
            this.fromJSONString(resp);
        }

        this.loading = false;
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
}
