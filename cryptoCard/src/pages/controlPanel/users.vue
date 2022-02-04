<template>
  <div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userList" :key="item">
            <th scope="row">1</th>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userList: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      console.log("İstek Atıldı");
      axios
        .get("https://cards-a348d-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          console.log(response.data);

          this.userList = response.data;
          this.userList = Object.values(this.userList);
        });
    },
  },
};
</script>

<style scoped></style>
