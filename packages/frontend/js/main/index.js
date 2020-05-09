import Seemple from 'seemple/seemple';
import { dataset } from 'seemple/binders';
import initRouter from 'seemple-router';
import beautify from 'js-beautify/js/lib/beautify';
import minify from 'jsonminify';
import qs from 'qs';
import jsonabc from 'jsonabc';
import LintEditor from '../linteditor';
import Sandbox from './components/sandbox';
import Tabs from './tabs';

export default class Main extends Seemple {
    constructor() {
        initRouter(super(), 'mode/params')
            .instantiate('tabs', Tabs)
            .set({
                memo: {},
                mode: this.mode || 'simple',
                defaultView: this.toJSONString(),
                saved: true,
                loading: true
            })
            .calc({
                id: {
                    source: 'params',
                    handler: (params) => (qs.parse(params).id || null)
                },
                fullscreen: {
                    source: 'params',
                    handler: (params) => 'fullscreen' in qs.parse(params)
                },
                reformat: {
                    source: 'params',
                    handler: (params) => (qs.parse(params).reformat || 'beautify_tabs')
                },
                sortAlphabetically: {
                    source: 'params',
                    handler: (params) => 'sortAlphabetically' in qs.parse(params)
                },
                params: {
                    source: ['id', 'fullscreen', 'reformat', 'sortAlphabetically'],
                    handler(id, fullscreen, reformat, sortAlphabetically) {
                        const params = [];

                        if (id) {
                            params.push(`id=${id}`);
                        }

                        if (fullscreen) {
                            params.push('fullscreen');
                        }

                        if (reformat !== 'beautify_tabs') {
                            params.push(`reformat=${reformat}`);
                        }

                        if (sortAlphabetically) {
                            params.push('sortAlphabetically');
                        }

                        return params.join('&');
                    }
                }
            })
            .bindSandbox(<Sandbox owner={this} />)
            .bindNode('win', window)
            .bindNode('mode', 'body', dataset('mode'))
            .bindNode('fullscreen', 'body', {
                setValue(value, { node }) {
                    // eslint-disable-next-line no-param-reassign
                    node.dataset.fullscreen = value ? 'on' : 'off';
                }
            })
            .on({
                'tabs@change:activeTab': (evt) => {
                    this.mode = evt.value.name;
                },
                'change:id': ({ fromSave }) => {
                    if (this.id && !fromSave) {
                        this.restore(this.id);
                    }
                },
                'keydown::win': (evt) => {
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

        document.querySelector('main').appendChild(this.nodes.sandbox);

        if (this.id) {
            this.restore(this.id);
        } else {
            this.loading = false;
        }

        Seemple.on(LintEditor, {
            lint: (instance) => {
                const { reformat, sortAlphabetically } = this;
                let { code } = instance;

                if (sortAlphabetically) {
                    code = JSON.stringify(jsonabc.sortObj(JSON.parse(code)));
                }

                if (reformat === 'minify') {
                    code = minify(code);
                } else if (reformat === 'beautify_tabs') {
                    code = beautify.js_beautify(code, {
                        indent_with_tabs: true
                    });
                } else if (reformat === 'beautify_2') {
                    code = beautify.js_beautify(code, {
                        indent_size: 2
                    });
                } else if (reformat === 'beautify_4') {
                    code = beautify.js_beautify(code, {
                        indent_size: 4
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
        });

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

    onClickFullscreen() {
        this.fullscreen = !this.fullscreen;
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
            } catch (error) {
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
