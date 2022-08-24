import {
  Flex,
  Link,
  Heading,
  Box,
  Icon,
  Container,
  useColorMode
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BsFillMoonFill, BsFillSunFill, BsGithub } from "react-icons/bs";

import { useDispatch } from "react-redux";
import changeTheme from "../actions/colorActions";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const changeColor = () => {
    toggleColorMode();
    dispatch(changeTheme(colorMode));
  };
  return (
    <>
      {colorMode === "light" ? (
        <Icon onClick={changeColor} as={BsFillMoonFill} w="4" h="4" />
      ) : (
        <Icon onClick={changeColor} as={BsFillSunFill} w="4" h="4" />
      )}
    </>
  );
}

const Header = () => {
  return (
    <Flex
      zIndex="sticky"
      as="header"
      shadow="md"
      justifyContent="space-between"
      wrap="wrap"
      p="4"
      w="100%"
      top="0"
      position="fixed"
      alignItems="center"
      backdropFilter="saturate(180%) blur(20px)"
    >
      <Container maxWidth="container.2xl">
        <Flex
          direction={{ lg: "row", md: "row", base: "column" }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Flex alignItems="center">
            <Link as={RouterLink} to="/" _hover={{ textDecor: "none" }}>
              <Heading
                as="h2"
                color="blue.500"
                fontWeight="bold"
                size="lg"
                fontSize="2.2rem"
              >
                Fs
              </Heading>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap="6"
            justifyContent="space-evenly"
            fontWeight="bold"
            // fontSize="1.4rem"
            color="blue.500"
            fontSize={{ md: "1.4rem", sm: "1rem", base: "1rem" }}
          >
            <Link to="/about" as={RouterLink} _hover={{ textDecor: "none" }}>
              About
            </Link>
            <Link to="/projects" as={RouterLink} _hover={{ textDecor: "none" }}>
              Projects
            </Link>
            <Link to="/resume" as={RouterLink} _hover={{ textDecor: "none" }}>
              Resume
            </Link>
            <DarkMode />
          </Flex>

          <Box display={{ lg: "block", md: "none", base: "none" }}>
            <Flex>
              <Link
                href="https://github.com/faisy25"
                target="_blank"
                color="gray.500"
              >
                <Icon as={BsGithub} w="5" h="5" mx="2" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faisy7/"
                color="blue.700"
                target="_blank"
              >
                <Icon as={BsLinkedin} w="5" h="5" mx="2" />
              </Link>
              <Link
                href="https://www.instagram.com/freezycoder/"
                color="brown"
                target="_blank"
              >
                <Icon as={BsInstagram} w="5" h="5" mx="2" />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
