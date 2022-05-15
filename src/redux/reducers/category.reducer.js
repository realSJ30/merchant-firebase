import { CategoryConstant } from "../constants/category.constant";

const initialState = {
  categories: [],
  activeId: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case CategoryConstant.FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case CategoryConstant.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeId: action.payload,
      };
    case CategoryConstant.FETCH_CATEGORY_FAIL:
      return {
        ...state,
        categories: [],
        active: "",
      };

    default:
      return state;
  }
};
