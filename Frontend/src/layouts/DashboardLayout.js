import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {useAuthContext} from "../contexts/Auth";

const DashboardLayoutRoute = () => {
    // const {userDetails} = useAuthContext();
    // console.log(userDetails)
    // useEffect(() => {
    //     // check if user is loggedIn
    //     if (userDetails.length === 0){
    //         window.location = '/';
    //     }
    // })
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayoutRoute;
