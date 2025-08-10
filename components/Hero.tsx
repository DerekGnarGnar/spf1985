'use client'
import React from "react";
import { Stack, Flex, Button, Text, VStack, Link, useBreakpointValue } from '@chakra-ui/react'
import Image from "next/image";
import { motion } from "framer-motion";




export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'110vh'}
      backgroundImage={
        "url(../images/sunburner.jpg)"
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
        

      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
        <Stack maxW={'2xl'} align={'center'} spacing={4} mt={0}
      >
          <Text
            color={'white'}
            fontWeight={200}
            lineHeight={1}
            fontStyle='italic'
            fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
            SunBurner
          </Text>
          <Stack direction={'row'}>
          <Text
            color={'whiteAlpha.800'}
            fontWeight={200}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '2xl', md: 'xl' })}>
            New album out now
          </Text>
          </Stack>
          <Stack direction={'row'}>
          <Link href="https://spf1985.bandcamp.com/album/sunburner" isExternal>
          <Button 
              bg={'whiteAlpha.400'}
              pt='7'
              pb='7'
              pl='30'
              pr='30'
             fontSize='xl'
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Buy & Stream Now
            </Button>
          </Link>
          </Stack>
           
         
        </Stack>
        </motion.div>
      </VStack>
    </Flex>
  )
}