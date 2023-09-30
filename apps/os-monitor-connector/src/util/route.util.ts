import { Router } from "express";

// todo: reduce basePath and path into only one property.
interface Route {
  basePath: string;
  path: string;
  fullPath?: string;
  name: string;
  caption: string;
  description: string;
}

let routes: Route[] = [];

/**
 * Utility function for registering routes.
 * Routes registered via this function are available to the capability route.
 *
 * @see capability.route.ts
 *
 * @param route {Route} the route to add.
 * @param router {Router} the router to add the route.
 * @param fn {any} the function to call
 */
export function registerRoute(route: Route, router: Router, fn: any) {
  if (route.path.startsWith("/")) {
    throw new Error(`(${route.path}) => route.path should not start with '/'.`);
  }

  const port = process.env.PORT ?? 3000;
  let fullPath =
    route.path === "" ? route.basePath : `${route.basePath}${route.basePath}`;
  fullPath = `http://localhost:${port}${fullPath}`;
  routes.push({
    ...route,
    fullPath,
  });
  return router;
}

export function getRegisteredRoutes() {
  return routes;
}
