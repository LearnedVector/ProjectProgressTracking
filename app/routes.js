import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './views/App';
import ProgressDisplay from './views/main/containers/ProgressDisplay';
import Admin from './views/admin/containers/admin';
import ProjectForm from './views/admin/containers/ProjectForm';
import FormContainer from './views/admin/containers/FormContainer';
import ProjectTable from './views/admin/containers/ProjectTable';
import EditProject from './views/admin/containers/EditProject';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProgressDisplay} />
    <Route component={Admin} >
      <Route path="/projects" component={ProjectTable} >
        <Route path="/projects/addnew" component={ProjectForm} />
        <Route path="/projects/:id" component={FormContainer} >
          <Route path="/projects/:id/edit" component={EditProject} />
        </Route>
      </Route>
    </Route>
  </Route>
);
