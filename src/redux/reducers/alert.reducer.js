import { AlertConstant } from "../constants/alert.constant";

const initialState = {
  show: false,
  path: "",
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case AlertConstant.SHOW_ALERT:
      return {
        ...state,
        show: true,
        path: action.payload,
      };
    case AlertConstant.HIDE_ALERT:
      return {
        ...state,
        show: false,
        path: "",
      };    
    default:
      return state;
  }
};
