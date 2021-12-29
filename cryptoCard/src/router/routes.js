const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/site/Index.vue") },
      { path: "/cards", component: () => import("src/pages/site/cards.vue") },
      {
        path: "/card-details",
        component: () => import("src/pages/site/cardDetails.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/site/Error404.vue"),
  },
];

export default routes;
