import $ from 'balajs';
import assign from 'object.assign';
import CodeMirror from 'codemirror';
import {isUri} from 'valid-url';

CodeMirror.defineOption('jsonlint', false, function(editor, value) {
	const initialized = editor._jsonlint;

	if(value && !initialized) {
		let wrapper = editor.display.wrapper,
			validateButton = assign(wrapper.appendChild($.one('<div>')), {
				className: 'lint-button'
			}),
			notifierBlock = wrapper.appendChild(assign($.one('<div>'), {
				className: 'lint-notifier',
			}));

		assign(editor.display, { notifierBlock, validateButton });

		editor.on('change', () => {
			editor.highlightErrorLine(null);
			editor.notify(null);
		});

		validateButton.addEventListener('click', async evt => {
			const value = editor.getValue();

			if(isUri(value.trim())) {
				const resp = await (
					await fetch('/proxy', {
						method: 'post',
						body: JSON.stringify({
							url: value
						})
					})
				).json();

				if(!resp.error) {
					editor.setValue(resp.body);
					editor.validate();
				} else {
					alert('TODO: RESP ERROR');
				}

			} else {
				editor.validate()
			}

		});

		editor._jsonlint = true;
	} else if(!value && !initialized) {
		return;
	} else if(!value && initialized) {
		editor.notifierBlock.style.display = editor.validateButton.style.display = 'none';
	} else if(value && initialized) {
		editor.notifierBlock.style.display = editor.validateButton.style.display = '';
	}
});
