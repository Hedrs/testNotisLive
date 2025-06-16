import { App } from '../App';
import React from 'react';
import ReactDOM from 'react-dom/client';

export function render(pageContext: any) {
  console.log('RENDER HOOK WORKING');
  const { Page, pageProps } = pageContext;
  const container = document.getElementById('react-root')!;
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App>
        <Page {...pageProps} />
      </App>
    </React.StrictMode>
  );
}

export default {};
