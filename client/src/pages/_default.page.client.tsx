// import { App } from '../App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

const AppLazy = React.lazy(() => import('../App'));

export function render(pageContext: any) {
  console.log('RENDER HOOK WORKING');
  const { pageProps } = pageContext;
  const LazyPage = React.lazy(() => Promise.resolve({ default: pageContext.Page }));
  const container = document.getElementById('react-root')!;
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <HashRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
          <AppLazy>
            <LazyPage {...pageProps} />
          </AppLazy>
        </Suspense>
      </HashRouter>
    </React.StrictMode>
  );
}

export default {};
