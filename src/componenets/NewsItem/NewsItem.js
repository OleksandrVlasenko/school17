import { ImagesList } from "componenets/ImagesList/ImagesList";

export const NewsItem = ({ oneNews }) => {
  const { title, description, imagesURL, youtubeURL, createdAt, owner } =
    oneNews;
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <ImagesList imagesURL={imagesURL} />
      <p>{owner}</p>
      <p>{createdAt}</p>
    </li>
  );
};
