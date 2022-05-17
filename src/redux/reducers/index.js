import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { sidebarReducer } from "./sidebar.reducer";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer";
import { optionReducer } from "./option.reducer";
// import { toasterReducer } from "./toaster.reducers";

const rootReducer = combineReducers({
  option: optionReducer,
  alert: alertReducer,
  sidebar: sidebarReducer,
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;
