import {
  PlusIcon,  
  ShoppingBagIcon,  
  XIcon,
} from "@heroicons/react/outline";
import React from "react";
import { showAlert, hideAlert } from "../redux/actions/alert.action";
import { connect, useSelector } from "react-redux";
import { setActiveOption } from "../redux/actions/option.action";
import { setActiveProduct } from "../redux/actions/product.action";
import "../index.css";

// components
const AmountLabel = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
      <p className="font-bold">{value}</p>
    </div>
  );
};

const Options = ({ name = "Option", onClick }) => {
  return (
    <p
      className="bg-indigo-100 p-1 rounded-full text-xs text-center cursor-pointer hover:bg-indigo-200"
      onClick={onClick}
    >
      {name}
    </p>
  );
};


const ItemCard = (props) => {

  const product = props.product;
  const categoryState = useSelector((state) => state.category);

  const deleteItem = (id) => {
    props.showAlert(`categories/${categoryState.activeId}/products/${id}`);
    props.setActiveProduct("");
    
  };

  return (
    <div className="bg-white shadow-lg rounded-md flex flex-col p-4 space-y-2">
      <div className="flex justify-between items-center">
        <ShoppingBagIcon className="w-6 h-6" />
        <XIcon
          onClick={() => deleteItem(product.id)}
          className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
        />
      </div>
      <h1 className="font-semibold">{product.name}</h1>
      <div className="grid grid-cols-4 gap-1 items-center">
        {product.options &&
          Object.keys(product.options).map((id, indx) => (
            <Options
              key={indx}
              name={product.options[id].name}
              onClick={() => {
                props.setActiveOption(id);
                props.setActiveProduct(product.id);
                props.setEditOptionOpen(true);
              }}
            />
          ))}

        <PlusIcon
          onClick={() => {
            props.setActiveProduct(product.id);
            props.setNewOptionOpen(true);
          }}
          className="w-8 h-8 bg-gray-50 p-2 rounded-full text-gray-500 border-dashed border-gray-300 border hover:border-gray-800 hover:text-gray-800 cursor-pointer"
        />
      </div>
      {!product.options && (
        <AmountLabel title={"Price"} value={product.price} />
      )}
      {!product.options && <AmountLabel title={"Cost"} value={product.cost} />}

      {product.options && (
        <>
          <div className="grid grid-cols-4 gap-2">
            <p></p>
            <p className="text-xs text-gray-500 text-right">Price</p>
            <p className="text-xs text-gray-500 text-right">cost</p>
            <p className="text-xs text-gray-500 text-right">stock</p>
          </div>
          <div className="max-h-40 min-h-fit overflow-y-auto no-scrollbar">
            {Object.keys(product.options).map((id, indx) => (              
              <div key={indx} className="grid grid-cols-4 gap-2">
                <p className="text-sm text-gray-700">
                  {product.options[id].name}
                </p>
                <p className="text-xs text-gray-600 text-right">
                  {product.options[id].price}
                </p>
                <p className="text-xs text-gray-600 text-right">
                  {product.options[id].cost}
                </p>
                <p className="text-xs text-gray-600 text-right">
                  {product.options[id].amount_in_stock}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <hr />
      {!product.options && (
        <AmountLabel title={"Stock"} value={product.amount_in_stock} />
      )}
      <div className="flex-1 flex items-end">
        <button
          onClick={() => {
            props.setActiveProduct(product.id);
            props.setOpen(true);
          }}
          className="p-2 bg-gray-300 rounded-md text-gray-500 flex-1"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: (path) => dispatch(showAlert(path)),
    hideAlert: () => dispatch(hideAlert()),
    setActiveProduct: (id) => dispatch(setActiveProduct(id)),
    setActiveOption: (id) => dispatch(setActiveOption(id)),
  };
};

export default connect(null, mapDispatchToProps)(ItemCard);
