import {
  BackgroundImage,
  Body,
  DirctoryItemContainer,
  Text,
  Title,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirctoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <Title>{title.toUpperCase()}</Title>
        <Text>Shop Now</Text>
      </Body>
    </DirctoryItemContainer>
  );
};

export default DirectoryItem;
