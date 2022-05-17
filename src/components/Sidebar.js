import { ChevronDownIcon, MinusSmIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebar.action";
import {
  loadCategories,
  setActiveCategory,
} from "../redux/actions/category.action";

const Sidebar = (props) => {
  const sidebar = useSelector((state) => state.sidebar);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    props.loadCategories();
  }, []);

  return (
    <div className="md:m-2 bg-gray-800 p-4 md:rounded-md shadow-sm md:w-60 w-full text-white">
      <div className="flex items-center justify-between">
        <p>CATEGORIES</p>
        {sidebar.show ? (
          <MinusSmIcon
            onClick={() => props.toggleSidebar()}
            className="w-6 h-6 cursor-pointer text-white text-opacity-50 hover:text-opacity-100"
          />
        ) : (
          <ChevronDownIcon
            onClick={() => props.toggleSidebar()}
            className="w-6 h-6 cursor-pointer text-white text-opacity-50 hover:text-opacity-100"
          />
        )}
      </div>
      {sidebar.show && <br />}
      <div className={sidebar.show ? "flex flex-col space-y-2" : "hidden"}>
        <button
          onClick={() => props.setNewCategoryModal(true)}
          className="p-2 bg-white rounded-sm text-black font-medium"
        >
          NEW CATEGORY
        </button>
        {/* categories */}
        {categories.length > 0 ? (
          categories.map((category, indx) => (
            <button
              key={indx}
              className="p-2 bg-white bg-opacity-5 text-white font-medium rounded-sm"
              onClick={() => props.setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))
        ) : (
          <p className="p-2 bg-white bg-opacity-5 rounded-sm text-white font-medium text-center border border-dashed opacity-25">
            EMPTY
          </p>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
    loadCategories: () => dispatch(loadCategories()),
    setActiveCategory: (id) => dispatch(setActiveCategory(id)),
  };
};

export default connect(null, mapDispatchToProps)(Sidebar);
