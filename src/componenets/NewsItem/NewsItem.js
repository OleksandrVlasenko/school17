import { ImagesList } from "componenets/ImagesList/ImagesList";
import {
  AdditionalInfo,
  AdditionalInfoText,
  Description,
  NewsItemStyled,
  Title,
} from "./NewsItem.styled";

import { YoutubePlayer } from "componenets/youtubePlayer/YoutubePlayer";

export const NewsItem = ({ oneNews }) => {
  const { title, description, imagesURL, youtubeURL, createdAt, owner } =
    oneNews;

  return (
    <NewsItemStyled>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {imagesURL && <ImagesList imagesURL={imagesURL} />}
      {youtubeURL && <YoutubePlayer youtubeURL={youtubeURL} />}
      <AdditionalInfo>
        <AdditionalInfoText>
          {createdAt.slice(0, 16).split("T").join(" ")}
        </AdditionalInfoText>
        <AdditionalInfoText>Автор: {owner}</AdditionalInfoText>
      </AdditionalInfo>
    </NewsItemStyled>
  );
};
