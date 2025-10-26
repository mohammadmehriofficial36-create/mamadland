import Home from "./pages/public/Home";
import Shop from "./pages/public/Shop";
import Auth from "./pages/public/Auth";
import Checkout from "./pages/public/Checkout";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/auth", element: <Auth /> },
  { path: "/checkout", element: <Checkout /> },
];

export default routes;
