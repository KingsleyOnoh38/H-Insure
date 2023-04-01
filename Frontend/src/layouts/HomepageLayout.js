import React from "react";
import { Outlet } from "react-router-dom";

const HomepageLayoutRoute = ({ component: Component, ...rest }) => {
  return <Outlet />;
};

export default HomepageLayoutRoute;
