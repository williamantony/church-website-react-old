import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";
import About from "../pages/About/About";
import Leadership from "../pages/About/Leadership";
import Beliefs from "../pages/About/Beliefs";

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
    path: "/about/leadership",
    component: Leadership,
  },
  {
    exact: true,
    path: "/about/beliefs",
    component: Beliefs,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
