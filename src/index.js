import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import * as halfmoon from 'halfmoon';
import { ToastContainer } from 'react-toastify';
import 'unfetch/polyfill';

import 'halfmoon/css/halfmoon-variables.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';

import './util/array-sort-by/array-sort-by';
import Root from './features/Root/Root';
import reportWebVitals from './reportWebVitals';
import fetcher from './util/fetcher/fetcher';
import { ProviderAuth } from './hooks/auth/use-auth';

halfmoon.toggleDarkMode();

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
      }}
    >
      <ProviderAuth>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ProviderAuth>
    </SWRConfig>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnHover
      pauseOnFocusLoss
      draggable={false}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
