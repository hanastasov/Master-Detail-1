import { Route } from '@vaadin/router';
import './list-child/list-child';

export const routes: Route[] = [
  { path: 'list-child/:orderId', component: 'app-list-child', name: 'List Child' },
  { path: 'list-child', redirect: '/list-details/ALFKI/list-child/10248', name: 'List Child' },
];
