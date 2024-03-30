import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api/",
  params: {
    key: "GET_API_KEY_rawg.io"
  }
});
