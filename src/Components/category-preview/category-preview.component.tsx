import React from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../utils/firebase.utils";
import ProductCard from "../product-card/ProductCard.component";
import "./category-preview.style.scss";

type CategoryPrevProps = {
  title : string;
  products: CategoryItem[];
}

const CategoryPreview: React.FC<CategoryPrevProps> = ({ title, products }) => {

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={`${title}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
