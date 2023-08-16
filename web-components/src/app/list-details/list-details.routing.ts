import { Route } from '@vaadin/router';
import './list-child/list-child';

export const routes: Route[] = [
  { path: 'list-child/:name', component: 'app-list-child', name: 'List Child' },
  { path: 'list-child', redirect: 'list-child/John', name: 'List Child' },
];
