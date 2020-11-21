import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://leerob.io/about';
const title = 'About Me – Lee Robinson';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Mình tên thật là Luận, tên giả cũng là Luận.
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Mình viết web, lâu lâu viết blog và dịch bài. Trang này rất đơn giản được tạo ra với mong muốn cung cấp một số tư liệu về html, css, js, react,...
              để các bạn có thể tham khảo hoặc tìm được một ít tư liệu khi cần.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Mình thích ráp máy tính, cài linux để vọc và chơi Dota2 trên window, mặc dù đánh đúng báo hại team.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Mình cũng là một thành viên núp lùm trên HackintoshVn. Lâu lâu cũng post một chút ảnh nhí nhố và làm màu mình tích cóp được để cuộc sống lập trình chúng ta bớt nhạt hơn. Thanks mọi người đã rì viu!
            </Text>
            {/* <iframe
              height="280"
              src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
              title="Hang ổ của Lựng"
              width="100%"
            /> */}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
