import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';


const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
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
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Mình là Luận
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Mình viết web, lâu lâu viết blog và dịch bài. Trang này rất đơn giản được tạo ra với mong muốn cung cấp một số tư liệu về html,css, ...để các bạn có thể tham khảo khi cần.
          </Text>
          <Text color={secondaryTextColor[colorMode]}>
            Lâu lâu cũng thêm một chút ảnh nhí nhố và làm màu mình tích cóp được để cuộc sống lập trình chúng ta bớt nhạt hơn. Thanks mọi người!
          </Text>

        </Flex>

      </Stack>
    </Container>
  )
}

export default Index;
