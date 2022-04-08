import { atom } from "recoil";


export const authState = atom({
  key: "authState",
  default: {
    token: null,
    user: {role:null}
  },
});


export const userState = atom({
  key: "user",
  default: null,
});






