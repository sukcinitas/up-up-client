import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';
import './fontawesome';
import App from './components/App/App';
import store from './store';
import { fetchUser } from './store/reducers/usersSlice';
axios.defaults.withCredentials = true;

if (!window.location.href.includes('localhost')) {
  axios.defaults.baseURL = process?.env?.REACT_APP_ORIGIN;
}

const renderApp = async () => {
  await store.dispatch(fetchUser());
  const root = createRoot(document.getElementById('root'));
  root.render(
  <Provider store={store}>
    <App />
  </Provider>);
};

(async () => renderApp())();
