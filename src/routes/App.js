import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";

import { Home } from "../pages/Home";

// const Layout = lazy(() => import("../components/Layout"));
// const Home = lazy(() => import("../pages/Home"));

function App() {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
