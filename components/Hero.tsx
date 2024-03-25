'use client'
import React from "react";
import { Stack, Flex, Button, Text, VStack, Link, useBreakpointValue } from '@chakra-ui/react'
import Image from "next/image";



export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        "url(../images/HEROSPF1985.jpg)"
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6} mt={155}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontStyle='italic'
            fontSize={useBreakpointValue({ base: '6xl', md: '4xl' })}>
            SunBurner
          </Text>
          <Stack direction={'row'}>
          <Text
            color={'whiteAlpha.800'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '4xl' })}>
            New album out now
          </Text>
          </Stack>
          <Stack direction={'row'}>
          <Link href="https://spf1985.bandcamp.com/album/sunburner" isExternal>
          <Button 
              bg={'whiteAlpha.400'}
             
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Buy Now
            </Button>
          </Link>
          </Stack>
           
         
        </Stack>
      </VStack>
    </Flex>
  )
}