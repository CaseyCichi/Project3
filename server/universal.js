import path from 'path';
import fs from 'fs';
import { match, RouterContext } from 'react-router';

import renderhtml from './renderhtml';
import { sessionId } from './config/secrets';
import createHistory from 'history/createMemoryHistory';
import initStore from '../src/utils/initStore';
import fetchDataForRoute from '../src/utils/fetchData';
import axios from 'axios';
import createRoutes from '../src/routes';
import { REQ_TYPE } from '../src/actiontypes';

export default function render(req, res) {
  const authenticated = req.isAuthenticated();
  const filePath = path.resolve(__dirname, '../public/index.html');
  const history = createHistory();
  const store = initStore(
    {
      user: {
        authenticated,
        isWaiting: false,
        message: '',
        isLogin: true
      }
    },
    history
  );
  const routes = createRoutes(store);
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (req.cookies[sessionId]) {
      axios.defaults.headers.common.Cookie =
        sessionId + '=' + req.cookies[sessionId];
    }
    if (err) {
      res.status(500).json(err);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      store.dispatch({ type: REQ_TYPE.CREATE_REQUEST });
      fetchDataForRoute(props)
        .then(data => {
          store.dispatch({ type: REQ_TYPE.REQUEST_SUCCESS, data });
          fs.readFile(filePath, 'utf8', (err, htmlData) => {
            if (err) {
              console.error('Read error', err);
              return res.status(404).end();
            }
            const html = renderhtml(req.path, htmlData, props);
            res.status(200).send(html);
          });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json(err);
        });
    } else {
      res.sendStatus(404);
    }
  });
}
