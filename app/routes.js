import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/App';
import ProgressDisplay from './views/main/containers/ProgressDisplay';
import Admin from './views/admin/containers/admin';
import Addnew from './views/admin/containers/Addnew';
import ProjectTable from './views/admin/components/ProjectTable';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProgressDisplay} />
    <Route path="/admin" component={Admin} >
      <IndexRoute component={ProjectTable} />
      <Route path="/admin/addnew" component={Addnew} />
    </Route>
  </Route>
);
