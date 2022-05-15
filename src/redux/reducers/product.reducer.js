import { ProductConstant } from "../constants/product.constant";

const initialState = {
  products: [],
  activeId: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case ProductConstant.FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ProductConstant.SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeId: action.payload,
      };
    case ProductConstant.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        products: [],
        active: "",
      };

    default:
      return state;
  }
};
