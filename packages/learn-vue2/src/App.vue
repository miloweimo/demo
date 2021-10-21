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
import infoService from "./services/info"

// let sessionId = "5E84F7BBE3E43605C3D1F7F173D3F70D.tomcat1";
// const getMs = async () => {
//   const ms = await loginService.getServertime(sessionId);
//   console.log('ms',ms);
// }
// getMs()
console.log('process.env',process.env)
const identifier = process.env.IDENTIFIER;
const password = process.env.PASSWORD;
const handleLogin = async () => {
  console.log("login", identifier, password);

  try {
    const sessionInfo = await loginService.login({ identifier, password });

    /**
     * !!! token store in localStorage !!!
     */
    // window.localStorage.setItem("sessionInfo", JSON.stringify(sessionInfo));

    console.log("login successed", "sessionInfo:", sessionInfo);
    infoService.setSessionInfo(sessionInfo)
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
