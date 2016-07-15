/* eslint no-param-reassign: ["error", { "props": false }]*/

import $ from 'balajs';
import assign from 'object.assign';
import CodeMirror from 'codemirror';

const getByteSyze = str => new Blob([str], {
	type: 'text/javascript'
}).size;

CodeMirror.defineOption('showSize', false, (editor, value) => {
	if (value) {
		const wrapper = editor.display.wrapper,
			sizeBlock = assign(wrapper.appendChild($.one('<div>')), {
				className: 'size-block',
				title: 'Size',
				innerHTML: 'Yes it\'s me'
			}),
			changeSize = () => {
				sizeBlock.innerHTML = `${getByteSyze(editor.getValue())} bytes`;
			};

		assign(editor.display, { sizeBlock });
		changeSize();

		editor.on('change', changeSize);
	}
});
