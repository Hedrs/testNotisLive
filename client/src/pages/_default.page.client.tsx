// import { App } from '../App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const AppLazy = React.lazy(() => import('../App'));

export function render(pageContext: any) {
  console.log('RENDER HOOK WORKING');
  const { pageProps, exports } = pageContext;
  const LazyPage = React.lazy(() => import(exports.pageFilePath));
  const container = document.getElementById('react-root')!;
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Suspense fallback={<div>Загрузка...</div>}>
        <AppLazy>
          <LazyPage {...pageProps} />
        </AppLazy>
      </Suspense>
    </React.StrictMode>
  );
}

export default {};
