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
                v-for="(item, id) in CardList"
                :key="id"
                class="col-md-3 float-left"
              >
                <div class="card2-box">
                  <img
                    @click="cardDetails(item.uid)"
                    class="card-img"
                    :src="item.image"
                  />
                  <p @click="cardDetails(item.uid)" class="card-name">
                    {{ item.cardName }}
                  </p>
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
import axios from "axios";
export default {
  data() {
    return {
      CardList: {},
    };
  },

  methods: {
    getCardList() {
      axios
        .get("https://cards-a348d-default-rtdb.firebaseio.com/cards.json")
        .then((response) => {
          console.log(response.data);
          this.CardList = response.data;
          // this.userList = Object.values(this.userList);
        });
    },

    cardDetails(id) {
      this.$router.push(`/card-details/${id}/`);
    },
  },
  created() {
    // this.getCardList = this.$store.state.cardList;
    this.getCardList();
  },
};
</script>

<style scoped>
.card2-box {
  position: relative;
  width: 99%;
  margin: 1px;
  padding: 5px;
  margin-right: 10px !important;
  box-shadow: 0 1px 5px;
  overflow: hidden;
  height: 210px !important;
}
.card-img {
  object-fit: contain;
  position: relative;
  padding: 0px;
  width: 100%;
  z-index: 1;
  height: 100% !important;
  transition: all 0.4s;
  cursor: pointer;
}
.card-name {
  z-index: 425;
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
  width: 90%;
  text-align: center;
  background-color: yellow;
  transform: translate(-50%);
  transition: 0.6s;
}
.card-img:hover {
  padding: 5px;
}
.card2-box:hover .card-name {
  padding: 5px 2px;
  cursor: pointer;
  bottom: 10px;
  height: 35px;
  font-size: 18px;
  background-color: rgba(207, 56, 10, 0.8);
  color: aliceblue;
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
