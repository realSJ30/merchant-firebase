import { ProductConstant } from "../constants/product.constant";
import { ref, onValue } from "firebase/database";
import db from "../../utils/firebase";

export const loadProducts = (id) => {
  return (dispatch) => {
    // console.log(id);
    const productsRef = ref(db, `categories/${id}/products`);
    onValue(productsRef, (snapshot) => {
      const products = snapshot.val();

      const productList = [];
      for (let id in products) {
        productList.push({ id, ...products[id] });
      }
      dispatch({
        type: ProductConstant.FETCH_PRODUCT,
        payload: productList,
      });
    });
  };
};

export const setActiveProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: ProductConstant.SET_ACTIVE_PRODUCT,
      payload: id,
    });
  };
};
