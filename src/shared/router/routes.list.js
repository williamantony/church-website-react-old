import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";
import About from "../pages/About/About";
import Pastors from "../pages/Pastors/Pastors";
import Beliefs from "../pages/About/Beliefs";
import Location from "../pages/Location/Location";
import PastorProfile from "../pages/Pastors/PastorProfile";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/about",
    component: About,
  },
  {
    exact: true,
    path: "/pastors",
    component: Pastors,
  },
  {
    exact: true,
    path: "/pastors/:pastor",
    component: PastorProfile,
  },
  {
    exact: true,
    path: "/about/beliefs",
    component: Beliefs,
  },
  {
    exact: true,
    path: "/location",
    component: Location,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
