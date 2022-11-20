import React, { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const CatgegoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
      <div className="products-container"></div>
    </Fragment>
  );
};

export default CatgegoriesPreview;
