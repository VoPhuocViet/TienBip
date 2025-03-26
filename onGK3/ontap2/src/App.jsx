import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { path } from "./const/path";
import Menu from "./pages/Menu/Menu";
import LienHe from "./pages/LienHe/LienHe";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import NotFound from "./pages/NotFound/NotFound";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={path.home} element={<Home />}></Route>
        <Route path={path.menu} element={<Menu />}></Route>
        <Route path={path.lienHe} element={<LienHe />}></Route>
        <Route path="/product/:id" element={<DetailProduct />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
