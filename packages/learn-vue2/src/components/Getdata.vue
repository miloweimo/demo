<template>
  <div>
    <h1>get data from server</h1>
    <h2>get data from json-server</h2>
    <v-btn>click me!</v-btn>
    <v-btn @click="handleGetNotes">get notes</v-btn>
    <h2>get data from swx-server</h2>
    <v-btn>click me!</v-btn>
    <v-btn @click="handleLogin">login to server</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import loginService from "../services/login";

export default {
  name: "getdata",
  data() {
    return {};
  },
  methods: {
    async handleLogin() {
      const identifier = "zhicong.zhao@ruhlamat-st.com.cn";
      const password = "entrib";

      console.log("login,identifier:", identifier, "password:", password);
      try {
        const res = await loginService.login({ identifier, password });
        console.log(res);
        // update credent in store
        this.$store.commit("setAuth", res);
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
    async handleGetNotes() {
      console.log('handleGetNotes');
      
    },
  },
  mounted() {
    const promise = axios.get("http://localhost:3001/notes");
    console.log(promise);
    // const promise2 = axios.get("http://localhost:3001/foobar");
    // console.log(promise2);
  },
};
</script>

<style></style>
