import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PatientDashboardLayoutRoute = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PatientDashboardLayoutRoute;
