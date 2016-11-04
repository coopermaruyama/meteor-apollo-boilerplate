import React from 'react';
import { Match } from 'react-router';
import Home from './Home';

import _App from '/imports/ui/App';

const App = ({ pathname, pattern }) => (
  <div>
    <h1>My Cool App</h1>

    <Match exactly pattern={pathname} component={_App} />
  </div>
)

export default App;
