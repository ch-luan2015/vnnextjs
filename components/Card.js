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
      maxWidth="900px"
      borderBottom="2px"
      borderColor="gray.200"
      color="gray.500"
      wrap="none"
    >
      <Box w="70%" my={4}>
        <Image backgroundImage="cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" />
      </Box>

      <Flex w="30%" direction="column" justify="start" alignItems="start" m={[4, 8]}>
        <Heading w="100" as="h5" color="black" size="md">Thử thử cái ....</Heading>

        <Flex w="100%" direction="row" justifyContent="start" alignItems="start" mt={4}>
          <Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Flex direction="column" justify="start" alignItems="start" pl={2} >
            <Text fontSize="md" >Braydoncoyer</Text>
            <Text fontSize="sm" >12h trước </Text>
          </Flex>
        </Flex>


      </Flex>

    </Flex >
  )
}
