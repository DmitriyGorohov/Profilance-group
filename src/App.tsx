import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { WebsiteUrls } from "./types";

import Layuot from "./Components/Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path={WebsiteUrls.HOME} element={<Layuot />}>
        <Route index element={<HomePage />} />
        <Route path={WebsiteUrls.NEWS} element={<NewsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
