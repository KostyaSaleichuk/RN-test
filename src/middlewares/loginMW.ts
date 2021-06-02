import { testData } from "../services/authService";

export const loggingIn = () => (dispatch: any) => {
  if (testData.email == state.email && testData.password == state.password) {
    dispatch({ type: "LOG_IN" });
  }
  dispatch(loggingIn());
};
