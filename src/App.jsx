import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <Header />
      {routing}
    </>
  );
}
