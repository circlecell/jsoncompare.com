import MK from 'matreshka';
import Tabs from './tabs';

MK.prototype.appendNode = function(key, selector) {
	var nodes = this.$bound(key),
		container = this.select(selector),
		i = 0;

	for(; i < nodes.length; i++) {
		container.appendChild(nodes[i]);
	}
};

MK.binders.codeMirror = function() {
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

MK.binders.dropFiles = function(readAs) {
	var readFiles = function(files, readAs, callback) {
			var length = files.length,
				i = 0,
				filesArray = MK.toArray(files),
				file;

			if (readAs) {
				filesArray.forEach(function(file) {
					var reader = new FileReader();

					reader.onloadend = function(evt) {
						file.readerResult = reader.result;
						if (++i == length) {
							callback(filesArray);
						}
					};

					reader[readAs](file);
				});
			} else {
				callback(filesArray);
			}
		};

		/* istanbul ignore if  */
		if (typeof FileReader == 'undefined') {
			throw Error('FileReader is not supported by this browser');
		}

		if(readAs) {
			readAs = 'readAs' + readAs[0].toUpperCase() + readAs.slice(1);
			if(!FileReader.prototype[readAs]) {
				throw Error(readAs + ' is not supported by FileReader');
			}
		}

		return {
			on: function(callback) {
				var handler = function(evt) {
					evt.preventDefault();
					evt.stopPropagation();
					var files = evt.dataTransfer.files;
					if (files.length) {
						readFiles(files, readAs, callback);
					} else {
						callback([]);
					}
				};

				this.addEventListener('drop', handler);
				this.addEventListener('dragover', function(evt) {
					evt.dataTransfer.dropEffect = 'copy';
					evt.preventDefault();
				});
			},
			getValue: function(o) {
				return o.domEvent || [];
			}
		};


};

MK.defaultBinders.unshift(function() {
	if(this.classList.contains('CodeMirror')) {
		return MK.binders.codeMirror();
	}
});

module.exports = new class App extends MK.Object {
	constructor() {
		super()
			.setClassFor({
				tabs: Tabs
			})
			.bindNode('sandbox', 'body')
			.bindNode('files', 'body', MK.binders.dropFiles('text'))
			.on('change:files', evt => {
				console.log(this.files);
			});
	}
}
