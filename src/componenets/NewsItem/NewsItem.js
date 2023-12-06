import { ImagesList } from "componenets/ImagesList/ImagesList";
import { AdditionalInfo, AdditionalInfoText, Description, NewsItemStyled, Title } from "./NewsItem.styled";

export const NewsItem = ({ oneNews }) => {
  const { title, description, imagesURL, youtubeURL, createdAt, owner } =
    oneNews;
  return (
    <NewsItemStyled>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImagesList imagesURL={imagesURL} />
      <AdditionalInfo>
        <AdditionalInfoText>
          {createdAt.slice(0, 16).split("T").join(" ")}
        </AdditionalInfoText>
        <AdditionalInfoText>Автор: {owner}</AdditionalInfoText>
      </AdditionalInfo>
    </NewsItemStyled>
  );
};
