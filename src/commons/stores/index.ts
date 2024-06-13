import { atom, selector } from "recoil";
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
      return newAccessToken;
    } catch (error) {
      if (error instanceof Error) console.log("Failed to restore access token:", error.message);
    }
  },
});
