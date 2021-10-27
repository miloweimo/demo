import axios from "axios";
const baseURL = "";
let sessionInfo = localStorage.sessionId;

const setSessionInfo = (newSessionInfo) => {
  sessionInfo = newSessionInfo;
};

const axiosInstance = axios.create({
  baseURL,
  headers: { loginType: "INFINITY", "Content-Type": "application/json" },
});

const getServertime = async () => {
  let sessionId = sessionInfo.sessionId ? sessionInfo.sessionId : localStorage.sessionId
  // console.log("getServertime,sessionId:", sessionId);
  const config = { headers: { sessionId } };
  const response = await axiosInstance.get("/server/servertime", config);
  return response.data;
};

export default { setSessionInfo, getServertime };
