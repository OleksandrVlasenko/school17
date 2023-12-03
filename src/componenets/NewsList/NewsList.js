import { NewsItem } from "componenets/NewsItem/NewsItem";

export const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map(
        (oneNews) => (
          <NewsItem key={oneNews._id} oneNews={oneNews} />
        )
      )}
    </ul>
  );
};
