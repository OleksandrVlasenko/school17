import { useEffect, useState } from "react";
import { statutLink } from "api/statutApi";

const Statut = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await statutLink.get();
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
      await statutLink.post({link});
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="link"></label>
        <input  type="text"  id="link" />
        <button type="submit">Додати посилання</button>
      </form>
    </section>
  );
};

export default Statut;
