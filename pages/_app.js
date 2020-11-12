import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core';
import Router from 'next/router';
import Head from 'next/head';



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
