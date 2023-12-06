import { Link } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { newsAPI } from "api/newsApi";
import { NewsList } from "componenets/NewsList/NewsList";


const MainPage = () => {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState("false");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function getAllNews() {
      setIsLoaded("isLoading");
      try {
        const { data } = await newsAPI.getAll();
        console.log("getAllNews  data:", data);
        setNews(data.news);
        setIsLoaded("true");
      } catch (error) {
        setIsLoaded("idle");
        console.log(error.message);
      }
    }
    getAllNews();
  }, []);

  return (
    <>
      <p>MainPage</p>
      {isLoggedIn && <Link to="add-news">Form</Link>}
      <NewsList news={news} />
    </>
  );
};

export default MainPage;
