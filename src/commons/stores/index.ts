import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: `userState/${v1()}`,
  default: "",
});

export const visitedPageState = atom({
  key: `userState/${v1()}`,
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: `userState/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
