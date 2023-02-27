import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./Components/routes/home/home";
import Navigation from './Components/routes/navigation/navigation';
import SignIn from "./Components/routes/signin/signin";

const Shop = () => {
  return <h1>I am the shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
