
'use client'

import { EmailIcon } from '@chakra-ui/icons'
import { FaInstagram } from "react-icons/fa6";
import { MdSettings } from 'react-icons/md'



import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
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
    
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
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
            <br />{' '}
           
          </Heading>
         
          <Center>
             
            <EmailIcon w={8} h={8} color="gray.600" />
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.600'}>
          &nbsp;&nbsp; spf1985booking@gmail.com
          </Text>
          
              </Center>
          <Center>
            <Text>
                Follow:
            </Text>
              <FaInstagram  />
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.600'}>
          &nbsp;&nbsp; spf1985booking@gmail.com
          </Text>
          </Center>
        </Stack>


      </Flex>



      <Flex flex={1}>
        <Image
          alt={'derek and gabe'}
          objectFit={'cover'}
          src={
            '../images/derekgabe.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}
