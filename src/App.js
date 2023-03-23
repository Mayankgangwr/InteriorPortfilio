import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./home";
import Nav from "./nav";
const Apps = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="nav" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Apps;
