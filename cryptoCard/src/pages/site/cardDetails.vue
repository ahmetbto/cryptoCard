<template>
  <div>
    <div @click="previewHidden" v-if="isPreview" id="preview">
      <div class="">
        <img class="" :src="previewContent" />
      </div>
    </div>
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
            <p @mousemove="fontSliderPassive" class="choose">Edit your card</p>

            <br />

            <div class="edit-box">
              <div class="edit-header">
                <div v-if="slider1" class="font-slider1">
                  <q-slider
                    @change="editFontSize1Event"
                    v-model="slide1Value"
                    :min="0"
                    :max="40"
                    :step="1"
                  />
                </div>

                <div v-if="slider2" class="font-slider2">
                  <q-slider
                    @change="editFontSize2Event"
                    v-model="slide2Value"
                    :min="0"
                    :max="40"
                    :step="1"
                  />
                </div>

                <div class="color-palet palet">
                  <div v-for="n in 21" :key="n">
                    <div
                      class="color-box"
                      :style="`background-color:#${colors[n]};`"
                      @click="getClr(colors[n])"
                    ></div>
                  </div>
                </div>

                <div class="edit-fontSize">
                  <span class="fontSize1Text"
                    ><i @click="fontSliderActive1" class="fas fa-font icon"></i
                  ></span>
                  <span class="fontSize2Text"
                    ><i @click="fontSliderActive2" class="icon fas fa-font"></i
                  ></span>
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
              </div>

              <div
                id="content"
                @mousemove="fontSliderPassive"
                class="img"
                :style="color"
              >
                <div class="text" :style="textLocation">
                  <p :style="editFontSize1" class="text1">{{ text1 }}</p>
                  <p :style="editFontSize2" class="text2">{{ text2 }}</p>
                </div>

                <img class="img-content" :src="getCardDetails.imgUrl" />
              </div>
              <div class="edit-footer">
                <q-btn
                  @click="previewShow"
                  class="btn"
                  color="deep-orange"
                  label="Preview Card"
                />
                <div>
                  <q-btn
                    @click="makeJPG"
                    class="btn"
                    color="primary"
                    label="Save JPG"
                  />

                  <q-btn
                    @click="makePDF"
                    class="btn"
                    color="primary"
                    label="Save PDF"
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
    <br />
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  setup() {
    return {};
  },

  data() {
    return {
      slide1Value: "",
      slide2Value: "",
      previewContent: "",
      isPreview: false,
      slider1: false,
      slider2: false,
      color1: "FF008E",
      color2: "0F0E0E",

      editFontSize1: "font-size:25px;color:#FF008E",
      editFontSize2: "font-size:" + this.slide2Value + "px",

      hValue: 50,
      vValue: 50,
      textLocation: "",
      getCardList: [],
      cardID: this.$route.params.id,
      getCardDetails: {},
      color: "background-color:white",
      text1: "Welcome back! It looks like you were ",
      text2: "Welcome back! It looks like you were ",
      colors: {
        1: "231f20",
        2: "ed1c24",
        3: "fff200",
        4: "00a651",
        5: "00aeef",
        6: "2e3192",
        7: "ec008c",
        8: "be1e2d",
        9: "ef4136",
        10: "ec008c",
        11: "f15a29",
        12: "f7941d",
        13: "009444",
        14: "231f20",
        15: "FFFFFF",
        16: "9e1f63",
        17: "c2b59b",
        18: "c49a6c",
      },
    };
  },
  watch: {},
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
    previewHidden() {
      this.isPreview = false;
    },
    previewShow() {
      const section = document.getElementById("content");
      window.html2canvas = html2canvas;
      var test = this;
      html2canvas(section).then(function (canvas) {
        const uri = canvas.toDataURL();
        test.previewContent = uri;
        console.log(uri);
        test.isPreview = true;
      });
    },
    makePDF() {
      window.html2canvas = html2canvas;
      var doc = new jsPDF({
        orientation: "l",
        unit: "mm",
        format: [900, 600],
      });
      doc.html(document.querySelector("#content"), {
        callback: function (pdf) {
          pdf.save("mypdf.pdf");
        },
      });
    },

    makeJPG() {
      const section = document.getElementById("content");
      console.log("Result", section);
      window.html2canvas = html2canvas;
      html2canvas(section).then(function (canvas) {
        // this.simulateDownloadImageClick(canvas.toDataURL(), "file-name.png");
        var link = document.createElement("a");
        const uri = canvas.toDataURL();
        const fileName = "file-name.jpg";
        link.click();

        // console.log("uri", uri);
        link.href = uri;
        link.download = fileName;
        link.click();
      });
    },

    getClr(color_value) {
      if (this.slider1 == true) {
        this.color1 = color_value;
        this.editFontSize1 =
          "font-size:" +
          this.slide1Value +
          "px" +
          ";" +
          "color:" +
          "#" +
          color_value;
      } else if (this.slider2 == true) {
        this.color2 = color_value;
        this.editFontSize2 =
          "font-size:" +
          this.slide2Value +
          "px" +
          ";" +
          "color:" +
          "#" +
          color_value;
      } else {
        this.color = `background-color:#${color_value}`;
      }
    },
    fontSliderActive1() {
      this.slider1 = true;
      this.slider2 = false;
    },
    fontSliderActive2() {
      this.slider2 = true;
      this.slider1 = false;
    },
    fontSliderPassive() {
      this.slider1 = false;
      this.slider2 = false;
    },

    editFontSize1Event() {
      this.editFontSize1 =
        "font-size:" +
        this.slide1Value +
        "px" +
        ";" +
        "color:" +
        "#" +
        this.color1;
    },

    editFontSize2Event() {
      this.editFontSize2 = "font-size:" + this.slide2Value + "px";
    },

    h_left() {
      this.hValue = this.hValue - 2;
      this.textLocation =
        "left:" + this.hValue + "%;" + "top:" + this.vValue + "%";
    },
    h_right() {
      this.hValue = this.hValue + 2;
      this.textLocation =
        "left:" + this.hValue + "%;" + "top:" + this.vValue + "%";
    },
    v_up() {
      this.vValue = this.vValue + 2;
      this.textLocation =
        "top:" + this.vValue + "%;" + "left:" + this.hValue + "%";
    },
    v_down() {
      this.vValue = this.vValue - 2;
      this.textLocation =
        "top:" + this.vValue + "%;" + "left:" + this.hValue + "%";
    },
  },
};
</script>

