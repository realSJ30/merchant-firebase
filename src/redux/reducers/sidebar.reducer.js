import { SidebarConstant } from "../constants/sidebar.constant";

const initialState = {
  show: true,  
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case SidebarConstant.TOGGLE_BAR:
      return {
        ...state,
        show: state.show == false ? true : false,
      };

    default:
      return state;
  }
};
