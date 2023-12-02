import { newsAPI } from "api/newsApi";
import { useState } from "react";

const AddNewsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState(null);
  const [filesURL, setFilesURL] = useState([]);
  // const [progress, setProgress] = useState({ started: false, pc: 0 });
  // const [msg, setMsg] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "youtubeURL":
        setYoutubeURL(value);
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

    const newPost = {};
    title !== "" && (newPost.title = title);
    description !== "" && (newPost.description = description);
    files && (newPost.files = files);
    youtubeURL !== "" && (newPost.youtubeURL = youtubeURL);

    console.log("handleSubmit  newPost:", newPost);

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
        <label htmlFor="youtubeURL">
          Додати посилання Youtube
          <input
            onChange={handleChange}
            value={youtubeURL}
            type="url"
            name="youtubeURL"
            id="youtubeURL"
          />
        </label>
        <button type="submit">Зберегти</button>
      </form>
    </>
  );
};

export default AddNewsForm;
