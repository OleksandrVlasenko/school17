import { useState } from "react";

export const SearchFormByDate = ({ setSearchingDate }) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dateFrom && !dateTo) {
      console.log("Обидва поля мають бути заповнені");
      return;
    }
    if (dateFrom > dateTo) {
      console.log("Некоректно введена дата");
      return;
    }
    setSearchingDate({ dateFrom, dateTo });
    console.log("ok");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dateFrom">
        Від
        <input
          onChange={handleChange}
          type="date"
          name="dateFrom"
          id="dateFrom"
        />
      </label>
      <label htmlFor="dateTo">
        До
        <input onChange={handleChange} type="date" name="dateTo" id="dateTo" />
      </label>
      <button type="submit">Пошук</button>
    </form>
  );
};
