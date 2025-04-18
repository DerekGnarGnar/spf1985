'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Image, Flex, Button, ButtonGroup,Divider, Heading} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'


interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}



export default function Features() {
  return (
    <Box p={66} bgColor={'darkgrey'} borderWidth="2px" borderColor={'white'} >
       
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyItems={'center'} >
      <Card maxW='sm' shadow='none' bgColor={'darkgray'}>
  <CardBody>
    <Image maxW={{ base: '300px', sm: '200px' }}
      src='../images/vinyl.png'
      alt='Sunburner Album Vinyl'
      borderRadius='lg'
    />
    <Stack mt='3' spacing='3' color='white'>
      <Heading size='md'>Sunburner Vinyl</Heading>
      
    </Stack>
  </CardBody>
  
</Card>

<Card maxW='sm' shadow='none' bgColor={'darkgray'}>
  <CardBody>
    <Image maxW={{ base: '300px', sm: '200px' }}
      src='../images/cd2.jpg'
      alt='picture of new cd'
      borderRadius='lg'
    />
    <Stack mt='3' spacing='3'>
      <Heading size='md' color='white'>Surf on the Beach CD</Heading>
     
     
    </Stack>
  </CardBody>
 
 
</Card>
<Card maxW='sm' shadow='none' bgColor={'darkgray'}>
  <CardBody>
    <Image maxW={{ base: '100%', sm: '200px' }}
      src='../images/shirt.png'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color='white'>SPF 1985 Skull Tee Shirt</Heading>
      
     
    </Stack>
  </CardBody>
  
  <CardFooter>
   
  </CardFooter>
</Card>

      </SimpleGrid>
    </Box>

  
  )
}