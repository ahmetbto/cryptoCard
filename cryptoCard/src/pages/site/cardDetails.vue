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
            <p class="choose">Edit your card</p>

            <br />

            <div class="edit-box">
              <div class="edit-header">
                <div class="color-palet palet">
                  <div class="color-box clr1" @click="getClr1"></div>
                  <div class="color-box clr2" @click="getClr2"></div>
                  <div class="color-box clr3" @click="getClr3"></div>
                  <div class="color-box clr4" @click="getClr4"></div>
                  <div class="color-box clr5" @click="getClr5"></div>
                  <div class="color-box clr6" @click="getClr6"></div>
                  <div class="color-box clr7" @click="getClr7"></div>
                  <div class="color-box clr8" @click="getClr8"></div>
                  <div class="color-box clr9" @click="getClr9"></div>
                  <div class="color-box clr10" @click="getClr10"></div>
                  <div class="color-box clr11" @click="getClr11"></div>
                  <div class="color-box clr12" @click="getClr12"></div>
                  <div class="color-box clr13" @click="getClr13"></div>
                  <div class="color-box clr14" @click="getClr14"></div>
                  <div class="color-box clr15" @click="getClr15"></div>
                  <div class="color-box clr16" @click="getClr16"></div>
                  <div class="color-box clr17" @click="getClr17"></div>
                  <div class="color-box clr18" @click="getClr18"></div>
                  <div class="color-box clr19" @click="getClr19"></div>
                  <div class="color-box clr20" @click="getClr20"></div>
                  <div class="color-box clr21" @click="getClr21"></div>
                </div>

                <div class="edit-text">
                  <input type="text" class="edit-text1" v-model="text1" />
                  <input type="text" class="edit-text2" v-model="text2" />
                </div>

                <div class="edit-location">
                  <div class="horizontal">
                    <p>YATAY</p>
                    <div>
                      <i @click="h_left" class="icon fas fa-chevron-left"></i>
                      <i @click="h_right" class="icon fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div class="horizontal">
                    <p>DİKEY</p>
                    <div>
                      <i @click="v_down" class="icon fas fa-chevron-left"></i>
                      <i @click="v_up" class="icon fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <div class="font-palet palet"></div>
              </div>

              <div class="img" :style="color">
                <div class="text" :style="textLocation">
                  <p class="text1">{{ text1 }}</p>
                  <p class="text2">{{ text2 }}</p>
                </div>

                <img class="img-content" :src="getCardDetails.imgUrl" />
              </div>
              <div class="edit-footer">
                <q-btn class="btn" color="deep-orange" label="Preview Card" />
                <div>
                  <q-btn class="btn" color="secondary" label="Sava JPG" />
                  <q-btn class="btn" color="primary" label="Save PDF" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hValue: 50,
      vValue: 50,
      textLocation: "",
      getCardList: [],
      cardID: this.$route.params.id,
      getCardDetails: {},
      color: "background-color:white",
      text1: "Welcome back! It looks like you were ",
      text2: "Welcome back! It looks like you were ",
    };
  },
  created() {
    this.getCardList = this.$store.state.cardList;

    const founData = this.getCardList.find((item, index) => {
      if (item.id === this.cardID) {
        return true;
      }
    });
    this.getCardDetails = founData;
  },
  computed: {},
  watch: {
    $route(to, from) {
      this.cardID = to.params.id;
    },
  },
  methods: {
    h_left() {
      this.hValue = this.hValue - 2;
      this.textLocation = "left:" + this.hValue + "%";
    },
    h_right() {
      this.hValue = this.hValue + 2;
      this.textLocation = "left:" + this.hValue + "%";
    },
    v_up() {
      this.vValue = this.vValue + 2;
      this.textLocation = "top:" + this.vValue + "%";
    },
    v_down() {
      this.vValue = this.vValue - 2;
      this.textLocation = "top:" + this.vValue + "%";
    },

    getClr1() {
      this.color = "background-color:#231f20";
    },
    getClr2() {
      this.color = "background-color:#ed1c24";
    },
    getClr3() {
      this.color = "background-color:#fff200";
    },
    getClr4() {
      this.color = "background-color:#00a651";
    },

    getClr5() {
      this.color = "background-color:#00aeef";
    },
    getClr6() {
      this.color = "background-color:#2e3192";
    },
    getClr7() {
      this.color = "background-color:#ec008c";
    },
    getClr8() {
      this.color = "background-color:#be1e2d";
    },
    getClr9() {
      this.color = "background-color:#ef4136";
    },
    getClr10() {
      this.color = "background-color:#ec008c";
    },
    getClr11() {
      this.color = "background-color:#f15a29";
    },
    getClr12() {
      this.color = "background-color:#f7941d";
    },
    getClr13() {
      this.color = "background-color:#009444";
    },
    getClr14() {
      this.color = "background-color:#231f20";
    },
    getClr15() {
      this.color = "background-color:#FFFFFF";
    },
    getClr16() {
      this.color = "background-color:#9e1f63";
    },
    getClr17() {
      this.color = "background-color:#c2b59b";
    },
    getClr18() {
      this.color = "background-color:#c49a6c";
    },
    getClr19() {
      this.color = "background-color:#808285";
    },
    getClr20() {
      this.color = "background-color:#bcbec0";
    },
    getClr21() {
      this.color = "background-color:#e6e7e8";
    },
  },
};
</script>

