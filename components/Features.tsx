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
    <Box p={4} >
       
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} >
      <Card maxW='sm'>
  <CardBody>
    <Image maxW={{ base: '100%', sm: '200px' }}
      src='../images/vinyl.png'
      alt='Sunburner Album Vinyl'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Sunburner Vinyl</Heading>
      
     
    </Stack>
  </CardBody>
  
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>

<Card maxW='sm'>
  <CardBody>
    <Image maxW={{ base: '100%', sm: '200px' }}
      src='../images/cd2.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Surf on the Beach CD</Heading>
     
     
    </Stack>
  </CardBody>
 
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
    
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image maxW={{ base: '100%', sm: '200px' }}
      src='../images/shirt.png'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>SPF 1985 Skull Tee Shirt</Heading>
      
     
    </Stack>
  </CardBody>
  
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>

      </SimpleGrid>
    </Box>
  )
}