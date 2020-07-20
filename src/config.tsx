import axios from "axios";

const api = axios.create({
  baseURL: "https://rxn.res.ibm.com",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "apk-035dde05eb9f8c8e045d463bffddb36cff307ff57509abdec06e4d8bc278cafe07c99c86ed3c1437082aa93d48f0c6c3eb835b17f139caadc6f7fd5ce785e9556af53e76f15fabbf3f2ce4354feb5826",
  },
});

export default api;
