import {
  SearchCircleIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import React from "react";
import { showAlert, hideAlert } from "../redux/actions/alert.action";
import { connect } from "react-redux";
import OptionDropDown from "./OptionDropDown";
import { setActiveProduct } from "../redux/actions/product.action";

const ItemCard = (props) => {
  const product = props.product;
  return (
    <div
      key={product.id}
      className="group relative cursor-pointer"
      onClick={() => {
        props.setActiveProduct(product.id);
        props.setOpen(true);
      }}
    >
      <h1 className="hidden group-hover:block absolute top-[35%] left-[40%]">
        <SearchCircleIcon className="w-12 h-12" />
      </h1>
      <div className="w-full min-h-80 bg-gray-400 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-80 lg:aspect-none">
        <ShoppingBagIcon className="w-full h-full object-center object-cover lg:w-full lg:h-full text-gray-600" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">
          <p>{product.name}</p>
        </h3>
        <TrashIcon className="w-6 h-6 text-red-600"/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
    setActiveProduct: (id) => dispatch(setActiveProduct(id)),
  };
};

export default connect(null, mapDispatchToProps)(ItemCard);
