import { AlertConstant } from "../constants/alert.constant";

export const showAlert = (path) => {
  return (dispatch) => {
    dispatch({ type: AlertConstant.SHOW_ALERT, payload: path });
  };
};

export const hideAlert = () => {
  return (dispatch) => {
    dispatch({ type: AlertConstant.HIDE_ALERT });
  };
};
