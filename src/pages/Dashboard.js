import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ItemList from "../components/ItemList";
import NewCategoryModal from "../modals/NewCategoryModal";

const Dashboard = () => {
  const [newCategoryModal, setNewCategoryModal] = useState(false);
  return (
    <div>
      <NewCategoryModal open={newCategoryModal} setOpen={setNewCategoryModal} />
      <Navbar />
      <div className="flex md:flex-row flex-col md:items-start w-full">
        <Sidebar setNewCategoryModal={setNewCategoryModal}/>
        <ItemList />
      </div>

      {/* <ItemBanner /> */}
    </div>
  );
};

export default Dashboard;
