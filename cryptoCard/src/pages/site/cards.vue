<template>
  <div>
    <div class="q-pa">
      <!--top section -->
      <div class="bg">
        <div class="header">
          <p>
            Welcome back! It looks like you were making some place cards
            earlier. Would you like to go edit those cards?
          </p>
        </div>
        <div class="container">
          <div class="row">
            <p class="choose">Choose a Template</p>

            <br />
            <div class="row">
              <div
                v-for="(item, id) in cardList"
                :key="id"
                class="col-md-4 float-left"
              >
                <div class="card-box">
                  <img
                    @click="cardDetails(item.id)"
                    class="card-img"
                    :src="item.imgUrl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          id: "D1984654F",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/2.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "W1984E6D54",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/3.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "P19846FSD54",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/4.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "1984FGH654",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/5.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "T984GTR654",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/2.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "D98465T4",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/3.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19HT84654",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/4.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19R46D5G4",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/5.png",
          price: "free",
          with: "800",
          height: "600",
        },
        {
          id: "19D8G4654",
          cardName: "CardName",
          imgUrl: "http://192.168.1.102:8080/cards/4.png",
          price: "free",
          with: "800",
          height: "600",
        },
      ],
    };
  },

  created() {},
  methods: {
    cardDetails(id) {
      this.$router.push(`/card-details/${id}/`);
    },
  },
};
</script>

<style scoped>
.card-box {
  width: 100%;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 1px 5px;
  overflow: hidden;
  height: 220px;
}
.card-img {
  object-fit: cover;
  padding: 10px;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
}
.card-img:hover {
  padding: 15px;
}
.choose {
  text-align: center;
  display: block;
  width: 100%;
  font-size: 25px;
  padding: 20px;
}
.header {
  background-color: #ffdd57;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
}
.header p {
  font-size: 25px;
}
@media screen and (max-width: 1920px) {
  .card-box {
    height: 280px;
  }
}

@media screen and (max-width: 1179px) {
  .card-box {
    height: 220px;
  }
}
</style>
