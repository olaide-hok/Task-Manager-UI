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
    <Flex>
      {' '}
      <Heading as="h1" fontSize="1.5em">
        Dojo Tasks
      </Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
