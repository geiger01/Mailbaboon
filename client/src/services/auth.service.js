import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "//localhost:5001";

export const authService = {
  getCurrentUser,
};

async function getCurrentUser() {
  try {
    const res = await axios.get(`${BASE_URL}/api/current_user`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
