import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductContext = createContext();

function App() {
  const product = useLoaderData();

  return (
    <>
      <ProductContext.Provider value={product}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductContext.Provider>
    </>
  );
}

export default App;
