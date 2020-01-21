import SeempleObject from 'seemple/object';
import trigger from 'seemple/trigger';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonlint from 'jsonlint-mod';
import byteSize from 'byte-size';
import { isUri } from 'valid-url';
import Extras from './components/extras';

export default class LintEditor extends SeempleObject {
    constructor({
        codeMirror,
        owner,
        ownerCodeProperty
    }) {
        super()
            .set({
                codeMirror,
                errorLine: null,
                errorText: '',
                validated: false
            })
            .bindNode({
                sandbox: this.codeMirror.display.wrapper
            })
            .bindNode('code', ':sandbox', {
                on(callback) {
                    this.CodeMirror.on('change', callback);
                },
                getValue() {
                    return this.CodeMirror.getValue();
                },
                setValue(value) {
                    this.CodeMirror.setValue(`${value}`);
                }
            })
            .bindNode('errorLine', ':sandbox', {
                setValue(value) {
                    const { CodeMirror: codeMirrorInstance } = this;
                    const { previousErrorLine } = codeMirrorInstance;

                    if (value !== null) {
                        codeMirrorInstance.addLineClass(value, 'background', 'lint-line-error');
                        codeMirrorInstance.previousErrorLine = value;
                    } else if (typeof previousErrorLine === 'number') {
                        codeMirrorInstance.removeLineClass(previousErrorLine, 'background', 'lint-line-error');
                    }
                }
            })

            .calc('size', 'code', (code) => {
                const bytes = new Blob([code], {
                    type: 'text/javascript'
                }).size;
                const { value, unit } = byteSize(bytes, {
                    units: 'iec'
                });

                return bytes ? value + unit : '';
            })
            .calc('code', {
                object: owner,
                key: ownerCodeProperty
            })
            .events();

        owner.calc(ownerCodeProperty, {
            object: this,
            key: 'code'
        });

        codeMirror.addKeyMap({
            'Ctrl-Enter': () => this.lint()
        });

        this.nodes.sandbox.appendChild(<Extras owner={this} />);
    }

    onClearButtonClick() {
        this.code = '';
    }

    onLintButtonClick() {
        if (isUri(this.code.trim())) {
            this.lintRemoteResource();
        } else {
            this.lint();
        }
    }

    events() {
        return this
            .on('change:code', (evt) => {
                if (!evt || !evt.fromReformat) {
                    this.errorLine = null;
                    this.errorText = '';
                    this.validated = false;
                }
            })
            .on('lint', () => {
                trigger(LintEditor, 'lint', this);
            });
    }

    focus() {
        this.codeMirror.focus();
    }

    lint() {
        const { code } = this;

        try {
            jsonlint.parse(code);
            this.validated = true;
            this.errorText = '';
            this.trigger('lint');
        } catch (e) {
            // retrieve line number from error string
            const lineMatches = e.message.match(/line ([0-9]*)/);
            if (lineMatches && lineMatches.length > 1) {
                this.errorLine = +lineMatches[1] - 1;
            }

            this.validated = false;
            this.errorText = e.message;
        }
    }

    async lintRemoteResource() {
        const url = this.code.trim();

        trigger(LintEditor, 'lintRemoteStart', this);

        try {
            const resp = await (
                await fetch('/api/proxy', {
                    method: 'post',
                    body: JSON.stringify({ url })
                })
            ).json();

            if (!resp.error) {
                this.code = resp.body;
                this.lint();
            } else {
                this.errorText = resp.error;
            }
        } catch (e) {
            this.errorText = e;
        }

        trigger(LintEditor, 'lintRemoteEnd', this);
    }
}
