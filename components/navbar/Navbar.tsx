'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import Link from "next/link";
import navStyles from "./navbar.module.css"

//interface Props {
  //children: React.ReactNode}

const Links = [

{
name:"Shows",
path:'/shows/'
}
, 
{
  name:"Merch",
  path:"https://spf1985.bandcamp.com/merch"
},
{
  name:"Contact",
  path:"/contact"
}
];

const NavLink = ({children, path}: {children: React.ReactNode, path: string}) => (
  <Box   //as="a"
  px={2}
  py={1}
  rounded={'md'}
  _hover={{
    textDecoration: 'none',
    bg: useColorModeValue('gray.200', 'gray.700'),
  }}

  >
    <Link
    
      href={path}
      >
      {children}
    </Link>
  </Box>
  );


export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={'center'} >
            <Box as="a"href="/">
            <Text bgGradient="linear(to-l, #FF0080, teal)"  bgClip="text"
 fontWeight='extrabold' fontFamily='Helvetica' fontSize='6xl' letterSpacing='9'>SPF 1985</Text>  
              </Box>
            <HStack as={'nav'}  spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({name,path}) => (
                <NavLink key={path} path={path}>{name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
               
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({name,path}) => (
                <NavLink key={path} path={path}>{name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  )
}