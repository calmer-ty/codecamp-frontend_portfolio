import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    try {
      const newAccessToken = await getAccessToken();
      console.log("New access token:", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("Failed to restore access token:", error);
      return null;
    }
  },
});
