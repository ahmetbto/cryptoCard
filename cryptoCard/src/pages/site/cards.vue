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
                v-for="(item, id) in getCardList"
                :key="id"
                class="col-md-3 float-left"
              >
                <div class="card2-box">
                  <p>{{ item.CardName }}</p>
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
      getCardList: [],
    };
  },

  methods: {
    cardDetails(id) {
      this.$router.push(`/card-details/${id}/`);
    },
  },
  created() {
    this.getCardList = this.$store.state.cardList;
  },
};
</script>

<style scoped>
.card2-box {
  width: 97%;
  margin: 5px;
  margin-right: 10px !important;
  box-shadow: 0 1px 5px;
  overflow: hidden;
  height: 210px !important;
}
.card-img {
  object-fit: contain;
  padding: 0px;
  width: 100%;
  height: 100% !important;
  transition: all 0.4s;
  cursor: pointer;
}
.card-img:hover {
  padding: 5px;
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
