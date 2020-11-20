import React from 'react'
import {
  Heading,
  Text,
  Box,
  useColorMode,
  Avatar,
  Flex,
  SimpleGrid,
  Image
} from '@chakra-ui/core';
export default function Card() {
  return (
    <Flex
      direction="row"
      justifyContent="start"
      maxWidth="700px"
      borderBottom="2px"
      borderColor="gray.200"
      color="gray.500"

    >
      <Box w="70%" my={4}>
        <Image backgroundImage="cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" />
      </Box>

      <Flex w="30%" direction="column" alignItems="start" p={2} my={4}>
        <Flex w="full" direction="row" alignItems="start">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex direction="column"
            justifyContent="center">
            <Heading as="h5" size="sm" ml={2}>Braydoncoyer</Heading>
            <Heading as="h5" size="sm" ml={2}>12h trước </Heading>
          </Flex>
        </Flex>
        <Text p={2} >Quyết tâm không yêu !</Text>

      </Flex>

    </Flex>
  )
}
