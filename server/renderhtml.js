import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';

const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="app-content"></div>', `<div id="app-content">${body}</div>`);
  return body;
};

const html = (htmlData, helmet) => {
  return prepHTML(htmlData, {
    html: helmet.htmlAttributes.toString(),
    head:
      helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
    body: {}
  });
};

const routeMarkup = (store, props) =>
  renderToString(
    <Provider store={store}>
      <RouterContext {...props} />
    </Provider>
  );

export default (store, props, htmlData) => {
  const helmet = Helmet.renderStatic();
  const page = html(htmlData, helmet);
  page.body = routeMarkup(store, props);
  return page;
};
