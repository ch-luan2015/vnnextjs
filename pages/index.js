import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';



const url = 'https://ncl.io/blog';
const title = 'Blog – Nguyen Chinh Luan';
const description =
  'Một ích thông tin về phần mềm, thủ thuật Mac, lập trình web và cuộc sống của mình.';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };


  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
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
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={2}>
              {`Mình bắt đầu viết từ năm 2019, Một phần về tự học web như html, css, js ... 
                Tổng cộng mình đã viết ${blogPosts.length} bài trên trang này.   
                Mọi người có thể dùng thanh search để tìm cho nhanh điều mình muốn.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>

          {!searchValue && (
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={8} size="xl" fontWeight={700}>
                Most Popular
              </Heading>
              {/* <BlogPost {...styleGuides} />
              <BlogPost {...stripeDesign} />
              <BlogPost {...monorepo} /> */}
            </Flex>
          )}

          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
