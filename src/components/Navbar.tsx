import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        Tasks UI
      </Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">
          HK
        </Box>
        <Text>olaidekareem43@yahoo.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
