import { OptionConstant } from "../constants/option.constant";

export const setActiveOption = (id) => {
  return (dispatch) => {
    dispatch({ type: OptionConstant.ACTIVE_OPTION, payload: id });
  };
};

