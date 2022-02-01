<template>
  <div>
    <q-form class="q-gutter-md">
      <img class="studentImage" :src="cardInfo.image" />

      <input
        ref="imageInput"
        @change="onImagePicked"
        type="file"
        style="display: none"
        accept="image/*"
      />
      <q-btn
        v-if="btnGoster"
        color="red-13"
        label="Resim Seç"
        @click.prevent="chooseImage"
      />
      <q-btn
        v-if="resimGoster"
        color="grey-13"
        label="Resim Sil"
        @click.prevent="removeImage"
      />
    </q-form>

    <div class="q-pa-md">
      <!-- <p class="uyari-mesaj" v-if="uyariMesaj">
            Lütfen İlgili Alanları Doldurunuz
          </p> -->
      <q-btn
        class="q-ma-sm"
        label="Kaydet"
        @click="savePackages"
        color="primary"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "../../boot/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  data() {
    return {
      resimGoster: false,

      btnGoster: true,
      cardInfo: {
        cardName: "Card Name1",
        image: "https://via.placeholder.com/150",
      },
      image: null,
    };
  },
  methods: {
    savePackages() {
      if (this.cardInfo.image == "https://via.placeholder.com/150") {
        console.log("Resim Seçilmedi");
      } else {
        axios
          .post(
            "https://cards-a348d-default-rtdb.firebaseio.com/cards.json",
            this.cardInfo
          )
          .then((result) => {
            const savedPackageId = result.data.name;

            if (this.image) {
              const imageName = this.image.name;
              const ext = imageName.slice(imageName.lastIndexOf("."));
              const imageRef = ref(
                storage,
                "karotis/" + "image" + Date.now() + ext
              );

              const uploadTask = uploadBytes(imageRef, this.image).then(
                (snapshot) => {
                  console.log("uploaded file!", snapshot);
                  getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    console.log("file is located at ", downloadUrl);

                    axios.patch(
                      "https://cards-a348d-default-rtdb.firebaseio.com/cards/" +
                        savedPackageId +
                        ".json",
                      { image: downloadUrl }
                    );

                    // api.patch(
                    //   "https://product-manager-25e0b-default-rtdb.firebaseio.com/packages/" +
                    //     savedPackageId +
                    //     ".json",
                    //   { packageID: "65465" }
                    // );
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

<style scoped></style>
