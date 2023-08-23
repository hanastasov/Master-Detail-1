import { Router } from "@vaadin/router";

let router: Router;

export const getRouter = () => router;

export const makeRouter = function (outlet: any, routes: any) {
  router = new Router(outlet);
  router.setRoutes(routes);
  return router;
}
