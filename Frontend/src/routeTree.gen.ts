/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IscrizioneLazyImport = createFileRoute('/iscrizione')()
const AdminLazyImport = createFileRoute('/admin')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IscrizioneLazyRoute = IscrizioneLazyImport.update({
  path: '/iscrizione',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/iscrizione.lazy').then((d) => d.Route))

const AdminLazyRoute = AdminLazyImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/admin.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminLazyImport
      parentRoute: typeof rootRoute
    }
    '/iscrizione': {
      id: '/iscrizione'
      path: '/iscrizione'
      fullPath: '/iscrizione'
      preLoaderRoute: typeof IscrizioneLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AdminLazyRoute,
  IscrizioneLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin",
        "/iscrizione"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/admin": {
      "filePath": "admin.lazy.tsx"
    },
    "/iscrizione": {
      "filePath": "iscrizione.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */