import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ef68e4025cec46fea2c0e0900abc6539"
  }
});
