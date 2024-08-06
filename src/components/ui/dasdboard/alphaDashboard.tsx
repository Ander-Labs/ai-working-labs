'use client';
import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Sidebar from '@/components/ui/dasdboard/Sidebar'
import BtnFormOpen from './btnFormOpen';
import AlphaAlert from './alphaAlert'
import { useFormStore } from "@/Global/useFormStore";
import ChatLlama from '../ai/ChatLlama'
import CooldownTimer from './CooldownTimer'

export default function AlphaDashboard() {
    const formValidated = useFormStore(state => state.formValidated);

    return (
        <>
            <Sidebar >
                <AlphaAlert />
                <Box px={4} w="full" h="100vh">
                    <Heading as="h1" mb={6}>
                        Working Labs
                    </Heading>
                    <VStack spacing={4} align="flex-start">
                        <Box w="full" p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="md">
                            <Heading as="h2" size="md">Bienvenido a la Version Alpha </Heading>
                            <Text mt={2}>Esta es una versión simplificada de working labs unica y excluciva para participar en la
                                {' '} <Link href='https://github.com/midudev/hackaton-vercel-2024'
                                    color={'red.500'} isExternal>
                                    midudev: hackaton-vercel-2024.<ExternalLinkIcon mx='2px' />
                                </Link>
                            </Text>
                        </Box>
                        <Box w="full" p={4} display={'flex'} justifyContent={'center'} flexDirection={'column'} >
                            <Box p={4} w={'100%'}>
                                <CooldownTimer />
                            </Box>
                            {formValidated ? (
                                <ChatLlama />
                            ) : (
                                <BtnFormOpen />
                            )}
                        </Box>
                    </VStack>
                </Box>
            </Sidebar>
        </>
    );
}