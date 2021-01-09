import { component } from 'riot';
import '@riotjs/hot-reload';

import App from './app.riot';
import registerGlobalComponents from './register-global-components';

// register
registerGlobalComponents();

// mount the root tag
component(App)(document.getElementById('root'));
