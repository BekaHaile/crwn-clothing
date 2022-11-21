import CategoryItem from "../directory-item/directory-item.component";

import { DirectoryContianer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContianer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryContianer>
  );
};

export default Directory;
