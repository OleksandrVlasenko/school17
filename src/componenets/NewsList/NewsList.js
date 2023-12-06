import { NewsItem } from "componenets/NewsItem/NewsItem";
import { useState } from "react";

export const NewsList = ({ news }) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleChange = (e) => {
  const { name, value } = e.currentTarget;

  switch (name) {
    case "dateFrom":
      setDateFrom(value);
      break;
    case "dateTo":
      setDateTo(value);
      break;

    default:
      break;
  }
}

  return (
    <section>
      <h2>Новини</h2>
      <form>
        <label htmlFor="dateFrom">
          Від
          <input onChange={handleChange} type="date" name="dateFrom" id="dateFrom" />
        </label>
        <label htmlFor="dateTo">
          До
          <input onChange={handleChange} type="date" name="dateTo" id="dateTo" />
        </label>
        <button type="submit">Пошук</button>
      </form>

      <ul>
        {news.map((oneNews) => (
          <NewsItem key={oneNews._id} oneNews={oneNews} />
        ))}
      </ul>
    </section>
  );
};
