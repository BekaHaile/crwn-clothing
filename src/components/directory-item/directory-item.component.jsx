import {
  BackgroundImage,
  Body,
  DirctoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirctoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>title</h2>
        <p>Shop Now</p>
      </Body>
    </DirctoryItemContainer>
  );
};

export default DirectoryItem;
