import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {


  return (
    <div className="container ">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
