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
  <Text fontWeight="bold">February 15, 2025 7pm </Text> &nbsp;@ Moonlight Brewing - Santa Rosa, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">February 16 2pm </Text> &nbsp;Hook & Ladder Winery - Occidental, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">March 1 2pm-8pm </Text> &nbsp;@ HenHouse Brewing - Petaluma, California 
  </Center>
</Box>
<Box>
  <Center fontSize='2xl'>
  <Text fontWeight="bold">March 15</Text> &nbsp;Unnamed Fest, Arlene Francis Center - Cotati, California 
  </Center>
</Box>

</Box>
    </div>
  )
}

export default ShowTable;
