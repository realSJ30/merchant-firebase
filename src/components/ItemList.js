import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import DeleteModal from "../modals/DeleteModal";
import NewItemModal from "../modals/NewItemModal";
import ItemCard from "./ItemCard";
import { loadProducts } from "../redux/actions/product.action";
import EditItemModal from "../modals/EditItemModal";
import NewOptionModal from "../modals/NewOptionModal";
import EditOptionModal from "../modals/EditOptionModal";
import EditCategoryModal from "../modals/EditCategoryModal";

const ItemList = (props) => {
  const [newItemModal, setNewItemModal] = useState(false);
  const [editItemModal, setEditItemModal] = useState(false);
  const [newOptionModal, setNewOptionModal] = useState(false);
  const [editOptionModal, setEditOptionModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const { categories, activeId } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    props.loadProducts(activeId);
  }, [activeId]);

  return (
    <div className="bg-transparent w-full">
      <DeleteModal />
      <NewItemModal open={newItemModal} setOpen={setNewItemModal} />
      <EditItemModal open={editItemModal} setOpen={setEditItemModal} />
      <NewOptionModal open={newOptionModal} setOpen={setNewOptionModal} />
      <EditOptionModal open={editOptionModal} setOpen={setEditOptionModal} />
      <EditCategoryModal
        open={editCategoryModal}
        setOpen={setEditCategoryModal}
      />
      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {categories.map(
          (category, indx) =>
            category.id == activeId && (
              <div key={indx}>
                <div className="flex space-x-2 items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      {category.title}
                    </h2>
                    <PencilIcon className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
                    <TrashIcon
                      onClick={
                        () => console.log("delete")
                        // props.showAlert(
                        //   `/categories/${activeId}/products/${productState.activeId}/options/${optionState.activeId}`
                        // )
                      }
                      className="w-6 h-6 text-red-400 hover:text-red-500 cursor-pointer"
                    />
                  </div>
                  <button
                    onClick={() => setNewItemModal(true)}
                    className="flex items-center space-x-1 rounded-md bg-gray-800 hover:bg-slate-900 text-white px-4 py-1"
                  >
                    <PlusIcon className="w-4 cursor-pointer " />
                    <h2 className="text-lg font-bold tracking-tight">
                      NEW ITEM
                    </h2>
                  </button>
                </div>

                {products.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, indx) => (
                      <ItemCard
                        key={indx}
                        product={product}
                        setOpen={setEditItemModal}
                        setNewOptionOpen={setNewOptionModal}
                        setEditOptionOpen={setEditOptionModal}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-8 font-bold text-gray-600">
                    THERE ARE NO PRODUCTS AVAILABLE
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: (id) => dispatch(loadProducts(id)),
  };
};

export default connect(null, mapDispatchToProps)(ItemList);
