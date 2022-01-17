// get data from json-server
import axios from "axios";
const baseUrl = 'http://localhost:2333'

const getAllNotes = async () => {
  const response = await axios.get(
    `${baseUrl}/notes`,
  );
  return response.data;
};

export default { getAllNotes };