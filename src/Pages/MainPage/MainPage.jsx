import { Link } from "react-router-dom";
import {
  generateTestData,
  usePagination,
  Pagination,
} from "pagination-react-js"; 

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
  const { currentPage, entriesPerPage, entries } = usePagination(1, 5); 

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
        <Pagination
          entriesPerPage={entriesPerPage.get}
          totalEntries={180}
          currentPage={{ get: currentPage.get, set: currentPage.set }}
          offset={2}
          classNames={{
            wrapper: "pagination m-auto",
            item: "pagination-item",
            itemActive: "pagination-item-active",
            navPrev: "pagination-item nav-item",
            navNext: "pagination-item nav-item",
            navStart: "pagination-item nav-item",
            navEnd: "pagination-item nav-item",
            navPrevCustom: "pagination-item",
            navNextCustom: "pagination-item",
          }}
          // showFirstNumberAlways={true}
          // showLastNumberAlways={true}
          navStart="«"
          navEnd="»"
          navPrev="‹"
          navNext="›"
          // navPrevCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" }}
          // navNextCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" }}
        />
        <SearchFormByDate setSearchingDate={setSearchingDate} />
        <NewsList news={news} />
      </section>
    </>
  );
};

export default MainPage;
