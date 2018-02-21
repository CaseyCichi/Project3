import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import createServerStore from './store';
import App from '../src/app';

const prepHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return data;
};

const html = (htmlData, routeMarkup) => {
  const helmet = Helmet.renderStatic();
  return prepHTML(htmlData, {
    html: helmet.htmlAttributes.toString(),
    head:
      helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
    body: routeMarkup
  });
};

const routeMarkup = (store, history) =>
  renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>
  );

export default (path, htmlData) => {
  const { store, history } = createServerStore(path);
  return html(htmlData, routeMarkup(store, history));
};
