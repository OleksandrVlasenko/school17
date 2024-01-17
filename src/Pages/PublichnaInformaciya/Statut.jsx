import { useEffect, useState } from "react";
import { statutLinkAPI } from "api/statutApi";
import { useAuth } from "hooks/useAuth";

const Statut = () => {
  const [link, setLink] = useState("");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await statutLinkAPI.get();
        console.log("fetchData  data:", data);
        setLink(data.link);
      } catch (error) {
        setLink("");
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setLink(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(link);
    try {
      await statutLinkAPI.post({ link });
      formReset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const formReset = () => {
    setLink("");
  };

  return (
    <section>
      <h2>Статут школи</h2>
      <a
        href="https://drive.google.com/file/d/15XmyDkj748qTsqR3DesIlAsPWP49He_A/view?usp=drive_link"
        target="blank"
        rel="noopener noreferrer nofollow"
      >
        Завантажити файл
      </a>
      {isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="link"></label>
          <input type="text" id="link" />
          <button type="submit">Додати посилання</button>
        </form>
      )}
    </section>
  );
};

export default Statut;
