import React from "react";
import { AspectRatio, Center } from "@chakra-ui/react";

function YouTubeVideo() {
  return (
    <Center padding={'3em'}>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/JX5GvUf0YiI?si=ORRijIErN0mYuj1d"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
    </Center>
  );
}

export default YouTubeVideo;