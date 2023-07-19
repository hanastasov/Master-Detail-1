import { Route } from '@vaadin/router';
import './list-child/list-child';

export const routes: Route[] = [
  {
    path: 'list-child', component: 'app-list-child', name: 'List Child', action: (context) => {
      context.params = { name: "John", id: "ANTON" }
    }
  },
];
