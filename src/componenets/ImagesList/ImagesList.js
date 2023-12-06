import { useInnerWidth } from "hooks";
import { useEffect, useState } from "react";
import { ImagesListStyled, ImgStyled } from "./ImagesList.styled";

export const ImagesList = ({ imagesURL }) => {
  const [imageWidth, setImageWidth] = useState(1168);

  const deviceFormFactor = useInnerWidth();
  useEffect(() => {
    switch (deviceFormFactor) {
      case "mobile":
        setImageWidth(280);
        break;
      case "tablet":
        setImageWidth(342);
        break;
      case "desktop":
        setImageWidth(376);
        break;
      default:
        break;
    }
  }, [deviceFormFactor]);
  return (
    <ImagesListStyled>
      {imagesURL.map(({ url, _id }) => {
        const updateUrl = url
          .split("upload")
          .join(`upload/f_auto/q_auto/c_scale,w_${imageWidth}`);
        return (
          <li key={_id}>
            <ImgStyled src={updateUrl} alt={_id} />
          </li>
        );
      })}
    </ImagesListStyled>
  );
};
