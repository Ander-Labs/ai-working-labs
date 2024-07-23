"use client";
// Imports the ShakraUi
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Data: any = new Date().getFullYear().toString();

export default function Footer() {
  return (
    <>
      <footer>
        <Box
          bg="black"
          w="100%"
          h="80px"
          p={6}
          color="white"
          textAlign="center"
        >
          <Flex>
            <Spacer>Copyright &copy; {Data}. Workin-Labs</Spacer>
          </Flex>
        </Box>
      </footer>
    </>
  );
}
