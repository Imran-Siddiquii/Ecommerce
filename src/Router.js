import { lazy } from "react";

export const router = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./Home")),
  },
  {
    path: "/about",
    exact: true,
    component: lazy(() => import("./About")),
  },
  {
    path: "/contact",
    exact: true,
    component: lazy(() => import("./Contact")),
  },
  {
    path: "/single-product:id",
    exact: true,
    component: lazy(() => import("./SingleProduct")),
  },
  {
    path: "/cart",
    exact: true,
    component: lazy(() => import("./Cart")),
  },
  {
    path: "*",
    exact: true,
    component: lazy(() => import("./Error")),
  },
  {
    path: "/products",
    exact: true,
    component: lazy(() => import("./Products")),
  },
];
