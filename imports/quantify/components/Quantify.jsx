import React from 'react';
import { Match } from 'react-router';
import Projects from './Projects';
import Home from './Home';

const Quantify = ({ pathname, pattern }) => (
  <div>
    <h1>Quantify</h1>
    <hr />

    {/* Projects */}
    <Match pattern={`${pathname}/projects`} component={Projects} />
    {/* Home */}
    <Match exactly pattern={pathname} component={Home} />
  </div>
)

export default Quantify;
