//src/components/global/sections/templateHero.tsx

'use client'

import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'

interface TemplateHeroProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonOneText: string;
    buttonUrl: string;
    buttonTwoText: string;
    buttonTwoUrl: string;
}

export default function TemplateHero({
    title,
    description,
    imageUrl,
    buttonOneText,
    buttonUrl,
    buttonTwoText,
    buttonTwoUrl,
}: TemplateHeroProps) {
    return (
        <Box w={'full'} h={'full'} minH={'100vh'} >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'center'}
                alignItems={'center'}
                gap={8}
                w={'full'}
                h={'full'}
            >
                <Box flex={1} textAlign={{ base: 'center', md: 'left' }} p={8} w={'full'} h={'full'}>
                    <Flex direction={'column'} justifyContent={'center'} >
                        <Text fontSize={'4xl'} fontWeight={'bold'}>{title}</Text>
                        <Text fontSize={'xl'} fontWeight={'normal'} mt={4}>{description}</Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={8}>
                            <Button colorScheme={'red'} >{buttonOneText}</Button>
                            <Button colorScheme={'red'} variant='outline'>{buttonTwoText}</Button>
                        </Stack>
                    </Flex>
                </Box>
                <Box flex={1} display={'flex'} justifyContent={'center'}>
                    <Image src={imageUrl} alt={title} width={400} height={400} objectFit={'cover'} />
                </Box>
            </Flex>
        </Box>
    );
}
