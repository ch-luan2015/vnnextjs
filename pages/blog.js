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

const url = 'https://leerob.io/blog';
const title = 'Blog – Lee Robinson';
const description =
    'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

const Blog = () => {
    const [searchValue, setSearchValue] = useState('');
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <>
            <Container>
                <Stack>

                </Stack>
            </Container>
        </>
    )
}
