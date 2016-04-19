import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './views/App';
import ProgressDisplay from './views/main/containers/ProgressDisplay';
import Admin from './views/admin/containers/admin';
import FormContainer from './views/admin/containers/FormContainer';
import ProjectTable from './views/admin/containers/ProjectTable';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProgressDisplay} />
    <Route component={Admin} >
      <Route path="/projects" component={ProjectTable} >
        <Route path="/projects/:id" component={FormContainer} />
      </Route>
    </Route>
  </Route>
);
