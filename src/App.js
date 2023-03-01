import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./Components/routes/home/home";
import Navigation from './Components/routes/navigation/navigation';
import Authentication from "./Components/routes/authentication/Authentication.component";
import Shop from "./Components/routes/shop/Shop.component";
import Checkout from "./Components/routes/checkout/Checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
