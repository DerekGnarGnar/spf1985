import React from 'react'

import {
  Box,
  Text,
    Table,
    Thead,
    Tbody,
   Container,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
    Heading
  } from '@chakra-ui/react'

const ShowTable = () => {
  return (
    <div>

<Box pt="20px" pb='30px' bg='lightgray'>
<Box>
  <Center fontSize='2xl'>
 <Heading mb="20px">
  Catch us live!
  </Heading>
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">April 13, 2024 </Text> &nbsp;@ The Garden - Napa, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">April 20, 2024 </Text> &nbsp;@ Lagunitas Brewing - Petaluma, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">May 18, 2024 </Text> &nbsp;@ HenHouse Brewing - Santa Rosa, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">June 15, 2024</Text> &nbsp;@ The Freshtival - Cotati, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">July 5, 2024 </Text>&nbsp;@ Hook & Ladder Winery - Santa Rosa, California 
  </Center>
</Box>
</Box>
    </div>
  )
}

export default ShowTable;
