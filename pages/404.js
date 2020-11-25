import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';

const Error = () => {
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
            404 - Không Tìm Thấy Trang Bạn Yêu Cầu.
          </Heading>
          <Text color={secondaryTextColor[colorMode]} my={4}>
            Có thể do lỗi đường dẫn hay một thứ huyền diệu nào đó đã đưa bạn tới trang này. Bạn vui lòng xem lại đường dẫn giúp mình nhe. Thanks nhìu.
          </Text>
          <NextLink href="/" passHref>
            <Button
              as="a"
              p={[1, 4]}
              w="250px"
              fontWeight="bold"
              m="3rem auto 0"
            >
              Trở về Home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Error;
