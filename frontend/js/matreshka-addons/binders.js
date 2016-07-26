import MK from 'matreshka';

MK.defaultBinders.unshift(function () {
    if (this.classList && this.classList.contains('CodeMirror')) {
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
    }

    return null;
});
