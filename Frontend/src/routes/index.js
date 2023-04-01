/**
 * Layouts
 */
import HomepageLayout from "./pages/HomepageLayout";
import DashboardLayout from "./pages/DashboardLayout";

/**
 * Pages
 */
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import AuthorizeDoctor from "./pages/AuthorizeDoctor";

export const routes = [
  {
    layout: HomepageLayout,
    routes: [
      {
        name: "home",
        title: "Homepage",
        component: Home,
        path: "/home",
      },
      {
        name: "about",
        title: "About Us",
        component: About,
        path: "/about",
      },
    ],
  },
  {
    layout: DashboardLayout,
    routes: [
      {
        name: "dashboard",
        title: "Dashboard",
        component: Dashboard,
        path: "/dashboard",
      },
    ],
  },
];

export default routes;
