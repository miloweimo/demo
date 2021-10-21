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
import infoService from "./services/info";

const identifier = process.env.VUE_APP_IDENTIFIER;
const password = process.env.VUE_APP_PASSWORD;
const handleLogin = async () => {
  console.log("login", identifier, password);

  try {
    const sessionInfo = await loginService.login({ identifier, password });

    /**
     * !!! token store in localStorage !!!
     */
    // window.localStorage.setItem("sessionInfo", JSON.stringify(sessionInfo));
    window.localStorage.setItem(
      "sessionId",
      JSON.stringify(sessionInfo.sessionId)
    );

    console.log("login successed", "sessionInfo:", sessionInfo);
    infoService.setSessionInfo(sessionInfo);
    const servertime = await infoService.getServertime();
    console.log("servertime", servertime);
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
