import React from "react";
import { AspectRatio, Center, Box} from "@chakra-ui/react";

function YouTubeVideo() {
  return (
    <Box bg='gray.100'>
    <Center padding={'3em'}>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/JX5GvUf0YiI?si=ORRijIErN0mYuj1d"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
    </Center>
    <Center padding={'3em'}>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/jtbwbebqBDw?si=spzbLN4VZpvp6pY6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Center>
    </Box>
    
    
  );
}

export default YouTubeVideo;