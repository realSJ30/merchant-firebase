import { AlertConstant } from "../constants/alert.constant";

const initialState = {
  show: false,
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case AlertConstant.SHOW_ALERT:
      return {
        ...state,
        show: true,
      };
    case AlertConstant.HIDE_ALERT:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};
