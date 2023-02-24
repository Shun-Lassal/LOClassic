import { defineStore } from "pinia";
// import axios from "axios";
import { secureAxios } from "../utils/http";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    test: "",
  }),
  actions: {
    async test(str) {
      console.log(str);
    },
  },
});
