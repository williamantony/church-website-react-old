import Home from "../ui/pages/Home/Home";
import NotFoundError from "../ui/pages/error/NotFoundError";

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
