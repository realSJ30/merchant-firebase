import { SidebarConstant } from "../constants/sidebar.constant";

export const toggleSidebar = () => {
  return (dispatch) => {
    dispatch({ type: SidebarConstant.TOGGLE_BAR });
  };
};
