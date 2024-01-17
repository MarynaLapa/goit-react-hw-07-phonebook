import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
  
);
