import {
  CogIcon,
  DotsVerticalIcon,
  PencilAltIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import DeleteModal from "../modals/DeleteModal";
import NewCategoryModal from "../modals/NewCategoryModal";
import NewItemModal from "../modals/NewItemModal";
import ItemBanner from "./ItemBanner";
import ItemCard from "./ItemCard";
import { loadProducts } from "../redux/actions/product.action";
import EditItemModal from "../modals/EditItemModal";

const ItemList = (props) => {
  const [newItemModal, setNewItemModal] = useState(false);
  const [editItemModal, setEditItemModal] = useState(false);
  const { categories, activeId } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    props.loadProducts(activeId);
  }, [activeId]);

  // const categories = [
  //   {
  //     id: 1,
  //     name: "Shirts",
  //     products: [
  //       {
  //         id: 1,
  //         name: "Basic Tee",
  //         href: "#",
  //         imageSrc:
  //           "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  //         imageAlt: "Front of men's Basic Tee in black.",
  //         price: "$35",
  //         cost: "$15",
  //         options: [
  //           {
  //             id: 1,
  //             name: "Small lorem",
  //             price: "$35",
  //             cost: "$15",
  //           },
  //           {
  //             id: 2,
  //             name: "Medium",
  //             price: "$55",
  //             cost: "$25",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   // More products...
  // ];

  return (
    <div className="bg-white w-full">
      <DeleteModal />
      <NewItemModal open={newItemModal} setOpen={setNewItemModal} />
      <EditItemModal open={editItemModal} setOpen={setEditItemModal} />

      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 ">
        {categories.map(
          (category, indx) =>
            category.id == activeId && (
              <div key={indx}>
                <div className="flex space-x-2 items-center justify-between">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    {category.title}
                  </h2>
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
    // setActiveCategory: (id) => dispatch(setActiveCategory(id)),
  };
};

export default connect(null, mapDispatchToProps)(ItemList);
