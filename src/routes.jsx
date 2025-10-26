import Home from "./pages/public/Home";
import Shop from "./pages/public/Shop";
import Auth from "./pages/public/Auth";
import Checkout from "./pages/public/Checkout";
import Contact from "./pages/public/Contact";
import About from "./pages/public/about";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/auth", element: <Auth /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
];

export default routes;
