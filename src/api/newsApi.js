import { instance } from "./instance";

export const newsAPI = {
  async getAll() {
    return await instance.get("/news")
  },
  async post(value) {
    return await instance.postForm("/news", value);
  },
};
