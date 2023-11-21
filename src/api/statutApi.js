import { instance } from "./instance";

export const statutLink = {
  async get() {
    try {
      const { data } = await instance.get("/statut");
      console.log("getStatutLink  data:", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
  async post(link) {
    try {
      const { data } = await instance.post("/statut", link);
      console.log("getStatutLink  data:", data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
