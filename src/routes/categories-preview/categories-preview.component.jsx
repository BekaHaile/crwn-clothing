import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";

const CatgegoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
