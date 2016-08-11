import 'matreshka-router';
import './matreshka-addons';
import './editor-init';
import '../pcss/style.pcss';

import Main from './main';

module.exports = new Main();

if (module.hot) {
    module.hot.accept();
}
