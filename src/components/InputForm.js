import React from "react";

const InputForm = ({ title, placeholder, span, ...rest }) => {
  return (
    <>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {span && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{span}</span>
          </div>
        )}
        <input
          {...rest}
          name={title}
          id={title}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputForm;
