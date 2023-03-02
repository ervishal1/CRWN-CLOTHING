import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.style.scss";
import { useDispatch } from "react-redux";
import {fetchCategoriesStart} from '../../../store/categories/categories.action';

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  },[])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
