import React from 'react';
import Page from '../../components/Page';
import { Link } from 'react-router-dom';

export default () => (
  <Page title="Oops, sorry, please try a" noCrawl id="oops">
    <h1>Page can't be found...</h1>
    <Link to="/">Go home?</Link>
  </Page>
);
