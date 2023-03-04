import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
