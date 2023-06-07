import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import i18n from './i18n';
import './index.css';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
