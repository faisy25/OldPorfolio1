import {
  Flex,
  Text,
  Heading,
  Link,
  Icon,
  Container,
  Box
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsStackOverflow,
  BsTwitter
} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";

const HeroThree = () => {
  return (
    <>
      <Container maxWidth="container.2xl">
        <Box mt={{ md: "20", sm: "15", base: "10" }}>
          <Flex justifyContent="center" textAlign="center" textColor="blue.500">
            <Flex direction="column">
              <Heading as="h3" mt="4">
                Find me on
              </Heading>
              <Text>Feel free to connect with me</Text>
              <Flex mt="4" direction="row" justifyContent="space-evenly">
                <Link
                  href="https://gitlab.com/fs288080"
                  color="orange.500"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={FaGitlab} w="8" h="8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/faisy7/"
                  color="blue.700"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsLinkedin} w="8" h="8" />
                </Link>
                <Link
                  href="https://github.com/faisy25"
                  color="gray.500"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsGithub} w="8" h="8" />
                </Link>
                <Link
                  href="https://www.instagram.com/freezycoder/"
                  mx="3"
                  color="brown"
                  target="_blank"
                >
                  <Icon as={BsInstagram} w="8" h="8" />
                </Link>
              </Flex>

              <Flex mt="4" direction="row" justifyContent="space-evenly">
                <Link
                  href="https://leetcode.com/faisy7"
                  color="yellow.600"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={SiLeetcode} w="8" h="8" />
                </Link>
                <Link
                  href="https://twitter.com/coder_freezy"
                  color="blue.300"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsTwitter} w="8" h="8" />
                </Link>
                <Link
                  href="https://stackoverflow.com/users/15807273/faisy"
                  color="orange.500"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsStackOverflow} w="8" h="8" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default HeroThree;
