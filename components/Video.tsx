import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

function YouTubeVideo() {
  const videos = [
    {
      title: `"Tommy Pastrami's Last Wave" Music Video`,
      url: "https://www.youtube.com/embed/JX5GvUf0YiI?si=ORRijIErN0mYuj1d",
    },
    {
      title: `"Wipeout" Live at The Elephant in the Room`,
      url: "https://www.youtube.com/embed/IYORFkH1l1E?si=HnSZ-gw1X2OF3Lqm",
    },
    {
      title: `"Bolinas Bolero" Live at The Big Easy`,
      url: "https://www.youtube.com/embed/jtbwbebqBDw?si=spzbLN4VZpvp6pY6",
    },
    {
      title: "DRUM SOLO",
      url: "https://www.youtube.com/embed/9jQ9zaeHlZU?si=X4UXRIRdh8m-bF9a",
    },
    {
      title: "SPF 1985 Christmas @ The Phoenix Theater",
      url: "https://www.youtube.com/embed/ZrXg_20y_GA?si=572JoWtp_lmENhqB",
    },
  ];

  return (
    <Box bg="#1F1F1F" borderWidth="2px" borderColor="white" pb="2em">
      {videos.map((video, index) => (
        <React.Fragment key={index}>
          <Center py="3em">
            <Heading size="lg" color="white">
              {video.title}
            </Heading>
          </Center>
          <Center>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Center>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default YouTubeVideo;