<style scoped>
.img-content {
  border: 1px solid gray;
}
.edit-location {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
}
.horizontal {
  background-color: rgb(250, 248, 248);
  display: flex;
  width: 80px;
  height: 30px;
  padding: 6px 5px;
  flex-direction: row;
}
.horizontal div {
  display: flex;
  flex-direction: row;
  margin-left: 5px;
}

.icon {
  padding: 3px;
  margin-left: 3px;
  width: 20px;
  height: 20px;
}
.icon:hover {
  background-color: grey;
  color: white;
  cursor: pointer;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 100px;
  z-index: 2;
  padding: 10px;
}
.text1 {
  margin-top: 3px;

  padding: 2px;
  text-align: center;
  font-size: 20px;
}
.text2 {
  margin-top: 3px;
  padding: 2px;
  text-align: center;
  font-size: 14px;
}

.palet {
  border-right: 1px solid rgba(194, 191, 191, 0.6);
}
.clr1 {
  background-color: #231f20;
}
.clr2 {
  background-color: #ed1c24;
}
.clr3 {
  background-color: #fff200;
}
.clr4 {
  background-color: #00a651;
}
.clr5 {
  background-color: #00aeef;
}
.clr6 {
  background-color: #2e3192;
}
.clr7 {
  background-color: #ec008c;
}
.clr8 {
  background-color: #be1e2d;
}
.clr9 {
  background-color: #ef4136;
}
.clr10 {
  background-color: #ec008c;
}
.clr11 {
  background-color: #f15a29;
}
.clr12 {
  background-color: #f7941d;
}
.clr13 {
  background-color: #009444;
}
.clr14 {
  background-color: #00a79d;
}
.clr15 {
  background-color: #ffffff;
}
.clr16 {
  background-color: #9e1f63;
}
.clr17 {
  background-color: #c2b59b;
}

.clr18 {
  background-color: #c49a6c;
}
.clr19 {
  background-color: #808285;
}
.clr20 {
  background-color: #bcbec0;
}
.clr21 {
  background-color: #e6e7e8;
}
.color-palet {
  width: 220px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
}
.color-box {
  width: 20px;
  height: 20px;

  margin-right: 2px;
  margin-top: 2px;
}
.container {
  padding-left: 20%;
  padding-right: 20%;
}
.edit-box {
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.edit-header {
  width: 100%;
  height: 80px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.edit-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.edit-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(207, 201, 201, 0.4);
}
.edit-text1 {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  padding: 4px;
  border: none;
  text-align: center;
  font-size: 20px;
  padding-left: 10px;
  border-radius: 1px;
}
.edit-text2 {
  border: none;
  margin-top: 5px;
  padding: 4px;
  text-align: center;
  padding-left: 10px;
  font-size: 16px;
  width: 98%;
  border-radius: 1px;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  margin-right: 7px;
}
.choose {
  text-align: center;
  display: block;
  width: 100%;
  font-size: 25px;
  padding: 20px;
}
.header {
  background-color: #e9e7e0;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 7px 10px;
}
.header p {
  font-size: 25px;
}
.img {
  padding: 55px;
  position: relative;
  z-index: 1;
}
.img img {
  width: 100%;
}
</style>
