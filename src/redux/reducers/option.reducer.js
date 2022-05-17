import { OptionConstant } from "../constants/option.constant";

const initialState = {
  activeId: "",
};

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case OptionConstant.ACTIVE_OPTION:
      return {
        ...state,
        activeId: action.payload,
      };
  
    default:
      return state;
  }
};
