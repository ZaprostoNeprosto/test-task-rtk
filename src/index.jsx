import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from "react-redux";
import {setupStore} from "./app/providers/StoreProvider/store/store";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

