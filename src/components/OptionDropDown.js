import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { showAlert, hideAlert } from "../redux/actions/alert.action";
import { connect } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OptionDropDown = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-gray-500 hover:text-gray-800 ">
          {/* className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" */}
          <DotsVerticalIcon className="w-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute -right-[170px] top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => props.showAlert()}
                  className={classNames(
                    active
                      ? "cursor-pointer bg-gray-100 text-red-400"
                      : "text-red-400",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
  };
};

export default connect(null, mapDispatchToProps)(OptionDropDown);
