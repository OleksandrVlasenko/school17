import { instance } from "./instance";

export const newsAPI = {
  async post(value) {
    return await instance.postForm("add-news", value);
  },
};
