import React from "react";
import Login from "./Login";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

type Props = {
  title?: string;
};

export const Header = ({ title = "Sample" }: Props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      borderBottomWidth="1px" //todo:
    >
      <Flex
        align="center"
        mr={{ md: "5" }}
        width={{ base: "100%", md: "auto" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <Heading as="h1" size="lg" letterSpacing={".1rem"}>
          {title}
        </Heading>

        <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
          <svg fill="gray.500" width="12px" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Flex>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "100%", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Examples</MenuItems>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Login colorScheme="pink" />
      </Box>
    </Flex>
  );
};
