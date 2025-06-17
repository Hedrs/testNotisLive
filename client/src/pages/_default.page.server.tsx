import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import type { PageContextServer } from 'vike/types';
import App from '../App';
import { renderToString } from 'react-dom/server';

type MyPageContext = PageContextServer & {
  Page: React.FC;
  pageProps: Record<string, unknown>;
};

export function prerender() {
  return [
    {
      url: '/',
    },
  ];
}

export async function onRenderHtml(pageContext: MyPageContext) {
  const { Page, pageProps } = pageContext;

  console.log('onRenderHtml running for ', pageContext.urlOriginal);

  const pageHtml = renderToString(
    <App>
      <Page {...pageProps} />
    </App>
  );

  const documentHtml = escapeInject`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Notis Live</title>
        </head>
        <body>
          <div id="react-root" >${dangerouslySkipEscape(pageHtml)}</div>
        </body>
      </html>
    `;

  return { documentHtml, pageContext: {} };
}
