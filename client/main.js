import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import renderRoutes from '/imports/ui/routes';

const client = new ApolloClient(meteorClientConfig());

const Root = () => (
  <ApolloProvider client={client}>
    {renderRoutes()}
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<Root />, document.getElementById('app'));
});
