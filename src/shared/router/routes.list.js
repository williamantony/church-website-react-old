import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
