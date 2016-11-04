import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

/**
 * MODULES
 */
import Home from '/imports/app/components/Home';
import Quantify from '/imports/quantify/components/Quantify';
import NotFound from '/imports/app/components/NotFound';

export default () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/quantify" component={Quantify} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
)
