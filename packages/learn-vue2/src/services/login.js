import axios from "axios";

const login = async ({ identifier, password }) => {
  console.log({ identifier, password });
  const response = await axios.post(
    "/server/authenticate",
    {
      identifier,
      password,
    },
    {
      headers: { loginType: "INFINITY", "Content-Type": "application/json" },
    }
  );
  return response.data;
};

export default { login };
