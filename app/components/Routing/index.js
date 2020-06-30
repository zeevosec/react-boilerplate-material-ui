/**
 *
 * Routing
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Site from 'components/Site';
import App from 'components/Site';

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/app" component={FeaturePage} />
      <Route path="/preferences" component={PreferencesPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

Routing.propTypes = {};

export default Routing;
