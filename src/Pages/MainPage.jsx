import { Link } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { newsAPI } from "api/newsApi";
import { NewsList } from "componenets/NewsList/NewsList";
import { SearchFormByDate } from "componenets/SearchFormByDate/SearchFormByDate";

const MainPage = () => {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState("false");
  const [searchingDate, setSearchingDate] = useState({});
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function getAllNews() {
      console.log("MainPage  searchingDate:", searchingDate);

      setIsLoaded("isLoading");
      try {
        const { data } = await newsAPI.getAll(searchingDate);
        console.log("getAllNews  data:", data);
        setNews(data.news);
        setIsLoaded("true");
      } catch (error) {
        setIsLoaded("idle");
        console.log(error.message);
      }
    }
    getAllNews();
  }, [searchingDate]);

  return (
    <>
      <p>MainPage</p>
      {isLoggedIn && <Link to="add-news">Form</Link>}
      <section>
        <h2>Новини</h2>
        <SearchFormByDate setSearchingDate={setSearchingDate} />
        <NewsList news={news} />
      </section>
    </>
  );
};

export default MainPage;
