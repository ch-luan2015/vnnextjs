import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';

import NowPlaying from './NowPlaying';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <NowPlaying />
    <div>
      <Link href="https://github.com/ch-luan2015" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/chinhluan"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>


      <Link href="mailto:ch.luan2015@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>

    </div>

  </Flex>
);

export default Footer;
