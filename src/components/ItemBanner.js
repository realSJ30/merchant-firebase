import React from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import InputForm from "./InputForm";

const ItemBanner = () => {
  return (
    <div className="bg-indigo-600 fixed bottom-0 right-0 left-0">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 relative">
        <XIcon
          className="absolute right-0 h-6 w-6 text-white text-opacity-50 hover:text-opacity-100 cursor-pointer"
          aria-hidden="true"
        />
        <div className="mt-2 w-full">
          <InputForm type="text" title={"Item name"} placeholder={"Frappe"} />
          <p>Options</p>
          <InputForm
            type="text"
            span={"P"}
            title={"Price"}
            placeholder={"0.00"}
          />
          <InputForm
            type="text"
            span={"P"}
            title={"Cost"}
            placeholder={"0.00"}
          />
          <InputForm
            type="number"
            title={"Amount in stock"}
            placeholder={"0"}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemBanner;
