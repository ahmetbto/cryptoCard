<template>
  <div>
    <q-form class="q-gutter-md">
      <div class="container">
        <p class="title">Card Add Form</p>
        <div class="row">
          <div class="col-md-6 float-left">
            <q-input
              @input="$v.input.$touch()"
              class="text"
              filled
              v-model="cardInfo.cardName"
              label="Card name *"
            />
            <p>{{ $v }}</p>

            <q-input
              class="text"
              filled
              v-model="cardInfo.title1"
              label="title1 *"
            />

            <q-input
              class="text"
              filled
              v-model="cardInfo.title2"
              label="title1 *"
            />
          </div>
          <div class="col-md-6 float-left card-image">
            <img class="" :src="cardInfo.image" />

            <input
              class="btn"
              ref="imageInput"
              @change="onImagePicked"
              type="file"
              style="display: none"
              accept="image/*"
            />
            <q-btn
              class="btn"
              v-if="btnGoster"
              color="red-13"
              label="Resim Seç"
              @click.prevent="chooseImage"
            />
            <q-btn
              class="btn"
              v-if="resimGoster"
              color="grey-13"
              label="Resim Sil"
              @click.prevent="removeImage"
            />
          </div>
        </div>
      </div>
    </q-form>

    <div class="container">
      <div class="q-pa-md">
        <p v-if="successMessage" class="successMessage">
          Your Card registered successfully
        </p>
        <q-btn
          class="saveBtn q-ma-sm"
          label="Kaydet"
          @click="savePackages"
          color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "../../boot/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uid } from "quasar";
//import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      successMessage: false,
      resimGoster: false,
      cardName: "",
      btnGoster: true,
      cardInfo: {
        cardName: "",
        image: "https://via.placeholder.com/150",
        title1: "",
        title2: "",
        uid: uid(),
      },
      image: null,
    };
  },

  // validations: {
  //   text: {
  //     required,
  //   },
  // },
  methods: {
    savePackages() {
      this.successMessage = false;

      if (this.cardInfo.image == "https://via.placeholder.com/150") {
        console.log("Resim Seçilmedi");
      } else {
        axios
          .post(
            "https://cards-a348d-default-rtdb.firebaseio.com/cards.json",
            this.cardInfo
          )
          .then((result) => {
            console.log(result.data.name);
            const savedPackageId = result.data.name;

            if (this.image) {
              console.log("Resim Seçildi", this.image);

              const imageName = this.image.name;
              const ext = imageName.slice(imageName.lastIndexOf("."));
              const imageRef = ref(
                storage,
                "cards/" + "image" + Date.now() + ext
              );

              const uploadTask = uploadBytes(imageRef, this.image).then(
                (snapshot) => {
                  console.log("uploaded file!", snapshot);
                  getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    console.log("file is located at ", downloadUrl);

                    axios
                      .patch(
                        "https://cards-a348d-default-rtdb.firebaseio.com/cards/" +
                          savedPackageId +
                          ".json",
                        { image: downloadUrl }
                      )
                      .then(() => {
                        this.successMessage = true;

                        this.cardInfo = "";
                        this.image = null;
                        this.cardInfo.image = "https://via.placeholder.com/150";
                        this.resimGoster = false;
                        this.btnGoster = true;
                      });
                  });
                }
              );
            }
          })

          .then((result) => {
            console.log("Resim Yüklendi");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    chooseImage() {
      this.$refs.imageInput.click();
    },
    onImagePicked(event) {
      const files = event.target.files;
      const filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Uygun bir resim girin lütfen!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.cardInfo.image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      this.resimGoster = true;
      this.btnGoster = false;
    },

    removeImage() {
      this.image = null;
      this.cardInfo.image = "https://via.placeholder.com/150";
      this.resimGoster = false;
      this.btnGoster = true;
    },
  },
};
</script>

<style scoped>
.successMessage {
  width: 180px;
  padding: 7px;
  background-color: green;
  color: white;
}
.title {
  font-size: 22px;
  margin-top: 30px;
}
.text {
  margin-top: 10px;
  margin-right: 40px;
}
.card-image {
  display: flex;
  flex-direction: column;
}

.card-image img {
  width: 190px;
  margin-bottom: 10px;
}
.btn {
  width: 190px;
}
.saveBtn {
  width: 150px;
  margin-left: -15px;
}
</style>
