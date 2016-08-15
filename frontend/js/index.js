import 'matreshka-router';
import './addons';
import '../pcss/style.css';

import Main from './main';

module.exports = new Main();

if (module.hot) {
    module.hot.accept();
}
