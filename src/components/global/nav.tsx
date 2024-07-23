"use client";
import NavType from "@/types/NavType";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box as={"h1"} fontSize={"2xl"} fontWeight={600}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              {" "}
              Working-Labs
            </Link>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {NavType.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            p={2}
          >
            <Link href={"/auth/sign-in"}>Sign In</Link>
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.400"}
            href={"#"}
            _hover={{
              bg: "blue.300",
            }}
          >
            <Link href={"/auth/sign-up"}>Sign Up</Link>
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {NavType.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  // bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
