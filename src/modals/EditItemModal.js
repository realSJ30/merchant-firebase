import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import InputForm from "../components/InputForm";
import { connect, useSelector } from "react-redux";
import { setActiveCategory } from "../redux/actions/category.action";
import { updateData } from "../utils/api";

const EditItemModal = (props) => {
  const cancelButtonRef = useRef(null);
  const { activeId } = useSelector((state) => state.category);
  const productState = useSelector((state) => state.product);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    cost: 0,
    amount_in_stock: 0,
  });

  const handleChangeProduct = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const updateItem = (e) => {
    e.preventDefault();    
    updateData({
      data: product,
      path: `/categories/${activeId}/products/${productState.activeId}`,
    });
    props.setActiveCategory(activeId);
    props.setOpen(false);
  };

  useEffect(() => {
    if (productState.activeId) {
      const { name, price, cost, amount_in_stock } =
        productState.products.filter(
          (product) => product.id == productState.activeId
        )[0];
      setProduct({
        name: name,
        price: price,
        cost: cost,
        amount_in_stock: amount_in_stock,
      });
    }
  }, [productState.activeId]);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">            
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form onSubmit={updateItem}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                        <PencilAltIcon
                          className="h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          Edit Item
                        </Dialog.Title>
                        <div className="mt-2 w-full">
                          <InputForm
                            value={product.name}
                            type="text"
                            title={"Item name"}
                            placeholder={"Frappe"}
                            onChange={handleChangeProduct("name")}
                            required
                          />
                          
                          <InputForm
                            value={product.price}
                            type="number"
                            step="any"
                            span={"P"}
                            title={"Price"}
                            placeholder={"0.00"}
                            onChange={handleChangeProduct("price")}
                          />
                          <InputForm
                            value={product.cost}
                            type="number"
                            step="any"
                            span={"P"}
                            title={"Cost"}
                            placeholder={"0.00"}
                            onChange={handleChangeProduct("cost")}
                          />
                          <InputForm
                            value={product.amount_in_stock}
                            type="number"
                            step="any"
                            title={"Amount in stock"}
                            placeholder={"0"}
                            onChange={handleChangeProduct("amount_in_stock")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"                      
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCategory: (id) => dispatch(setActiveCategory(id)),
  };
};

export default connect(null, mapDispatchToProps)(EditItemModal);
