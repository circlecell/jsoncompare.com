/* eslint no-param-reassign: ["error", { "props": false }]*/

import $ from 'balajs';
import assign from 'object.assign';
import CodeMirror from 'codemirror';
import byteSize from 'byte-size';

const getBytes = str => new Blob([str], {
    type: 'text/javascript'
}).size;

CodeMirror.defineOption('showSize', false, (editor, value) => {
    if (value) {
        const wrapper = editor.display.wrapper;
        const sizeBlock = assign(wrapper.appendChild($.one('<div>')), {
            className: 'size-block',
            title: 'Size'
        });
        const changeSize = () => {
            const bytes = getBytes(editor.getValue());
            sizeBlock.innerHTML = bytes ? byteSize(bytes, {
                units: 'iec'
            }) : '';
        };

        assign(editor.display, { sizeBlock });
        changeSize();

        editor.on('change', changeSize);
    }
});
