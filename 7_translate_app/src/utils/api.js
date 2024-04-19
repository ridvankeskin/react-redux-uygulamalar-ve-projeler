import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",

  headers: {
    "X-RapidAPI-Key": "405fc73b7emshaf2dbd3ee5ffc59p110b72jsn3a90ac39d11c",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
});
