import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  Box
} from '@chakra-ui/core';


import Container from '../components/Container';

import { CustomLink } from '../components/MDXComponents';
import Card from '../components/Card';

const url = 'https://vnnextjs.com/memefun';
const title = 'MemeFun – Nguyen Chinh Luan';
const description =
  'Một ít thú vui của mình là sưu tập meme hài, bạn có thể dùng chúng lâu lâu gửi cho người thân hay bạn bè. Giúp họ vui vẻ trong một lúc cũng hay mà.';

const Memefun = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://vnnextjs.com/static/images/dashboard.jpg',
              alt: description,
              width: 900,
              height: 720
            }
          ]
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="900px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="900px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Memefun
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              Make the world has your voice !
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="900px"
            mt={8}
          >

            <Card />
            <Card />
            <Card />
          </Flex>

        </Stack>
      </Container>
    </>
  );
};

export default Memefun;
