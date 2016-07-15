/* eslint no-param-reassign: ["error", { "props": false }]*/

import $ from 'balajs';
import assign from 'object.assign';
import CodeMirror from 'codemirror';
import { isUri } from 'valid-url';

CodeMirror.defineOption('jsonlint', false, (editor, value) => {
	const initialized = editor._jsonlint;

	if (value && !initialized) {
		const wrapper = editor.display.wrapper,
			validateButton = assign(wrapper.appendChild($.one('<div>')), {
				className: 'lint-button',
				title: 'Validate'
			}),
			clearButton = assign(wrapper.appendChild($.one('<div>')), {
				className: 'clear-button',
				title: 'Clear'
			}),
			notifierBlock = wrapper.appendChild(assign($.one('<div>'), {
				className: 'lint-notifier',
			}));

		assign(editor.display, { notifierBlock, validateButton });

		editor.on('change', () => {
			editor.highlightErrorLine(null);
			editor.notify(null);
		});

		validateButton.addEventListener('click', async () => {
			const editorValue = editor.getValue();

			if (isUri(editorValue.trim())) {
				const resp = await (
					await fetch('/proxy', {
						method: 'post',
						body: JSON.stringify({
							url: editorValue
						})
					})
				).json();

				if (!resp.error) {
					editor.setValue(resp.body);
					editor.validate();
				} else {
					alert('TODO: RESP ERROR');
				}
			} else {
				editor.validate();
			}
		});

		clearButton.addEventListener('click', () => {
			editor.setValue('');
		});

		editor._jsonlint = true;
	} else if (!value && !initialized) {
		return;
	} else if (!value && initialized) {
		editor.notifierBlock.style.display = editor.validateButton.style.display = 'none';
	} else if (value && initialized) {
		editor.notifierBlock.style.display = editor.validateButton.style.display = '';
	}
});
