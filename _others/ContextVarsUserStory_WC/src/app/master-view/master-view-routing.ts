import { Route } from '@vaadin/router';
import './child-view/child-view';

export const routes: Route[] = [
  { path: 'child-view', component: 'app-child-view', name: 'Child View' }
];
