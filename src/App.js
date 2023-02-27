import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./Components/routes/home/home";
import Navigation from './Components/routes/navigation/navigation';
import Authentication from "./Components/routes/authentication/Authentication.component";

const Shop = () => {
  return <h1>I am the shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
