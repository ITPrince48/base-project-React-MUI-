import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loadable from "components/Loadable";
import Layout from "layouts";

const Home = Loadable(lazy(() => import("pages/Home")));

export default function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
