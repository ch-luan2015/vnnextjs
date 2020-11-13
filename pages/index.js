import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import { frontMatter as abc } from './blog/monorepo-lerna-yarn-workspaces.mdx'


const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <Container>
      {/* {console.log("mono frontMatter", frontMatter)} */}
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Lee Robinson
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a developer, writer, and creator. I work at ▲Vercel as a
            Solutions Architect. You’ve found my personal slice of the internet
            – everything you want to know and more is here.
          </Text>

        </Flex>

      </Stack>
    </Container>
  )
}

export default Index;
