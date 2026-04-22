// import { api } from "./api";

export const loginRequest = async (email, password) => {
  await new Promise((r) => setTimeout(r, 500)); // simula delay
  console.log(password)

  return {
    data: {
      id: 1,
      email,
      token: "adsasdsadasd",
      nome: "Admin"
    },
  };
};