<style scoped>
#preview {
  position: absolute;
  left: 0;
  top: 25%;
  width: 100%;
  height: 100vh;
  background-color: rgba(44, 40, 40, 0.8);
  z-index: 2;
}
#preview div {
  border: 2px solid white;
  position: absolute;
  padding: 5px;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
}
#preview div img {
  width: 800px;
  box-shadow: 1px 1px 1px #888888;
}

.edit-fontSize {
  padding: 10px;
}
.fontSize1Text {
  width: 30px !important;
  display: block;
  margin-bottom: 5px;
  padding: 2px 5px;
}
.fontSize2Text {
  width: 30px !important;
  display: block;
  padding: 2px 5px;
}
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
  font-family: "Dancing Script", cursive;
  margin-top: 3px;
  padding: 2px;
  text-align: center;
  /* font-size: 25px; */
}
.text2 {
  margin-top: 3px;
  padding: 2px;
  text-align: center;
  /* font-size: 16px; */
}

.palet {
  border-right: 1px solid rgba(194, 191, 191, 0.6);
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
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.font-slider1 {
  background-color: rgb(243, 229, 229);
  position: absolute;
  display: block;
  padding-top: 7px;
  height: 40px;
  width: 30%;
  top: 0;
  left: 200px;
  border-radius: 18px;
  z-index: 553;
  border: 1px solid rgba(224, 224, 224, 0.6);
}

.font-slider2 {
  background-color: rgb(243, 229, 229);
  position: absolute;
  display: block;
  padding-top: 7px;
  height: 40px;
  width: 30%;
  top: 33px;
  left: 200px;
  border-radius: 18px;
  z-index: 553;
  border: 1px solid rgba(224, 224, 224, 0.6);
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
  padding-top: 10px;
}
.img {
  padding: 25px;
  position: relative;
  z-index: 1;
}
.img img {
  width: 100%;
}
</style>
