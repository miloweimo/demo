<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import loginService from "./services/login";
require("dotenv").config();

// let sessionId = "5E84F7BBE3E43605C3D1F7F173D3F70D.tomcat1";
// const getMs = async () => {
//   const ms = await loginService.getServertime(sessionId);
//   console.log('ms',ms);
// }
// getMs()
const identifier = "app@shopworx.com";
const password = "entrib";
const handleLogin = async () => {
  console.log("login", identifier, password);

  try {
    const sessionId = await loginService.login({ identifier, password });

    /**
     * !!! token store in localStorage !!!
     */
    // window.localStorage.setItem("sessionId", JSON.stringify(sessionId));

    console.log("login successed", "sessionId:", sessionId);
  } catch (exception) {
    console.log("login failed:", exception);
  }
};

handleLogin();

export default {
  name: "App",
  components: {
    Main,
    Header,
  },
};
</script>

<style></style>
