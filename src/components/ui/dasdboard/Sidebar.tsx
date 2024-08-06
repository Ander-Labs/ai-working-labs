// src/components/ui/dasdboard/Sidebar.tsx

'use client';
import { useState } from 'react';
import { Box, Flex, IconButton, VStack, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const menuItems = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Profile', icon: '👤' },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Help', icon: '❓' },
];

export default function Sidebar({
    children,
}: {
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <Flex>
                <Box
                    w={isOpen ? "200px" : "50px"}
                    bg="black"
                    color="white"
                    h="100vh"
                    transition="width 0.3s"
                    position="fixed"
                >
                    <IconButton
                        aria-label="Toggle Sidebar"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={toggleSidebar}
                        bg="transparent"
                        color="white"
                        _hover={{ bg: 'red.700' }}
                        mt={4}
                        ml={2}
                    />
                    <VStack spacing={4} mt={8} align={isOpen ? "flex-start" : "center"}>
                        {menuItems.map((item, index) => (
                            <Flex key={index} w="full" align="center" p={2} _hover={{ bg: 'gray.700' }}>
                                <Text fontSize="xl" mr={4}>{item.icon}</Text>
                                {isOpen && <Text>{item.label}</Text>}
                            </Flex>
                        ))}
                    </VStack>
                </Box>
                <Box ml={isOpen ? "200px" : "50px"} p={4} w={'full'} >
                    {children} 
                </Box>
            </Flex>
        </>
    );
}
