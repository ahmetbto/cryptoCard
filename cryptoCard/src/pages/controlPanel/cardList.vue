<template>
  <div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">İmage</th>
            <th scope="col">Card Name</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-tr" v-for="(item, id) in userList" :key="id">
            <td><img class="image" :src="item.image" /></td>
            <td class="cardName">{{ item.cardName }}</td>
            <th scope="col">
              <a class="btnDuzenle" href="">Edit</a>
            </th>
            <th scope="col">
              <a class="btnSil" @click="cardDelete(id)">Delete</a>
            </th>
          </tr>
        </tbody>
      </table>
      <div v-if="isNotification" class="notification">
        <p>Your Card has been successfully deleted</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isNotification: false,
      userList: {},
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    notoficationShow() {
      var newthis = this;
      setTimeout(function () {
        newthis.isNotification = true;

        setTimeout(function () {
          newthis.isNotification = false;
        }, 3000);
      }, 300);
    },

    cardDelete(id) {
      axios
        .delete(
          "https://cards-a348d-default-rtdb.firebaseio.com/cards/" +
            id +
            ".json"
        )
        .then(() => {
          this.getUserList();
          this.notoficationShow();
        });
    },
    getUserList() {
      console.log("İstek Atıldı");
      axios
        .get("https://cards-a348d-default-rtdb.firebaseio.com/cards.json")
        .then((response) => {
          console.log(response.data);
          this.userList = response.data;
          // this.userList = Object.values(this.userList);
        });
    },
  },
};
</script>

<style scoped>
.table-tr {
  background-color: rgba(235, 235, 229, 0.4);
}
.notification {
  background-color: rgb(10, 184, 39);
  width: 400px;
  height: 45px;
  border-radius: 3px;
  position: fixed;
  left: 50%;
  right: 50%;
  bottom: 20px;
  color: white;
  padding: 10px 30px;
  font-size: 18px;
  transform: translate(-50%);
}
.notification p {
  display: block;
  text-align: center;
}
.cardName {
  width: 300px;
  padding-left: 20px;
}
.image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
.btnDuzenle {
  width: 100px;
  cursor: pointer;
  background-color: green;
  height: 40px;
  padding: 5px;
  color: aliceblue;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 30px;
}
.btnSil {
  cursor: pointer;
  width: 50px;
  display: inline-block;
  background-color: rgb(167, 31, 7);
  height: 30px;
  padding: 5px;
  color: aliceblue;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 30px;
}
</style>
