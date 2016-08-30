import Matreshka from 'matreshka';
import makeElement from 'makeelement';
import jsonlint from 'exports?jsonlint!jsonlint/web/jsonlint';
import byteSize from 'byte-size';
import { isUri } from 'valid-url';
import styles from './style.css';
import './codemirror-init';

const { html, className } = Matreshka.binders;

export default class LintEditor extends Matreshka.Object {
    constructor({
        codeMirror,
        owner,
        ownerCodeProperty
    }) {
        super();
        this.set({
            codeMirror,
            errorLine: null,
            errorText: '',
            validated: false
        })
        this.bindNode({
            sandbox: this.codeMirror.display.wrapper,
            lintButton: makeElement('div', {
                className: styles.lintButton,
                title: 'Lint'
            }),
            clearButton: makeElement('div', {
                className: styles.clearButton,
                title: 'Clear'
            }),
            notifierBlock: makeElement('div', {
                className: styles.lintNotifier
            }),
            sizeBlock: makeElement('div', {
                className: styles.sizeBlock,
                title: 'Size'
            })
        })
        .appendNode([
            'lintButton',
            'clearButton',
            'notifierBlock',
            'sizeBlock'
        ], ':sandbox')
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
            setValue(value, bindingOptions) {
                const { CodeMirror: codeMirror } = this;
                const { previousErrorLine } = codeMirror;
                if(value !== null) {
                    codeMirror.addLineClass(value, 'background', 'lint-line-error');
                    codeMirror.previousErrorLine = value;
                } else if(typeof previousErrorLine === 'number') {
                    codeMirror.removeLineClass(previousErrorLine, 'background', 'lint-line-error');
                }
            }
        })
        .bindNode('errorText', ':bound(notifierBlock)', html())
        .bindNode('size', ':bound(sizeBlock)', html())
        .bindNode('validated', ':bound(lintButton)', className(styles.lintButtonSuccess))
        .linkProps('size', 'code', code => {
            const bytes = new Blob([code], {
                type: 'text/javascript'
            }).size;

            return bytes ? byteSize(bytes, {
                units: 'iec'
            }) : '';
        })
        .linkProps('code', [owner, ownerCodeProperty])
        .events();

        owner.linkProps(ownerCodeProperty, [this, 'code']);


    }

    events() {
        return this
            .on('click::clearButton', () => {
                this.value = '';
            })
            .on('click::lintButton', () => {
                if(isUri(this.code.trim())) {
                    this.lintRemoteResource();
                } else {
                    this.lint();
                }
            })
            .on('click::clearButton', () => {
                this.code = '';
            })
            .on('change:code', () => {
                this.errorLine = null;
                this.errorText = '';
                this.validated = false;
            })
            .on('lint', () => {
                Matreshka.trigger(LintEditor, 'lint', this);
            });
    }

    focus() {
        this.codeMirror.focus();
    }

    lint() {
        const { code } = this;

        try {
            JSON.parse(code);
            this.validated = true;
            this.errorText = '';
            this.trigger('lint');
        } catch (_e) {
            try {
                jsonlint.parse(code);
                this.validated = true;
                this.errorText = '';
                this.trigger('lint');
            } catch (e) {
                // retrieve line number from error
                const lineMatches = e.message.match(/line ([0-9]*)/);
                if (lineMatches && lineMatches.length > 1) {
                    this.errorLine = +lineMatches[1] - 1;
                }

                this.validated = false;
                this.errorText = e.message;
            }
        }
    }

    async lintRemoteResource() {
        const url = this.code.trim();

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
        } catch(e) {
            this.errorText = e;
        }
    }
}
