import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {},

    state: {
      cardList: [
        {
          id: "D1984654F",
          cardName: "CardName",
          imgUrl: "/cards/2.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "W1984E6D54",
          cardName: "CardName",
          imgUrl: "/cards/3.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "P19846FSD54",
          cardName: "CardName",
          imgUrl: "/cards/4.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "1984FGH654",
          cardName: "CardName",
          imgUrl: "/cards/5.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "T984GTR654",
          cardName: "CardName",
          imgUrl: "/cards/6.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "D98465T4",
          cardName: "CardName",
          imgUrl: "/cards/7.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19HT84654",
          cardName: "CardName",
          imgUrl: "/cards/8.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19R46D5G4",
          cardName: "CardName",
          imgUrl: "/cards/9.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19D8G4654",
          cardName: "CardName",
          imgUrl: "/cards/10.png",
          price: "free",
          with: "800",
          height: "600",
        },
      ],
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
