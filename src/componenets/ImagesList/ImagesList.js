export const ImagesList = ({ imagesURL }) => {
  return (
    <ul>
      {imagesURL.map(({ url, _id }) => {
        const width = 512;
        const updateUrl = url
          .split("upload")
          .join(`upload/f_auto/q_auto/c_scale,w_${width}`);
        return (
          <li key={_id}>
            <img src={updateUrl} alt={_id} />
          </li>
        );}
        
      )}
    </ul>
  );
};
