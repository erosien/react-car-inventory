import Home from "../components/Home"
import Dashboard from "../components/Dashboard"
import Profile from "../components/Profile"

const routes = [
    {
      path: "/",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/profile",
      component: Profile,
      name: "Profile",
      protected: false
    },
  ];

export default routes;