import { authService } from "../../services/auth.service";

export function fetchUser() {
  return async (dispatch) => {
    try {
      const user = await authService.getCurrentUser();
      dispatch({
        type: "SET_USER",
        user,
      });

      return user;
    } catch (e) {
      console.log(e);
    }
  };
}
