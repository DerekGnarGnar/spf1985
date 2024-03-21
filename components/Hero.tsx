'use client'
import React from "react";
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
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
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            SunBurner
          </Text>
          <Stack direction={'row'}>
          
            <Button
              bg={'whiteAlpha.400'}
              
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}