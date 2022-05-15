import { CategoryConstant } from "../constants/category.constant";
import { ref, onValue } from "firebase/database";
import db from "../../utils/firebase";

export const loadCategories = () => {
  return (dispatch) => {
    const categoriesRef = ref(db, "categories");
    onValue(categoriesRef, (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (let id in categories) {
        categoryList.push({ id, ...categories[id] });
      }
      dispatch({
        type: CategoryConstant.FETCH_CATEGORY,
        payload: categoryList,
      });
      if (categoryList.length > 0) {
        dispatch({
          type: CategoryConstant.SET_ACTIVE_CATEGORY,
          payload: categoryList[0].id,
        });
      }
    });
  };
};

export const setActiveCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: CategoryConstant.SET_ACTIVE_CATEGORY,
      payload: id,
    });
  };
};
