import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/store/configureStore';

const rootEl = document.getElementById('root');

const store = configureStore()

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter basename="/">
          <App />
      </HashRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

  render();


registerServiceWorker();