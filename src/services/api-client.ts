import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0365279500434bf48f1455d3bce962a4",
  },
});
