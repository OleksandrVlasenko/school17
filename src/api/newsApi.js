import { instance } from "./instance";

export const newsAPI = {
  async getAll(body) {
    return await instance.get("/news", { params: body })
  },
  async post(body) {
    return await instance.postForm("/news", body);
  },
};
