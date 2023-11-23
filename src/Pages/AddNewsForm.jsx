import { newsAPI } from "api/newsApi";
import { useState } from "react";

const AddNewsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);
  const [filesURL, setFilesURL] = useState([]);
  // const [progress, setProgress] = useState({ started: false, pc: 0 });
  // const [msg, setMsg] = useState("");
  const [youTubeURL, setYouTubeURL] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "youTubeURL":
        setYouTubeURL(value);
        break;

      default:
        break;
    }
  };

  const handleDownloadImages = (e) => {
    const { files } = e.target;
    const filesURL = [];

    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(files[i]);
      filesURL.push(url);
    }

    setFiles(files);
    setFilesURL(filesURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, description, files, youTubeURL };
    const data = await newsAPI.post(newPost);
    console.log("handleSubmit  data:", data);
  };

  return (
    <>
      <p>AddNewsForm</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Заголовок
          <input
            onChange={handleChange}
            value={title}
            type="text"
            name="title"
            id="title"
            required
          />
        </label>

        <label htmlFor="description">
          Додати опис
          <input
            onChange={handleChange}
            value={description}
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="file">
          Завантажити фото
          <input
            onChange={handleDownloadImages}
            type="file"
            accept="image/*"
            name="file"
            id="file"
            multiple
          />
        </label>
        {/* {files &&
          filesURL.map((url) => {
            return <img src={url} alt="1" />;
          })} */}
        <label htmlFor="youTubeURL">
          Додати посилання Youtube
          <input
            onChange={handleChange}
            value={youTubeURL}
            type="url"
            name="youTubeURL"
            id="youTubeURL"
          />
        </label>
        <button type="submit">Зберегти</button>
      </form>
    </>
  );
};

export default AddNewsForm;
