import { useInnerWidth } from "hooks";
import { Container } from "./YoutubePlayer.styled";

export const YoutubePlayer = ({youtubeURL}) => {
  const deviceFormFactor = useInnerWidth();

  return (
    <Container>
      <iframe
        width={deviceFormFactor !== "mobile" ? "560" : "280"}
        height={deviceFormFactor !== "mobile" ? "315" : "auto"}
        src={youtubeURL.replace("youtu.be", "www.youtube.com/embed")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Container>
  );
};
