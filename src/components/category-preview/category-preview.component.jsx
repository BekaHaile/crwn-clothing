import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigationHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="category-preview-container">
      <h2 className="title" onClick={() => navigationHandler(title)}>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
