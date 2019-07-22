import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './pages';
import * as serviceWorker from './serviceWorker';
import './styles/common.style.scss';

import configureStore from './store'
const store = configureStore({});

const render = (Component) => {
	return (
		<Provider store={store}>
			<Component />
		</Provider>
	)
}

ReactDOM.render(render(App), document.getElementById('root'));

serviceWorker.unregister();
