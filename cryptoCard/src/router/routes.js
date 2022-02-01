import store from "../store/index";

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
      {
        path: "/card-details/:id",
        component: () => import("src/pages/site/cardDetails.vue"),
      },
    ],
  },

  //Control Panel Layouts
  {
    path: "/controlPanel",
    component: () => import("../layouts/controlPanelLayout.vue"),

    beforeEnter(to, from, next) {
      var token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "/controlPanel",
        component: () => import("src/pages/controlPanel/home.vue"),
      },

      {
        path: "/controlPanel/addCard",
        component: () => import("src/pages/controlPanel/addCard.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("src/pages/site/login.vue"),
  },

  {
    path: "/register",
    component: () => import("src/pages/site/register.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/site/Error404.vue"),
  },
];

export default routes;
