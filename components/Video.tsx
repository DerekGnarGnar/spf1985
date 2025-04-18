import React from "react";
import { AspectRatio, Center, Box, Heading, Stack, } from "@chakra-ui/react";

function YouTubeVideo() {
  return (
    <Box bg='#1F1F1F' borderWidth="2px" borderColor={'white'} paddingBottom={'2em'}>
      <div>
      <Center padding={'3em'}>
    <Heading size='lg' color='white'>"Tommy Pastrami's Last Wave" Music Video</Heading>
    </Center>
    </div>
    <div>
      <Center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JX5GvUf0YiI?si=ORRijIErN0mYuj1d"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      </Center>
      </div>

      <div>
      <Center padding={'3em'}>
    <Heading size='lg' color='white'>"Wipeout" Live at The Elephant in the Room</Heading>
    </Center>
    </div>
    <div>
      <Center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IYORFkH1l1E?si=HnSZ-gw1X2OF3Lqm"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      </Center>
      </div>
      <div>
      <Center padding={'3em'}>
    <Heading size='lg' color='white'>"Bolinas Bolero" Live at The Big Easy</Heading>
    </Center>
    </div>
    <div>
      <Center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jtbwbebqBDw?si=spzbLN4VZpvp6pY6"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      </Center>
      </div>

      <div>
      <Center padding={'3em'}>
    <Heading size='lg' color='white'>DRUM SOLO</Heading>
    </Center>
    </div>
    <div>
      <Center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9jQ9zaeHlZU?si=X4UXRIRdh8m-bF9a"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      </Center>
      </div>

      <div>
      <Center padding={'3em'}>
    <Heading size='lg' color='white'>SPF 1985 Christmas @ The Phoenix Theater</Heading>
    </Center>
    </div>
    <div>
      <Center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZrXg_20y_GA?si=572JoWtp_lmENhqB"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      </Center>
      </div>
   </Box>
    
    
  );
}

export default YouTubeVideo;