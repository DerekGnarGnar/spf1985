
'use client'

import { EmailIcon,  } from '@chakra-ui/icons'
import { FaInstagram } from "react-icons/fa6";
import { MdSettings } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';




import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Grid, GridItem
} from '@chakra-ui/react'

import {
    Container,
Center,
    Box,
   
    IconButton,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'gray.500'} >
      <Flex p={8} flex={1} mt={{base: 100, md:200}} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Center>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Booking:
            </Text>
            
        </Center>
           
          </Heading>
         
         <Center>
             
            <EmailIcon w={8} h={8} color="white" />
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          &nbsp;&nbsp; spf1985booking@gmail.com
          </Text>
          
          </Center>

          <Box>
          <Center>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
           
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             Follow:
            </Text>
            </Heading>   
        </Center>   
        
        
        <Center>
        <Grid>
          <GridItem>
          <FaInstagram  size={32} color="white" />
              <Text fontSize={{ base: 'lg', lg: 'lg' }} color={'white'}>
              &nbsp;&nbsp;www.instagram.com/spf_1985/
          </Text>
          </GridItem>
          <GridItem>
          <FaFacebook size={32} color="white" />
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          &nbsp;&nbsp; www.facebook.com/spf1985/
          </Text>
          </GridItem>
          </Grid>
          </Center>
          </Box>
        </Stack>


      </Flex>

      <Flex flex={1}>
        <Image
          alt={'derek and gabe'}
          objectFit={'cover'}
          src={
            '../images/Contactpagephoto.png'
          }
        />
      </Flex>
    </Stack>
  )
}
