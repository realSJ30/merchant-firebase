import { AlertConstant } from "../constants/alert.constant";

export const showAlert = () => {
  return (dispatch) => {
    dispatch({ type: AlertConstant.SHOW_ALERT });
  };
};

export const hideAlert = () => {
  return (dispatch) => {
    dispatch({ type: AlertConstant.HIDE_ALERT });
  };
};
