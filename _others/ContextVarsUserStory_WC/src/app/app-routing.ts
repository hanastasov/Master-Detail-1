import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './master-view/master-view';
import { routes as masterViewRoute } from './master-view/master-view-routing';
import './user-story2nd-implementation/user-story2nd-implementation';

export const routes: Route[] = [
  { path: '', component: 'app-master-view', name: 'Master View', children: masterViewRoute },
  { path: 'master-view', component: 'app-master-view', name: 'Master View', children: masterViewRoute },
  { path: 'user-story2nd-implementation', component: 'app-user-story2nd-implementation', name: 'User Story2nd implementation' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
